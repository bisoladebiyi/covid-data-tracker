import React from "react";
import { addComma } from "../utils/helpers";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const StatesAffected = ({ states, value, onChangeFn }) => {
  return (
    <div className="mt-32 overflow-hidden">
      <p className="font-semibold text-gray-700 text-2xl sm:text-3xl mb-6">
        States Affected
      </p>
      <div className="relative">
        <input
          type="text"
          className="border w-full py-2 px-5 rounded outline-none placeholder:text-sm"
          value={value}
          onChange={onChangeFn}
          placeholder="Search..."
        />
        <button className="absolute right-10 top-1/2 -translate-y-1/2">
          <SearchRoundedIcon className="text-gray-500" />
        </button>
      </div>
      <div className="overflow-x-auto ">
        <div style={{ minWidth: "700px" }}>
          {/* header  */}
          <div className="grid grid-cols-5 text-center mt-10">
            <div className="text-center text-white bg-slate-500 p-3.5 font-semibold border">
              States affected
            </div>
            <div className="text-center text-white bg-slate-500 p-3.5 font-semibold border">
              Confirmed cases
            </div>
            <div className="text-center text-white bg-slate-500 p-3.5 font-semibold border">
              Cases on admission
            </div>
            <div className="text-center text-white bg-slate-500 p-3.5 font-semibold border">
              Discharged
            </div>
            <div className="text-center text-white bg-slate-500 p-3.5 font-semibold border">
              Deaths
            </div>
          </div>
          {/* content  */}
          {states.map((state, i) => (
            <div key={state._id} className="grid grid-cols-5 text-center">
              <div
                className={`text-center text-gray-700 font-semibold border p-3 ${
                  i % 2 === 0 ? "bg-slate-50" : ""
                }`}
              >
                {state.state}
              </div>
              <div
                className={`text-center text-gray-700 font-semibold border p-3 ${
                  i % 2 === 0 ? "bg-slate-50" : ""
                }`}
              >
                {addComma(state.confirmedCases)}
              </div>
              <div
                className={`text-center text-gray-700 font-semibold border p-3 ${
                  i % 2 === 0 ? "bg-slate-50" : ""
                }`}
              >
                {addComma(state.casesOnAdmission)}
              </div>
              <div
                className={`text-center text-gray-700 font-semibold border p-3 ${
                  i % 2 === 0 ? "bg-slate-50" : ""
                }`}
              >
                {addComma(state.discharged)}
              </div>
              <div
                className={`text-center text-gray-700 font-semibold border p-3 ${
                  i % 2 === 0 ? "bg-slate-50" : ""
                }`}
              >
                {addComma(state.death)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatesAffected;
