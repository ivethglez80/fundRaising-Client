import axios from "axios";

export const GET_TOTAL = "GET_TOTAL"
export const POST_ENTRY = "POST_ENTRY"

// const fundURL = import.meta.env.VITE_FUND_URL || "http://localhost:3001"
const fundURL = import.meta.env.VITE_FUND_DEPLOY;

export const getTotal = () => {
    return async function (dispatch){
        try {
            const apiData = await axios.get(`${fundURL}/total`);
            console.log("apidata", apiData.data);
            console.log(`${fundURL}/total`);
            const entries = apiData.data;
            dispatch({
                type:GET_TOTAL, 
                payload:entries});
        } catch (error) {
            console.log(error);
        }
    }
};

export const postEntry = (payload) => {
    payload.newEntry = parseInt(payload.newEntry);
    return async (dispatch) => {
        try {
            let createEntry = await axios.put(`${fundURL}/fundAdmin`, payload);
            return dispatch({
                type: POST_ENTRY,
                payload: createEntry.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}