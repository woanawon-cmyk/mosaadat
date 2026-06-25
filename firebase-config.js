export const firebaseConfig = {
  apiKey: "AIzaSyABNyqXBP2vjVyYYH91tl_Z64H326FHbNQ",
  authDomain: "mouosadaat.firebaseapp.com",
  databaseURL: "https://mouosadaat-default-rtdb.firebaseio.com",
  projectId: "mouosadaat",
  storageBucket: "mouosadaat.appspot.com",
  messagingSenderId: "416929173579",
  appId: "1:416929173579:web:ae547463b847c4f72ebdce"
};

export function isFirebaseConfigured() {
  return !Object.values(firebaseConfig).some(value => String(value).includes("PUT_YOUR_"));
}
