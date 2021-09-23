import constants from "../config/constants";

export default async function retrieveMoviesByWord(word,page){

    if(word && !isNaN(page) && word.length > 0 && page > 0){
        const {endpoints: { BASE_API_ENDPOINT , LIST_MOVIES } } = constants;
        const response = await fetch(BASE_API_ENDPOINT+LIST_MOVIES+`/${word}/${page}`);
        return response.json();
    } else {
        return new Promise().json();
    }
}
