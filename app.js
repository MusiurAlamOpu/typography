
//data field
const homeClicked = document.getElementById("homeClicked");
const categoryClicked = document.getElementById("categoryClicked");
const topClicked = document.getElementById("topClicked");
const logInClicked = document.getElementById("logInClicked");
const signUpClicked = document.getElementById("signUpClicked");
const aboutClicked = document.getElementById("aboutClicked");
const mainDiv = document.getElementById("mainDiv");
const homeSection = document.getElementById("homeSection");
const logInSection = document.getElementById("logInSection");


//event handling
logInClicked.addEventListener("click", () => {
    let sectionView1 = homeSection;
    sectionView1.style.display = 'none';
})
homeSection.addEventListener("click", () => {
    mainDiv.innerHTML = homeSection.innerHTML;
})