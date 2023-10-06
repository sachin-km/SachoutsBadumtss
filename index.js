
for(i=0;i<document.querySelectorAll("button").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){

    switch(this.innerHTML) {
        case "w":
            tom1 = new Audio(src="./sounds/tom-1.mp3");
            tom1.play();
          break;
          case "a":
            kick = new Audio(src="./sounds/kick-bass.mp3");
            kick.play();
          break;
          case "s":
            tom2 = new Audio(src="./sounds/tom-2.mp3");
            tom2.play();
          break;
          case "d":
            snare = new Audio(src="./sounds/snare.mp3");
            snare.play();
          break;
          case "j":
            crash = new Audio(src="./sounds/crash.mp3");
            crash.play();
          break;
          case "k":
            tom3 = new Audio(src="./sounds/tom-3.mp3");
            tom3.play();
          break;
          case "l":
            tom4 = new Audio(src="./sounds/tom-4.mp3");
            tom4.play();
          break;
          
      }
})
}
document.addEventListener("keydown",function(event){

    switch(event.key) {
        case "w":
            tom1 = new Audio(src="./sounds/tom-1.mp3");
            tom1.play();
          break;
          case "a":
            kick = new Audio(src="./sounds/kick-bass.mp3");
            kick.play();
          break;
          case "s":
            tom2 = new Audio(src="./sounds/tom-2.mp3");
            tom2.play();
          break;
          case "d":
            snare = new Audio(src="./sounds/snare.mp3");
            snare.play();
          break;
          case "j":
            crash = new Audio(src="./sounds/crash.mp3");
            crash.play();
          break;
          case "k":
            tom3 = new Audio(src="./sounds/tom-3.mp3");
            tom3.play();
          break;
          case "l":
            tom4 = new Audio(src="./sounds/tom-4.mp3");
            tom4.play();
          break;
         
    }

})