import '../components/movie-list.js';
import '../components/search-bar.js';
import DataSource from '../data/data-source';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');

    const showMovies = () => {
        DataSource.showMovies()
            .then((data) => renderResult(data))
            .catch((error) => fallbackResult(error));
    };

    showMovies();

    const onButtonSearchClicked = async () => {
        try {
            if (searchElement.value) {
                const result = await DataSource.searchMovie(searchElement.value);
                renderResult(result);
            } else {
                showMovies();
            };
        } catch (message) {
            fallbackResult(message);
        };
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;