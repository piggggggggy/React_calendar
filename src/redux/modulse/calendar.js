import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";



// actions
const DATE_NOW = "date/DATE_NOW";
// const DATE_CHG = "date/DATE_CHG";


// action creator
const setDate = createAction(DATE_NOW, (date) => ({date}));



// initialState
const initialState = {
    now : moment(),
};



//reducer


export default handleActions({
    [DATE_NOW]: (state, action) => produce(state, (draft) => {
        
    }),
})