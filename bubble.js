var timer = 30;
var skar = 0;
var hitrn; 

document.querySelector("#bottom").addEventListener("click", function(dtl){
  var clicknum = Number(dtl.target.textContent);
   if (clicknum === hitrn){
       upskore()
       getbubble()
       gethit()
    //    settime()
   }
})

function upskore(){
 skar += 10
 document.querySelector(".skore").textContent = skar;
}

function gethit(){
 hitrn = Math.floor(Math.random()*10)
 document.querySelector(".hitt").innerHTML = hitrn;
}

function getbubble(){
var get = ""

for(var i=0; i<=209; i++){
  var Ma = Math.floor(Math.random()*10)
 get += `<div id="bubble"><h4>${Ma}</h4></div>`
}
document.getElementById("bottom").innerHTML= (get);
}

function settime () {
   var times = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector(".time").textContent = timer;
        }
        else{
            clearInterval(times)
            document.querySelector("#bottom").innerHTML = `<h1> Your Final Score ${skar}  </h1> <button id="rebtn"> Restart </button>`
            document.querySelector("button").addEventListener("click", function(){
                timer = 30
                settime()
                getbubble() 
                gethit()
            })
        }                         
    },1000);
}
settime()
getbubble() 
gethit()


// what is new improvements

// incresed time to 30sec
// changed some DOM slectors
// added a new restart button