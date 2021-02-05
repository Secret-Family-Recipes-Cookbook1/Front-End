import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";


export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

export const getRecipes = () => dispatch => {
    dispatch({type: FETCHING_DATA_START});
    axiosWithAuth()
        .get('/plantlist/')
        .then(res => {
            console.log(res.data);
            dispatch({
                type : FETCHING_DATA_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCHING_DATA_FAILURE,
                payload: err
            });
        });
};

export const addRecipe = (recipe) => (dispatch) => {
    axiosWithAuth()
    .post('/recipelist/', recipe)
    .then(res => {
        console.log(res.data);
        dispatch({
            type: ADD_RECIPE,
            payload: recipe
        });
    })
    .catch(err => {
        console.log(err);
    });
};

export const deleteRecipe = (recipe) => (dispatch) => {
    axiosWithAuth()
        .delete(`recipe/${recipe.id}`)
        .then((res)=>{
            dispatch({type: DELETE_RECIPE, payload: recipe});
        })
        .catch((err)=>{
            console.log(err);
        })
};

export const editRecipe = (recipe) => (dispatch) => {
    axiosWithAuth()
    .put(`/recipelist/${recipe.id}`, recipe)
    .then(res => {
        dispatch({
            type: EDIT_RECIPE,
            payload: recipe
        });
    })
    .catch((err) => {
        console.log(err)
    });
};
