// nếu là redux mới thì ko còn 3 file typeof, action, reducer.js nữa là chỉ mỗi file slice.js thôi
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    number: 100,
    // chairsBooking: [],
    // chairsBooked: [],
}

// Cái hàm createSlice giúp vừa tạo ra reducer vừa tạo ra file action
// ở redux thường thì phải tạo ra 1 reducer.js và 1 action.js
// không cần phải tách ra file action riêng như trong bài BTPhone nữa
export const btMovieBookingSlice = createSlice (
    {
        name: "BTMovieBooking",
        initialState,
        reducers: {

        },
    }
)

// bóc tách thuộc tính hàm btMovieBookingSlice đc tạo từ createSlice
// có 2 thuộc tính trả về là reducer và action
export const{ reducer: btMovieBookingReducer, actions: btMovieBookingActions} = btMovieBookingSlice