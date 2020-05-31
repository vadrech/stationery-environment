function ExpandableToggler(expandable_type) {
  var x = document.getElementById(expandable_type);

  if (x.style.maxHeight === "1000px") {
    x.style.maxHeight = "0px";
    x.style.transition = "max-height 0.4s";
  } else {
    x.style.maxHeight = "1000px";
    x.style.transition = "max-height 0.7s";
  }
}


function MinimizeMaximize() {
  var a = document.getElementsByClassName("sidenavlinks");
  var b = document.getElementsByClassName("navhorizontallines");
  var c = document.getElementsByClassName("expandable_list");
  var explore = document.getElementById("explorenav");
  var minmaxindicator = document.getElementById("minmaxindicator");
  var minimizerbutton = document.getElementById("sidebarminbutton");
  
  if (minmaxindicator.style.maxHeight === "1000px") {
    var minimize = true;
  } else {
    var minimize = false;
  }

  if (minimize) {
    Array.prototype.forEach.call(a, function(element) {
      element.style.maxHeight = "0px";
      element.style.transition = "max-height 0.5s";
    });
    
    Array.prototype.forEach.call(b, function(element) {
      element.style.maxHeight = "0px";
      element.style.transition = "max-height 0.5s";
    });
    
    Array.prototype.forEach.call(c, function(element) {
      element.style.maxHeight = "0px";
      element.style.transition = "max-height 0.5s";
    });
    
    explore.style.maxHeight = "1000px";
    explore.style.transition = "max-height 0.7s";
    
    minimizerbutton.style.width = "0px";
    
  } else {
    Array.prototype.forEach.call(a, function(element) {
      element.style.maxHeight = "1000px";
      element.style.transition = "max-height 1.0s";
    });
    
    Array.prototype.forEach.call(b, function(element) {
      element.style.maxHeight = "1000px";
      element.style.transition = "max-height 1.0s";
    }); 
    
    explore.style.maxHeight = "0px";
    explore.style.transition = "max-height 0.6s";
    
    minimizerbutton.style.width = "34px";
  }
}
