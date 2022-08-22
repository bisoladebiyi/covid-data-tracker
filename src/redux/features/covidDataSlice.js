import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/requests";


const initialState  = {
    covidData : {},
    isFetching: false,
    isFetched: false,
    isFailed: false

}
export const getCovidData = createAsyncThunk(
    'covidStats/getCovidData',
    async (dispatch, getState) => {
      const res = await fetchData('https://covidnigeria.herokuapp.com/api', 'GET')
      return res.data
  })

const covidDataSlice = createSlice({
    name: "covidStats",
    initialState,
    reducers: {},
    extraReducers: {
        [getCovidData.pending]: (state) => {
            state.covidData = []
            state.isFetching = true
        },
        [getCovidData.fulfilled]: (state, action) => {
            state.covidData = action.payload
            state.isFetching = false
            state.isFetched = true
        },
        [getCovidData.rejected]: (state) => {
            state.covidData = []
            state.isFetching = false
            state.isFailed = true
        }
    }
})

export default covidDataSlice.reducer;