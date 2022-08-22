import React from 'react'
import { addComma } from '../utils/helpers'

const Stats = ({ covidData }) => {
  return (
    <div>
          <p className="font-semibold text-gray-700 text-2xl sm:text-3xl mb-6">
            Statistics
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-purple-400 p-4 sm:p-7 rounded-lg text-white font-bold">
              <p className="text-base leading-5">Samples Tested</p>
              <p className="text-lg sm:text-2xl">{covidData?.totalSamplesTested && addComma(covidData?.totalSamplesTested)}</p>
            </div>
            <div className="bg-amber-400 p-4 sm:p-7 rounded-lg text-white font-bold">
              <p className="text-base leading-5">Confirmed cases</p>
              <p className="text-lg sm:text-2xl">{covidData?.totalConfirmedCases && addComma(covidData?.totalConfirmedCases)}</p>
            </div>
            <div className="bg-blue-400 p-4 sm:p-7 rounded-lg text-white font-bold">
              <p className="text-base leading-5">Active cases</p>
              <p className="text-lg sm:text-2xl">{covidData?.totalActiveCases && addComma(covidData?.totalActiveCases)}</p>
            </div>
            <div className="bg-green-500 p-4 sm:p-7 rounded-lg text-white font-bold">
              <p className="text-base leading-5">Discharged cases</p>
              <p className="text-lg sm:text-2xl">{covidData?.discharged && addComma(covidData?.discharged)}</p>
            </div>
            <div className="bg-red-600 p-4 sm:p-7 rounded-lg text-white font-bold">
              <p className="text-base leading-5">Deaths</p>
              <p className="text-lg sm:text-2xl">{covidData?.death && addComma(covidData?.death)}</p>
            </div>
          </div>
        </div>
  )
}

export default Stats