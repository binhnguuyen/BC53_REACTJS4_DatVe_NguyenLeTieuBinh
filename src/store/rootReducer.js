import { btMovieBookingReducer } from './BTDatVe/slice'
import { combineReducers } from 'redux'


// thằng này tổng hợp hết các reducer đc phân chia theo service
// bài demo chỉ có 1 reducer là demoReduxReducer thôi
export const rootReducer = combineReducers({
    btMovieBooking: btMovieBookingReducer,
})

