//YOUR FIREBASE LINKS

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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("mssg").value;
      firebase.database().ref(room_name).push({
            Name: user_name,
            Message: msg,
            like: 0
      });
      document.getElementById("mssg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);

                        Name = message_data['Name'];
                        Message = message_data['Message'];
                        like = message_data['Likes'];

                        Name_With_Tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'> </h4>";
                        Message_With_Tag = "<h4 class='message_h4'>" + Message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                        row = Name_With_Tag + Message_With_Tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();





function updateLike(message_id) {
      console.log("Clicked on Like Button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}