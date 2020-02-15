  // Your web app's Firebase configuration
  /*var firebaseConfig = {
    apiKey: "AIzaSyCG7tXLv-egEb0ofnJ7XT7ZeRZWUrDvkRk",
    authDomain: "webapp-a1718.firebaseapp.com",
    databaseURL: "https://webapp-a1718.firebaseio.com",
    projectId: "webapp-a1718",
    storageBucket: "webapp-a1718.appspot.com",
    messagingSenderId: "489298037072",
    appId: "1:489298037072:web:c4e824c24bf38e23ba0455",
    measurementId: "G-6E6EDGF56Y"
  };*/
  var firebaseConfig = {
  apiKey: "AIzaSyBzw6vMJZyMw5mH--Xj8228_PONIttRaPk",
  authDomain: "sihfinal-9c591.firebaseapp.com",
  databaseURL: "https://sihfinal-9c591.firebaseio.com",
  projectId: "sihfinal-9c591",
  storageBucket: "sihfinal-9c591.appspot.com",
  messagingSenderId: "388392784537",
  appId: "1:388392784537:web:3314a7889b92dedca19e08"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('webdatabase');
$('#webdatabase').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        number: $('.number').val(),
        address: $('.address').val(),
		longlat: $('.longlat').val(),
    });
	
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

