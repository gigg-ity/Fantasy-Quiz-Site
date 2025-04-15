//Message popup
window.onload = function(){
    document.getElementById("welcomePopup").style.display = "flex";
    document.getElementById("mainContent").style.display = "none";
};

//Show Quiz Popup
window.onload = () => {
    document.getElementById("welcomePopup").style.display = "flex"; 
}


const closeWelcome = () => {
    document.getElementById("welcomePopup").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}