import React, { useState } from "react";
// css thì import ngay đây cũng đc
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { btMovieBookingActions } from "../store/BTDatVe/slice";
// cn hay gì đó là tên bất kỳ vì nó export default, classnames là cái thư viện đã cài
import cn from "classnames"
import classNames from "classnames";

export const Chair = (props) => {
  const { ghe } = props;

  // lấy chairsBooking về 
  const { chairsBooking } = useSelector((state) => state.btMovieBooking)
  // console.log('chairsBooking: ', chairsBooking);

  // tạo hàm dispatch
  const dispatch = useDispatch()
  return (
    <div
      // cái hàm cn này hoạc động giống rest operator nên mình truyền vào bao nhiêu tham số cũng đc
      className={cn
        // thêm vào className "ghe" mặc định để css
        ("ghe", 
        {
          // nếu giá trị là true thì nó sẽ thêm class gheDangChon vào thẻ div cha. Ngược lại là false thì sẽ mất class gheDangChon vào
          // những ghế nào đang nằm trong chairsBooking thì thêm class gheDangChon, nếu có thì thêm class gheDangChon
          // "gheDangChon: true" nghĩa là nếu phép tính sau dấu ":" là true thì thêm className "gheDangChon" vào, ngược lại nếu là false thì ko thêm
          gheDangChon: chairsBooking.find(e => e.soGhe === ghe.soGhe),
        },
      )}
      // gán cho nó một sự kiện onlick để dispatch lên store của redux
      // payload ở đây chính là cái ghế mà mình đang chọn
      onClick={() => {
        dispatch(btMovieBookingActions.setChairsBooking(ghe))
      }}>
      {ghe.soGhe}
    </div>
  )

};
