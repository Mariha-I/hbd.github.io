var age = 20; //change this value to what ever the target is
const userInputElement = document.getElementsByClassName("input")[0];
const nextButton = document.getElementById('nextButton');
const extraSection = document.getElementById('extraSection');
const tunes = document.getElementsByClassName('tunesB')[0];

tunes.addEventListener('click', function() {
        document.getElementById('whim1').play();
        // Optional: Hide or disable the button after it's clicked
        tunes.style.display = 'none';
    });

function isCorrectAge(){
    var userInput = parseInt(userInputElement.value);
    const message = document.getElementById('output');
    if (userInput === age) {
        message.textContent = "omg!! ur turning " + age + "?!?!? you should've just said so...";
        nextButton.style.display = "inline-block";
    } else if (userInput % age === 0) {
        message.textContent = "try dividing by " + (userInput / age);
        nextButton.style.display = "none";
    }else if (Math.abs(userInput - age) <= 3) {
        message.textContent = "almost!!";
        nextButton.style.display = "none";
    } else if (userInput < age) {
        message.textContent = "a little higher...";
        nextButton.style.display = "none";
    } else {
        message.textContent = "a little lower...";
        nextButton.style.display = "none";
    }
}

userInputElement.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        isCorrectAge();
        document.body.style.height = '200vh';
    }
});

nextButton.addEventListener('click', () => {
    window.scrollTo({
        top: extraSection.getBoundingClientRect().bottom,
        behavior: "smooth",
    })
    setTimeout(() => {
        window.location.href = 'puzzle1.html';
    }, 1000);
});

