import { createAction, createReducer, on } from "@ngrx/store";

const initValue = {
    maskUserInput: false
}
export const userReducer = createReducer(
    initValue, 
    on(createAction('[User] Toggle username input mask'), state => {
        console.log(`Old state: ${JSON.stringify(state)}`);
        return {
            ...state,
            maskUserInput: !state.maskUserInput
        }
    })
);