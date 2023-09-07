const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class='movie-element__image'>
            <img
                src='${imageUrl}'
                alt='${title}'
            />
        </div>
        <div class='movie-element__info'>
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    movieList.append(newMovieElement);
};

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
    renderNewMovieElement(
        newMovie.title,
        newMovie.image,
        newMovie.rating
    );
    updateUI();

    toggleMovieModal();
    toggleBackdrop();
};

startAddMovieButton.addEventListener('click', startAddMovieButtonHandler);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', confirmAddMovieButtonHandler);
