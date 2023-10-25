import React from "react";
import data from "./data.json";
import { ChairList } from "./ChairList";
import { Result } from "./Result";

export const BTDatVe = () => {
    console.log("data: ", data);
    return (
        <div className="container mt-3">
            <h1>CGV Nam Kỳ Khởi Nghĩa</h1>
            <br />

            <div className="row">
                <div className="col-8">
                    <div className="p-3 text-white text-center bg-dark fw-bold mb-5 screen">
                        SCREEN
                    </div>
                    <ChairList data={data} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    );
};
