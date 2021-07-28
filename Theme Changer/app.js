let userInput = document.getElementById('themeUserInput');
let bgContainer = document.getElementById('bgContainer');
let headingEl = document.getElementById('heading');
let darkTheme = "dark-bg-theme.png";
let lightTheme = "light-bg-theme.png";

userInput.addEventListener("keydown", function(event){
   if(event.key === "Enter"){
       let theme = userInput.value;
       if(theme === "Dark"){
           bgContainer.style.backgroundImage = `url('${darkTheme}')`;
           heading.style.color = "white";
       }
       else if(theme === "Light"){
           bgContainer.style.backgroundImage = `url('${lightTheme}')`;
           heading.style.color = "#014d40";
       }
       else{
           alert("Enter Valid theme");
       }
   } 
});