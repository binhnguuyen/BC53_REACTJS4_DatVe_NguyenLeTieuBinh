import React from 'react'
import { useSelector } from 'react-redux'

export const Result = () => {
  /*
  // Thử lấy number từ btMovieBooking
  const {number} = useSelector((state) => state.btMovieBooking)
  console.log('number: ', number);
  */

  return (
    <div>
      <h2>Kết quả đặt vé</h2>
      <div className="d-flex gap-3 mt-3">
        <div className="ghe"></div>
        <span>Ghế đã đặt</span>
      </div>

      <div className="d-flex gap-3 mt-3">
        <div className="ghe"></div>
        <span>Ghế đang chọn</span>
      </div>

      <div className="d-flex gap-3 mt-3">
        <div className="ghe"></div>
        <span>Ghế trống</span>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
