import axios from "axios";

class DataSource {
    static showMovies() {
        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e682726cd15fa8d75b833d9544e347ca')
            .then(({ data }) => {
                return data.results;
            })
            .catch((error) => {
                return error.status_message;
            });
    };

    static searchMovie(keyword) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e682726cd15fa8d75b833d9544e347ca&query=${keyword}`)
            .then(({ data }) => {
                return data.results;
            })
            .catch((error) => {
                return error.status_message;
            });
    };
};

export default DataSource;