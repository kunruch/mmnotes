import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_AwrEDAn-PCacXZKzFOT-bMcpvL0t3GQ",
  authDomain: "mmnotes-cc952.firebaseapp.com",
  databaseURL: "https://mmnotes-cc952.firebaseio.com",
  storageBucket: "mmnotes-cc952.appspot.com",
  messagingSenderId: "395286631831"
};

global.firebase = Firebase.initializeApp(config);
global.db = firebase.database();

Vue.use(VueFire);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})