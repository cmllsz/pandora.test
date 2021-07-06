function myFunctionA(){
            if (document.getElementById('personal-reminder1')) {

                if (document.getElementById('personal-reminder1').style.display == 'none') {
                    document.getElementById('personal-reminder1').style.display = 'block';
                    document.getElementById('personal-reminder2').style.display = 'none';
                }
                else {
                    document.getElementById('personal-reminder1').style.display = 'none';
                    document.getElementById('personal-reminder2').style.display = 'block';
                }
            }
}

$(document).ready(function () {

    $("body").mousemove(function (e) {
        handleMouseMove(e);
    });

    function handleMouseMove(event) {

        var x = event.pageX;
        var y = event.pageY;

        $("#personal-reminder1").animate({
            left: x + 20,
            top: y + 20,
        }, 1);
        
        $("#personal-reminder2").animate({
            left: x + 20,
            top: y + 20,
        }, 1);
    }
});


function myFunctionB() {
  var x = document.getElementById("privacypolicy");
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}


function myFunctionE() {
  var x = document.getElementById("animate");
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  };

{ var x = document.getElementsByClassName("stampa-parrr");
    
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;


// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < x.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = x[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(20, winHeight);
    randomLeft = getRandomNumber(20, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"0px";
    thisDiv.style.left = randomLeft +"0px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}
 
}
}

function myFunctionC() {
  var x = document.getElementById("menu-out");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  };
  
  var y = document.getElementById("pandora-off");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  };
    
  var z = document.getElementById("pandora-on");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  };
    
  var j = document.getElementById("eyeball");
  if (j.style.display === "block") {
    j.style.display = "none";
  } else {
    j.style.display = "block";
  };
    
    

}

/*function pc1*/
{myID = document.getElementById("pc1");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        pc1.className = "privacyandcookies show"
    } else {
        pc1.className = "privacyandcookies hide"
    }
};

window.addEventListener("scroll", myScrollFunc);}

/*function pc2*/
{myID = document.getElementById("pc2");

var myScrollFunc = function () {
    var y = $(window).scrollTop();
    if (y >= 400) {
        pc2.className = "privacyandcookies show"
    } else {
        pc2.className = "privacyandcookies hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
}

/*function pc3*/
{myID = document.getElementById("pc3");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 1200) {
        pc3.className = "privacyandcookies show"
    } else {
        pc3.className = "privacyandcookies hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
}

/*function pc4*/
{myID = document.getElementById("pc4");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 1800) {
        pc4.className = "privacyandcookies show"
    } else {
        pc4.className = "privacyandcookies hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
}

/*function random position pc*/
{ var divs = document.getElementsByClassName("privacyandcookies");
    
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;


// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(20, winHeight);
    randomLeft = getRandomNumber(20, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"0px";
    thisDiv.style.left = randomLeft +"0px";

    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}
 
}
