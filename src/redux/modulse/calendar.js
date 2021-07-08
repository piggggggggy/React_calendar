import { createAction, handleActions } from "redux-actions";
import produce from "immer";


// actions
const ADD = "calendar/ADD";
const LOAD = "calendar/LOAD";
const TOGGLE = "calendar/TOGGLE";
const COMPLETE = "calendar/COMPLETE";


// action creator
const loadSchedule = createAction(LOAD, (calendars) => ({calendars}));
const addSchedule = createAction(ADD, (calendar) => ({calendar}));

// initialState
const initialState = {
    schedule: [],
    status: false,
}




// 함수
const loadFB = () => (dispatch, geState) => {
    
}



// reducer
export default handleActions({
    [LOAD]: (state, action) => produce(state, (draft) => {
        draft.schedule = action.payload.calendars;
    }),
    
    [ADD]: (state, action) => produce(state, (draft) => {
        draft.schedule.push(action.payload.calendar);
    }),

})