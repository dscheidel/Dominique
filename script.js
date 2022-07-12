var fontSize = 72;
if (window.screen.width < 700) fontSize = 32;
else if (window.screen.width < 1200) fontSize = 56;
var vara = new Vara(
   "#container",
   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
   [
      {
         text: "My name is Dominique Scheidel",
         y: 150,
         fromCurrentPosition: { y: false },
         duration: 3000
      },
      {
         text: "hello Dominique, my name is Tom Riddle",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "Do you know anything about the Chamber of Secrets ?",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4500
      },
      {
         text: "Yes",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 1000
      },
      {
         text: "Can you tell me ?",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "No",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 1000
      },
      {
         text: "But I can show you",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "Let me take you back fifty years ago",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      
   ],
   {
      strokeWidth: 2,
      color: "#fff",
      fontSize: fontSize,
      textAlign: "center"
   }
);
vara.ready(function () {
   var erase = true;
   vara.animationEnd(function (i, o) {
      if (i == "no_erase") erase = false;
      if (erase) {
         o.container.style.transition = "opacity 1s 1s";
         o.container.style.opacity = 0;
      }
   });
   vara.get("github").container.style.cursor = "pointer";
   vara.get("github").container.onclick = function () {
      document.querySelector("#link").click();
   };
});

