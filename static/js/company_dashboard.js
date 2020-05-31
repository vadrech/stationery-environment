var container1 = document.getElementById("progress1");
var container2 = document.getElementById("progress2");
var container3 = document.getElementById("progress3");
var container4 = document.getElementById("progress4");
var container5 = document.getElementById("progress5");
var container6 = document.getElementById("progress6");
var container7 = document.getElementById("progress7");
var container8 = document.getElementById("progress8");
var container9 = document.getElementById("progress9");

var containers = [];
containers.push(container1, container2, container3, container4, container5, container6, container7, container8, container9);

var validContainers = [];
var validContainersIDs = [];

for (container of containers) {
  if (container !== null) {
    validContainers.push(container);
    validContainersIDs.push(container.id);
  }
}

var progressA = document.createElement("img");
var progressB = document.createElement("img");
var progressC = document.createElement("img");
var progressD = document.createElement("img");

progressA.src = "../static/images/progress_bars/".concat(validContainersIDs[0], ".svg");
progressB.src = "../static/images/progress_bars/".concat(validContainersIDs[1], ".svg");
progressC.src = "../static/images/progress_bars/".concat(validContainersIDs[2], ".svg");
progressD.src = "../static/images/progress_bars/".concat(validContainersIDs[3], ".svg");


validContainers[0].appendChild(progressA);
validContainers[1].appendChild(progressB);
validContainers[2].appendChild(progressC);
validContainers[3].appendChild(progressD);


