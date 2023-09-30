import { auth } from './config';
import {  getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const displayName = document.getElementById('2DN')
const email = document.getElementById('EN')
const auth = getAuth();
const user = auth.currentUser;

const handleplay = () => {


  if (user !== null) {
 return;
}
const name = user.displayName;
  const Email = user.email;
  const photoURL = user.photoURL;
 
};
console.log(displayName);
console.log(email);
console.log(photoURL);
logoutBtn.addEventListener('click',handleplay)

