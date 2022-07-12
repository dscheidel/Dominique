var fontSize = 72;
if (window.screen.width < 700) fontSize = 28;
else if (window.screen.width < 1200) fontSize = 56;
var vara = new Vara(
   "#container",
   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
   [
      {
         text: "Du hast es geschafft!",
         y: 150,
         fromCurrentPosition: { y: false },
         duration: 3000
      },
      {
         text: "Du bist auf meinem Portfolio gelandet...",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "Schau dich ruhig um..",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "es gibt einiges zu endecken!",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "Wenn Du Fragen hast...",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "melde dich einfach per Email bei mir!",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "Ansonsten viel Spass beim stoebern!",
         y: 150,
         fromCurrentPosition: { y: false },
         delay: 3000,
         duration: 4000
      },
      {
         text: "Dominique Scheidel",
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


