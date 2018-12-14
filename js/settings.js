// UploadCare Settings
UPLOADCARE_PUBLIC_KEY = '97e1c9082ac09df48428';
UPLOADCARE_EFFECTS = 'crop,rotate,mirror,flip,enhance,sharp,blur,grayscale,invert';
UPLOADCARE_IMAGES_ONLY = true;
UPLOADCARE_PREVIEW_STEP = true; 

var app_firebase = {};
(() => {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBWSbYCOoa142F5HEx6KsPdte9om42_2ps",
		authDomain: "meme-generator-4869.firebaseapp.com",
		databaseURL: "https://meme-generator-4869.firebaseio.com",
		projectId: "meme-generator-4869",
		storageBucket: "meme-generator-4869.appspot.com",
		messagingSenderId: "80438518502"
	};
	firebase.initializeApp(config);
	app_firebase = firebase;

	function fnCreate(path, body, callBack) {
		if(!path || !body) return;
		app_firebase.database().ref(path).set(body, callBack);
	}

	function fnRead(path, successFunction, errorFunction) {
		if(!path || !successFunction || !errorFunction) return;
		app_firebase.database().ref(path).once('value').then(successFunction, errorFunction);
	}

	function fnUpdate(path, body, callBack) {
		if(!path || !body) return;
		app_firebase.database().ref(path).update(body, callBack);
	}

	function fnDelete(path, callBack) {
		if(!path) return;
		app_firebase.database().ref(path).remove(callBack);
	}  

	app_firebase.databaseApi ={
		create: fnCreate,
		read: fnRead,
		update: fnUpdate,
		delete: fnDelete,
	}
})();

//Firebase Settings
/*
var config = {
    apiKey: 'AIzaSyD6xIsrbAiwYJ9hDJBO7xjvLZsUo0tL1Tg',
    authDomain: 'meme-master-177fb.firebaseapp.com',
    databaseURL: 'https://meme-master-177fb.firebaseio.com',
    projectId: 'meme-master-177fb',
    storageBucket: 'meme-master-177fb.appspot.com',
    messagingSenderId: '1043399803617'
};

var app_firebase = {};
firebase.initializeApp(config);
app_firebase = firebase;
app_firebase['haha'] = ()=>{
    console.log('From setting');
};
*/
