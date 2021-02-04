import { FETCHING_DATA_START } from "../actions/actions";
import { FETCHING_DATA_SUCCESS } from "../actions/actions";
import { FETCHING_DATA_FAILURE } from "../actions/actions";
import { ADD_RECIPE } from "../actions/actions";
import { EDIT_RECIPE } from "../actions/actions";
import { DELETE_RECIPE } from "../actions/actions";

const initialState = {
    recipes: [],
    isFetching: false,
    fetchingError: ""
}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA_START:
            return {
                ...state,
                isFetching: true,
                fetchingError: ""
            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                recipes: action.payload
            };
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetchingError: action.payload
            };
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case EDIT_RECIPE:
            return {
                ...state,
                recipes: state.recipes.map(recipe => {
                    if(recipe.id === action.payload.id){
                        return action.payload;
                    } else {
                        return recipe;
                    }
                })
            };
        case DELETE_RECIPE: 
            return {
                ...state,
                recipes: state.recipes.filter(recipe = recipe.id !== action.payload.id)
            };
        default:
            return state;
    }
}