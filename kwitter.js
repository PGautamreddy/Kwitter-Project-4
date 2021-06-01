  function addUSER(){
      save_name = document.getElementById("user_name").value;

      localStorage.setItem("user_name" , save_name);

      window.location = "kwitter_room.html";
  }