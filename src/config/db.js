import Firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyDfuYEFnTvM6EaLcnbajYAeDj3ESk_Ly5M",
    authDomain: "malazi-2d3be.firebaseapp.com",
    databaseURL: "https://malazi-2d3be.firebaseio.com",
    projectId: "malazi-2d3be",
    storageBucket: "malazi-2d3be.appspot.com",
    messagingSenderId: "412162271882"
  };

let app = Firebase.initializeApp(config);
export const db = app.database();