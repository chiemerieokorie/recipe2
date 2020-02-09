import {combineReducers} from 'redux';
import {reducer} from "redux-form";
import {RECIPE_LIST, GET_RECIPE} from "../TYPES"



const recipesList = (state = [], action) =>{

    switch (action.type) {

        case RECIPE_LIST:
            return  action.payload;

        default: return state
    }
};

const recipes = (state = {}, action) =>{

    switch(action.type) {

        case GET_RECIPE:
            return {...state, [action.payload.id]: action.payload};

        default:
            return state
    }

};

export default combineReducers({ form: reducer, recipesList, recipes})