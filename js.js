/*let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	  scrollProgress.style.display = "grid";
	} else {
	  scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	  document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;*/



  /*Support page*/

  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
  }
  
  function blurFunc() {
	let parent = this.parentNode;
	if (this.value == "") {
	  parent.classList.remove("focus");
	}
  }
  
  inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
  });



  function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "header") {
	  x.className += " responsive";
	} else {
	  x.className = "header";
	}
  } 

const budgetInput = document.querySelector('input[name="Enterprise-budget"]');
const budgetRegex = /^3[0-9]{5}$/;
const errorMessage = document.querySelector('.error-message');

budgetInput.addEventListener('blur', function(event) {
  if (!budgetRegex.test(event.target.value)) {
    event.target.classList.add("error");
    errorMessage.style.display = 'block';
  } else {
    event.target.classList.remove("error");
    errorMessage.style.display = 'none';
  }
});


