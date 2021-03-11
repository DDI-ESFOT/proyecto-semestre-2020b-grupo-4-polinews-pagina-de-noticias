import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, storage, Timestamp } from '../firebase';
import translateMessage from '../utils/Translate';
import { message } from 'antd';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const auth = useAuthProvider();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

function useAuthProvider() {
	const [user, setUser] = useState(null);

	const handleUser = (user) => {
		if (user) {
			// si tengo sesión activa
			setUser(user);

			return user;
		} else {
			// no tengo sesión activa
			setUser(false);
			return false;
		}
	};

	async function register(data) {
		console.log('data', data);
		try {
			const userData = await auth.createUserWithEmailAndPassword(data.email, data.password);
			console.log('USER DATA', userData);
			const { uid } = userData.user;
			const { date } = data;
			console.log('date', date);
			const newDate = date.toDate();
			data['date'] = Timestamp.fromDate(newDate);

			await db
				.collection('users')
				.doc(uid)
				.set(...data)
				.then(() => {
					console.log('Document successfully written!');
				});

			message.success('Usuario registrado');
			// handleUser(user);
			// return true;
		} catch (error) {
			console.log('error', error);
			// const errorCode = error.code;
			// message.error(translateMessage(errorCode));
			handleUser(false);
			throw error;
		}
	}

	async function registerFormEvents(data) {
		console.log('DATOSSSS FORMULARIO EVENTO', data);
		try {
			const { date, time } = data;
			const { uid } = data.photo;
			const newDateStart = date[0].toDate();
			const newDateFinish = date[1].toDate();
			const newTime = time.toDate();
			data['time'] = Timestamp.fromMillis(newTime);
			//data['date'] = Timestamp.fromDate(newDateStart);

			let photoURL =
				'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ=';
			if (data.photo) {
				const snapshot = await storage.ref(`events/${uid}`).put(data.photo);
				photoURL = await snapshot.ref.getDownloadURL();
			}

			await db
				.collection('events')
				.add({
					...data,
					dateStart: newDateStart,
					dateEnd: newDateFinish,
					photoURL,
				})
				.then(() => {
					console.log('Document successfully written!');
				});
		} catch (e) {
			console.log('ERROR', e);
		}
	}

	async function login(email, password) {
		auth.signInWithEmailAndPassword(email, password)
			.then((user) => {
				// Signed in
				// handleUser(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				message.error(translateMessage(errorCode));
				handleUser(false);
			});
	}

	async function logout() {
		try {
			await auth.signOut();
			handleUser(false);
		} catch (error) {}
	}

	// const sendPasswordResetEmail = (email) => {
	//   return firebase
	//     .auth()
	//     .sendPasswordResetEmail(email)
	//     .then(() => {
	//       return true;
	//     });
	// };
	//
	// const confirmPasswordReset = (password, code) => {
	//   const resetCode = code || getFromQueryString('oobCode');
	//
	//   return firebase
	//     .auth()
	//     .confirmPasswordReset(resetCode, password)
	//     .then(() => {
	//       return true;
	//     });
	// };

	// }

	useEffect(() => {
		// try {
		const init = () => {
			auth.onAuthStateChanged((user) => {
				if (user) {
					// User is signed in, see docs for a list of available properties
					// https://firebase.google.com/docs/reference/js/firebase.User
					console.log('SESIÓN ACTIVA', user);
					handleUser(user);

					// history.replace(Routes.HOME);
				} else {
					// User is signed out
					console.log('SIN SESIÓN', user);
					handleUser(false);
				}
			});
		};

		init();
		// } catch (error) {
		//   console.log("NO USER");
		// }
	}, []);

	return {
		user,
		register,
		login,
		logout,
		registerFormEvents,
		// sendPasswordResetEmail,
		// confirmPasswordReset
	};
}
