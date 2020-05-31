function WhoAreYou(who) {
  var x = document.getElementById("action_text_block");
  
  if (who === "Student") {    
    document.getElementById("student").style.backgroundColor = "rgba(0, 100, 175, 0.35)";
    document.getElementById("teacher").style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    document.getElementById("parent").style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    x.innerHTML = "STUDENT TEXT";
  }

  if (who === "Teacher") {    
    document.getElementById("student").style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    document.getElementById("teacher").style.backgroundColor = "rgba(0, 100, 175, 0.35)";
    document.getElementById("parent").style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    x.innerHTML = "TEACHER TEXT";
  }

  if (who === "Parent") {    
    document.getElementById("student").style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    document.getElementById("teacher").style.backgroundColor = "rgba(0, 0, 0, 0.07)";
    document.getElementById("parent").style.backgroundColor = "rgba(0, 100, 175, 0.35)";
    x.innerHTML = "PARENT TEXT";
  }
} 
