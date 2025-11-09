var unscrambled = "placeholder" 
//replace this with the word you want that corresponds to the scrambled word in puzzle1.html
const yesButton = document.getElementById('yes');
const p1 = document.getElementById('overlay');
const prep = document.getElementById('prep');
const attempt = document.getElementById('attempt');
const galleryButton = document.getElementById('galleryButton');
const gallery = document.getElementById('gallery');
const p2button = document.getElementById('p2button');
const extraSection = document.getElementById('extraSection');
const tunes = document.getElementsByClassName('tunesB')[0];

yesButton.addEventListener('click', () => {
    p1.style.display = 'block';
    p1.style.opacity = 1;
})

tunes.addEventListener('click', function() {
        document.getElementById('whim2').play();
        // Optional: Hide or disable the button after it's clicked
        tunes.style.display = 'none';
    });

function isCorrectAttempt (){
    var userInput = attempt.value;
    const message = document.getElementById('output');
    if (userInput === unscrambled){
        message.textContent = "with age comes wisdom..."
        setTimeout(() => {
            galleryButton.style.display = 'inline-block';
            galleryButton.style.opacity = 1;
        }, 1500);
    }else {
        message.textContent = "not what I was thinking..."
    }
}

attempt.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        isCorrectAttempt()
    }
});

galleryButton.addEventListener("click", () => {
    gallery.style.display = 'block'
})

p2button.addEventListener('click', () => {
    window.scrollTo({
        top: extraSection.getBoundingClientRect().bottom,
        behavior: "smooth",
    })
    setTimeout(() => {
        window.location.href = 'puzzle2.html';
    }, 1000);
});