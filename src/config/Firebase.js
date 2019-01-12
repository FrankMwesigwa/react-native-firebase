import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDfuYEFnTvM6EaLcnbajYAeDj3ESk_Ly5M",
    authDomain: "malazi-2d3be.firebaseapp.com",
    databaseURL: "https://malazi-2d3be.firebaseio.com",
    projectId: "malazi-2d3be",
    storageBucket: "malazi-2d3be.appspot.com",
    messagingSenderId: "412162271882"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;