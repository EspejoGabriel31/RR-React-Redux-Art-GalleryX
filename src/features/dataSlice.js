import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id: 0,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        increment: (state) => { 
            return {...state, id: state.id + 1 }
        },
        decrement: (state) => {
            return {...state, id: state.id - 1 }
        },
        reset: () => {
            return initialState
        },
        setData: (state, action) => {
            return {...state, apiData: action.payload}
        },
        setID: (state, action) => {
            return {...state, id: action.payload}
        }
    }
})

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = getState()
        console.log(state)
        const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.id}`)
        const resData = await res.json()
        dispatch(setData(resData))
    }
    return dataThunk
}

export const { increment, decrement, reset, setData, setID } = dataSlice.actions

export default dataSlice.reducer