import {RECIPE_LIST, GET_RECIPE} from "../TYPES"
import foodAPI from "../foodAPI";

export const searchTheTerm =  (term) => async (dispatch) => {

        const recipes = await foodAPI.get("/recipes/search",
            {params: {query: term, number:24}
        });

        dispatch({type: RECIPE_LIST, payload: recipes.data.results});
};

export const getRecipeInfo = id => async dispatch =>{

        const endPoint = `recipes/${id}/information`;

        const recipe = await foodAPI.get(endPoint);

        dispatch({type: GET_RECIPE, payload: recipe.data})

};