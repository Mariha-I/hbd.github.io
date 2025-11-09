const userInputElement = document.getElementsByClassName("input")[0];
const answers = ["needle", "a needle", "the needle"];
const message = document.getElementById('output');
const overlay = document.getElementById('overlay2');

function isRiddleCorrect() {
    var userInput = userInputElement.value;
    const normalizedInput = userInput.trim().toLowerCase();
    if (answers.includes(normalizedInput)){
        message.textContent = "ok costume designer!! hope this year is full of so many awesome sewing and knitting projects"
        setTimeout(() => {
            overlay.style.display = "block";
            overlay.style.opacity = 1;
        }, 2000);
    } else {
        message.textContent = "try again..."
    }
}

userInputElement.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        isRiddleCorrect();
    }
});