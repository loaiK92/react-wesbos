import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzGGkeLjp-Hz01JVg2WvaK8Y01Gav_YOk",
  authDomain: "catch-of-the-day-loai.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-loai.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is the default export
export default base;
