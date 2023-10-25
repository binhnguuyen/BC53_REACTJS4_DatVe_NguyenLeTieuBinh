import React from "react";
import { Chair } from "./Chair";

export const ChairList = (props) => {
  const { data } = props;
  // trong return chỉ có dc 1 thành phần trả về nên tất cả phải bỏ trong div
  return (
    <div>
      {data.map((hangGhe) => {
        return (
          // trong return chỉ có dc 1 thành phần trả về nên tất cả phải bỏ trong div
          /* map thì phải có key đưa vào ko thì bị lỗi */
          /* dùng d-flex cho xếp thành hàng ngang */
          <div
            key={hangGhe.hang}
            className="d-flex gap-3 mt-3 hangGhe"
          >
            <div style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* map ra thành phần "hang" trong data */}
              {hangGhe.hang}
            </div>

            {/* map ra thành phần danhSachGhe trong data */ }
            {/* dùng d-flex cho xếp thành hàng ngang */ }
            <div className="d-flex gap-3">
              {hangGhe.danhSachGhe.map((ghe) => {
                return <Chair ghe={ghe} key={ghe.soGhe} />;
              })}
            </div>
          </div>
        );
      })}
    </div >
  );
};
