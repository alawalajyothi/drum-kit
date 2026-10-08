//document.querySelector("button").addEventListener("click",handleclick);

//function handleclick(){
  //  alert("W was clicked ");
//}

var numofdrumbtns = document.querySelectorAll(".drum").length;
for (var i=0; i<numofdrumbtns; i++ ){//using for loop to all the buttons //
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

    function handleclick(){
        
     var buttoninnerHTML = this.innerHTML;// it is accessing all the buttons
     makesound(buttoninnerHTML);
     buttonAnimation(buttoninnerHTML);

     /*switch(buttoninnerHTML){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;    

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;   
            
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break; 
            
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            
        case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;   
            
         default:console.log(buttoninnerHTML);   
     }*/

    }
     
}
     
    
    
    document.addEventListener("keypress",function(event){ //adding events for keyboard//
        makesound(event.key);
        buttonAnimation(event.key);
    });

    function makesound(key){//it is for keyboard pressing sounds//
                            // accessing all the letters for audios//
        switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;    

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;   
            
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break; 
            
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            
        case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;   
            
         default:
            console.log(key);
     }

    }

    function buttonAnimation(currentkey){ //to get animation on button pressing//
        var activebutton = document.querySelector("." + currentkey);
        activebutton.classList.add("pressed");
        setTimeout(function(){ //setting timeout//
            activebutton.classList.remove("pressed");
        },100);
    }
    





