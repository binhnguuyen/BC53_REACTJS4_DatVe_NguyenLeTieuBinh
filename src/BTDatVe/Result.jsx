import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../store/BTDatVe/slice';

export const Result = () => {

  // Thử lấy number từ btMovieBooking (đc định nghĩa trong rootReducer)
  // useSelector trả về 1 call back về 1 cái state btMovieBooking
  // bóc tách ra muốn lấy những cái nào vì trong btMovieBooking có nhiều state
  const { number, chairsBooking } = useSelector((state) => state.btMovieBooking)
  // console.log('chairsBooking: ', chairsBooking);
  // console.log('number: ', number);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Kết quả đặt vé</h2>
      {/* thêm d-flex cho ô vuông và chữ nằm trên cùng 1 hàng */}
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
          {/* nơi mình map ghế vào */}
          {
            chairsBooking.map((ghe) => {
              return (
                <tr key={ghe.soGhe}>
                  <td>{ghe.soGhe}</td>
                  <td>{ghe.gia}</td>
                  <td className='text-danger'>X</td>
                </tr>
              )
            })
          }
        </tbody>
        <tr>
          <td>Tổng tiền</td>
          <td>
            {
              // hàm reduce giúp chạy và xét tất cả các phần tử trong 1 mảng bất kỳ
              // thông thường sd khi tính tổng tất cả các giá trị trong 1 mảng
              // 0 là giá trị ban đầu
              // viết đầy đủ: return ( total += value.gia, 0 )
              // viết ngắn gọn thì bỏ "return" và ()
              chairsBooking.reduce((total, value) => total + value.gia, 0)
            }
          </td>
        </tr>
      </table>
      <button className='btn btn-success'
        onClick={() => {
          // payload lúc này có thể truyền hoặc ko, vì mình có thể dựa vào cái ghé đang chọn là chairsBooking
          // nếu ko truyền gì vào thì nó hiểu là ko có payload và undefined
          dispatch(btMovieBookingActions.setChairsBooked())
        }}
      >
        Thanh toán
      </button>


      {/* <button className='btn btn-success' onClick={() => {
        // cách viết của Redux cũ
        // dispatch({
        //   type: "INCREASENUMBER",
        //   payload: 2,
        // })
        // cách viết của Redux toolkit
        // truyền lên 1 action, chỉ cần chấm là nó sẽ hiển thị nhưng action có thể sd đc do mình đã định nghĩa nó trong slice
        // cái type trong React toolkit nó sẽ tự tạo, lúc đó tên nó sẽ là tên trong "name" / "tên action". ở đây là BTMovieBooking/increaseNumber
        // ví dụ truyền "123" vào trong của action thì nghĩa là payload truyền vào là 123 thay vì phải viết thành 2 dòng như trên của React cũ
        dispatch(btMovieBookingActions.increaseNumber(123))
      }}>
        +
      </button> */}

    </div>
  )
}
