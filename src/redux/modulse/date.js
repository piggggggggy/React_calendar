import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";



// actions
const DATE_NOW = "date/DATE_NOW";
const DATE_CUR = "date/DATE_CUR";


// action creator
const setNow = createAction(DATE_NOW);
const setCur = createAction(DATE_CUR, (date)=>({date}));


// initialState
const initialState = {
  check: moment(),
  current: moment(),
};



//reducer
export default handleActions({
  [DATE_NOW]: (state, action) => produce(state, (draft) => {
    draft.check = action.payload.check;
  }),

  [DATE_CUR]: (state, action) => produce(state, (draft) => {
		draft.current = action.payload.date;
  }),

}, initialState);

export const actionCreators = {
  setNow,
  setCur,

};