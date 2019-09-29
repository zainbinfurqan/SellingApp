import firebase  from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDwuVNPMVdbPcCFdkg2dATctjYaxC2shiE",
    authDomain: "fir-ffe99.firebaseapp.com",
    databaseURL: "https://fir-ffe99.firebaseio.com",
    projectId: "fir-ffe99",
    storageBucket: "fir-ffe99.appspot.com",
    messagingSenderId: "813572190289",
    appId: "1:813572190289:web:283356819855ad11ea0870"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export {
      storage,firebase as default
  }