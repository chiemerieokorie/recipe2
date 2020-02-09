import axios from "axios";

const apiKey = "b72044dfad234912850fe3f7cd176bfa";

// If the api key is not working go to https://spoonacular.com/ type in a fake email and password to get a new api key


export default axios.create({
    baseURL : "https://api.spoonacular.com",
    params: { apiKey}

});