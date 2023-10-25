// nếu là redux mới thì ko còn 3 file typeof, action, reducer.js nữa là chỉ mỗi file slice.js thôi
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    number: 100,
    // chairsBooking: [],
    // chairsBooked: [],
}

// Cái hàm createSlice giúp vừa tạo ra reducer vừa tạo ra file action
// ở redux thường thì phải tạo ra 1 reducer.js và 1 action.js
// không cần phải tách ra file action riêng như trong redux thường
export const btMovieBookingSlice = createSlice (
    {
        // cái name này đưa vào root reducer
        name: "BTMovieBooking",
        initialState,
        // nơi bắt các action là trong reducers, ko cần phải tạo ra file action riêng và bắt switch case nhưng trong bài BTPhone
        reducers: {

        },
    }
)

// bóc tách thuộc tính hàm btMovieBookingSlice đc tạo từ createSlice
// có 2 thuộc tính trả về là reducer và action
export const{ reducer: btMovieBookingReducer, actions: btMovieBookingActions} = btMovieBookingSlice