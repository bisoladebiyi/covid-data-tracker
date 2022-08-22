import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovidData } from "./redux/features/covidDataSlice";
import Stats from "./components/Stats";
import StatesAffected from "./components/StatesAffected";
import LoadingState from "./components/LoadingState";

function App() {
  const { covidData, isFetched } = useSelector((store) => store.covidData);
  const [states, setStates] = useState([]);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  useEffect(() => {
    if (covidData && covidData.states) {
      setStates(covidData.states);
    }
  }, [covidData]);

  const onChangeFn = (e) => {
    setValue(e.target.value);
    let filteredResult = covidData.states.filter((state) =>
      state.state.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setStates(filteredResult);
  };

  return (
    <div className="App bg-white">
      {isFetched ? (
        <>
          <nav className="w-full py-7 sm:py-5 px-7 md:px-20 shadow bg-white">
            <p className="font-bold uppercase text-slate-500 text-2xl sm:text-3xl">
              Covid-19 data tracker
            </p>
          </nav>
          <main className="px-7 md:px-10 lg:px-20 mt-10 pb-20">
            <Stats covidData={covidData} />
            <StatesAffected
              value={value}
              states={states}
              onChangeFn={onChangeFn}
            />
          </main>
        </>
      ) : (
        <LoadingState />
      )}
    </div>
  );
}

export default App;
