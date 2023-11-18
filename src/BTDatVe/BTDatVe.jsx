import React from "react";
import data from "./data.json";
import { ChairList } from "./ChairList";
import { Result } from "./Result";

export const BTDatVe = () => {
    return (
        <div className="container mt-3">
            <h1 className="pt-4 text-white">CGV Nam Kỳ Khởi Nghĩa</h1>
            <br />
            <div className="seatBooking">
                <div className="row">
                    <div className="col-9">
                        <div className="p-3 text-white text-center bg-dark fw-bold mb-5 screen">
                            SCREEN
                        </div>
                        {/* ở đây chỉ cần truyền data xuống vì data này ko đưa lên store của redux */}
                        <ChairList data={data} />
                    </div>
                    <div className="col-3">
                        <Result />
                    </div>
                </div>
            </div>

        </div>
    );
};
