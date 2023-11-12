const flashcards = document.querySelectorAll(".flashcard");
const toggleAllButton = document.querySelector(".toggle-all-button");

toggleAllButton.addEventListener("click", function() {
    flashcards.forEach(function(flashcard) {
        flashcard.classList.toggle("flipped");
    });
});

flashcards.forEach(function(flashcard) {
    flashcard.addEventListener("click", function() {
        flashcard.classList.toggle("flipped");
    });
});