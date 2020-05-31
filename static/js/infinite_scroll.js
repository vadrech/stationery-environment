var container = document.getElementById('pencilscontainer');

var img = document.createElement('img');
img.src = '../static/images/looppencilbg.jpg';

container.appendChild(img);

var cloneImg1 = document.images[1].cloneNode(false);
var cloneImg2 = document.images[1].cloneNode(false);
var cloneImg3 = document.images[1].cloneNode(false);
var cloneImg4 = document.images[1].cloneNode(false);

container.appendChild(cloneImg1);
container.appendChild(cloneImg2);
container.appendChild(cloneImg3);
container.appendChild(cloneImg4);

// Step 3: Adding an infinite scroll effect
var sliderStartForward = document.images[1].getBoundingClientRect().top;
var sliderEndForward = document.images[2].getBoundingClientRect().bottom - 10;
var sliderStartBackward = document.images[1].getBoundingClientRect().bottom;

// We're repositionning our slider to our first true image 
// as currently the first image we're seing is a clone
container.scrollTop = sliderStartForward;

container.addEventListener('scroll', scrolling);

function scrolling() {  
  // We're sliding backwards and reached the end
  if (container.scrollTop < 1) {
    container.scrollTop = sliderStartBackward;
  } 

  // We're sliding forwards and reached the end
  if (container.scrollTop > sliderEndForward) {
    container.scrollTop = sliderStartForward;
  }
}

