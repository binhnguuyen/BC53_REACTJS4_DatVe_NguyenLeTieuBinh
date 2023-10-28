import React, { useState } from "react";
// css thì import ngay đây cũng đc
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { btMovieBookingActions } from "../store/BTDatVe/slice";

export const Chair = (props) => {
  const { ghe } = props;

  // lấy chairsBooking về 
  const {chairsBooking } = useSelector((state) => state.btMovieBooking)
  // console.log('chairsBooking: ', chairsBooking);

  // tạo hàm dispatch
  const dispatch = useDispatch()
  return (
    <div className="ghe" 
    // gán cho nó một sự kiện onlick để dispatch lên store của redux
    // payload ở đây chính là cái ghế mà mình đang chọn
    onClick={() => {
      dispatch(btMovieBookingActions.setChairsBooking(ghe))
    }}>
      {ghe.soGhe}
    </div>
  )

};
