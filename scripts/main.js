// change user button
let userButton = document.getElementById("user");
let myHeading = document.getElementById("welcome");

function setUserName(){
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName()
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}! Welcome to my website! In this website, you will see...`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}! Welcome to my website! In this website, you will see...`;
}
  
userButton.onclick = () => {
    setUserName();
};

// show/hide interest section button
let mySection = document.getElementById("interest_section");
let interestButton = document.getElementById("interest");

function toggle(){
    if (mySection.style.display === "none"){
        mySection.style.display = "block";
        interestButton.textContent = "Hide interests section"
    } else {
        mySection.style.display = "none";
        interestButton.textContent = "Show interests section"
    };
}
interestButton.onclick = () => {
    toggle();
}
