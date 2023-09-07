const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.getElementsByTagName('input');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
};

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const startAddMovieButtonHandler = () => {
    toggleMovieModal();
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    toggleBackdrop();
};

const backdropClickHandler = () => {
    toggleMovieModal();
    toggleBackdrop();
};

const confirmAddMovieButtonHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue === '' ||
        imageUrlValue === '' ||
        ratingValue === '' ||
        Number(ratingValue) < 1 ||
        Number(ratingValue) > 5
    ) {
        alert('Please enter valid values! Rating should be a number between 1 and 5');
        return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);

    clearMovieInputs();

    toggleMovieModal();
    toggleBackdrop();
};

startAddMovieButton.addEventListener('click', startAddMovieButtonHandler);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', confirmAddMovieButtonHandler);
