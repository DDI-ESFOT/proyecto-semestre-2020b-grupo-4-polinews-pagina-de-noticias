import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage, Timestamp } from "../firebase";
import translateMessage from "../utils/Translate";
import { message } from "antd";
import male_student from "../images/male_student.png";
import female_student from "../images/female_student.png";
import female_teacher from "../images/female_teacher.png";
import male_teacher from "../images/male_teacher.png";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function useAuthProvider() {
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [interships, setInterships] = useState([]);

  const handleUser = (user) => {
    if (user) {
      // usuario con sesion activa
      setUser(user);

      return user;
    } else {
      // no tengo sesión activa
      setUser(false);
      return false;
    }
  };

  async function register(data) {
    console.log("data", data);
    try {
      const userData = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("USER DATA", userData);
      const { uid } = userData.user;
      const { date } = data;
      console.log("date", date);
      const newDate = date.toDate();
      data["date"] = Timestamp.fromDate(newDate);

      await db
        .collection("users")
        .doc(uid)
        .set(data)
        .then(() => {
          console.log("Document successfully written!");
        });

      message.success("Usuario registrado");
      // handleUser(user);
      // return true;
    } catch (error) {
      console.log("error", error);
      // const errorCode = error.code;
      message.error(translateMessage(error));
      handleUser(false);
      throw error;
    }
  }

  async function fetchDataUser(uid) {
    try {
      const doc = await db.collection("users").doc(uid).get();
      const data = await doc.data();
      return data;

      //SetDataUser(data);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function fetchAvatar(uid) {
    try {
      const doc = await db.collection("users").doc(uid).get();
      const data = await doc.data();

      if (data.gender == "male") {
        if (data.status == "student") {
          return male_student;
        } else {
          return male_teacher;
        }
      } else {
        if (data.status == "student") {
          return female_student;
        } else {
          return female_teacher;
        }
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function fetchNews() {
    try {
      const snap = await db.collection("news").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setNews(docs);
      //setNews(news.docs);
      console.log("NEWS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function fetchCourses() {
    try {
      const snap = await db.collection("courses").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setCourses(docs);

      console.log("CURSOS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function fetchDataCourse(uid) {
    try {
      const doc = await db.collection("courses").doc(uid).get();
      const data = await doc.data();
      return data;
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function fetchEvents() {
    try {
      const snap = await db.collection("events").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setEvents(docs);

      console.log("EVENTOS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function fetchInterships() {
    try {
      const snap = await db.collection("interships").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setInterships(docs);

      console.log("PASANTIAS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function registerFormInterships(data) {
    console.log("DATOSSSS FORMULARIO PASANTIAS", data);

    try {
      const { duration, photo } = data;
      console.log("photo:", photo);

      data["duration"] = [
        Timestamp.fromDate(duration[0].toDate()),
        Timestamp.fromDate(duration[1].toDate()),
      ];

      const ref = db.collection("interships").doc();
      const id = ref.id;
      const newData = { ...data, photo: "" };
      await ref.set(
        {
          ...newData,
          id,
        },
        { merge: true }
      );

      console.log("Document successfully written!");

      //create storage ref

      let storageRef = storage.ref();
      const imgFile = storageRef.child(`interships/${id}`);
      let task = imgFile.put(photo[0].originFileObj);
      task.on(
        "state_changed",

        function progress(snap) {},

        function error(err) {},

        async function complete(err) {
          // Upload completed successfully, now we can get the download URL

          task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            console.log("public url:", downloadURL);

            ref.set({ photo: downloadURL }, { merge: true });

            console.log("public url saved on docs");
          });
        }
      );
      message.success("Oferta creada");
    } catch (error) {
      console.log("ERROR", error);
      message.error(translateMessage(error));
    }
  }

  async function registerFormEvents(data) {
    console.log("DATOSSSS FORMULARIO EVENTOS", data);

    try {
      const { date, time, photo } = data;
      console.log("photo:", photo);

      const newTime = time.toDate();
      data["time"] = Timestamp.fromDate(newTime);
      data["date"] = [
        Timestamp.fromDate(date[0].toDate()),
        Timestamp.fromDate(date[1].toDate()),
      ];

      const ref = db.collection("events").doc();
      const id = ref.id;
      const newData = { ...data, photo: "" };
      await ref.set(
        {
          ...newData,
          id,
        },
        { merge: true }
      );

      console.log("Document successfully written!");

      //create storage ref

      let storageRef = storage.ref();
      const imgFile = storageRef.child(`events/${id}`);
      let task = imgFile.put(photo[0].originFileObj);
      task.on(
        "state_changed",

        function progress(snap) {},

        function error(err) {},

        async function complete(err) {
          // Upload completed successfully, now we can get the download URL

          task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            console.log("public url:", downloadURL);

            ref.set({ photo: downloadURL }, { merge: true });

            console.log("public url saved on docs");
          });
        }
      );
      message.success("Evento creado");
    } catch (error) {
      console.log("ERROR", error);
      message.error(translateMessage(error));
    }
  }

  async function registerFormCourses(data) {
    console.log("DATOSSSS FORMULARIO CURSOS", data);

    try {
      const { date, time, photo } = data;

      data["time"] = Timestamp.fromDate(time.toDate());
      data["date"] = [
        Timestamp.fromDate(date[0].toDate()),
        Timestamp.fromDate(date[1].toDate()),
      ];

      const ref = db.collection("courses").doc();
      const id = ref.id;
      const newData = { ...data, photo: "" };
      await ref.set(
        {
          ...newData,
          id,
        },
        { merge: true }
      );

      console.log("Document successfully written!");

      //create storage ref

      let storageRef = storage.ref();
      const imgFile = storageRef.child(`courses/${id}`);
      let task = imgFile.put(photo[0].originFileObj);
      task.on(
        "state_changed",

        function progress(snap) {},

        function error(err) {},

        async function complete(err) {
          // Upload completed successfully, now we can get the download URL

          task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            console.log("public url:", downloadURL);

            ref.set({ photo: downloadURL }, { merge: true });

            console.log("public url saved on docs");
          });
        }
      );
      message.success("Curso creado");
    } catch (error) {
      console.log("ERROR", error);
      message.error(translateMessage(error));
    }
  }

  async function login(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
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
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("SESIÓN ACTIVA", user);

          const userData = await fetchDataUser(user.uid);
          const avatar = await fetchAvatar(user.uid);

          handleUser({ ...user, ...userData, avatar: avatar });

          // history.replace(Routes.HOME);
        } else {
          // User is signed out
          console.log("SIN SESIÓN", user);
          handleUser(false);
        }
      });
    };

    fetchNews();
    fetchEvents();
    fetchCourses();
    fetchInterships();
    init();
    // } catch (error) {
    //   console.log("NO USER");
    // }
  }, []);

  return {
    user,
    news,
    events,
    courses,
    interships,
    register,
    login,
    logout,
    registerFormEvents,
    registerFormInterships,
    registerFormCourses,
    fetchDataCourse,
    // sendPasswordResetEmail,
    // confirmPasswordReset
  };
}
