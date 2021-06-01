//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyAiMVjEDcGI3IfDZn8ayKzWZgbP6hhQeIg",
  authDomain: "kwitter-project-2-7f460.firebaseapp.com",
  databaseURL: "https://kwitter-project-2-7f460-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-2-7f460",
  storageBucket: "kwitter-project-2-7f460.appspot.com",
  messagingSenderId: "637457434662",
  appId: "1:637457434662:web:8c5c5fbb218225848e7ee7"
};

firebase.initializeApp(firebaseConfig);

function addROOM() {
  save_name = document.getElementById("user_name").value;

  firebase.database().ref("/").child(user_name).update({
    My_breakfast: "Dosa",
    My_lunch: "Dal and Rice"
  });

  localStorage.setItem("user_name", save_name);

}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addROOM() {

  Room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(Room_name).update({
    Purpose: "Adding The Room Name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "Kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey =
          childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room_name" + Room_names);

        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id) ># + Room_names'</div> <hr>"

        document.getElementById("output").innerHTML = row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {

  console.log(name)
  localStorage.setItem("room_name", name);

  window.location = "Kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}