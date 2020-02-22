import React from 'react';
import { getColorString } from './utils';
import './Countries.css';

function CountriesList(props) {
  return (
    <div className="flex flex-col  ">
      <h2 className="text-xl text-center my-4">Global Indexes</h2>
      <div>
        {Object.values(props.countryProps).map(elem => {
          return (
            <div className="">
              <ul>
                <li>
                  <div className="flex m-6 justify-between">
                    <div className="pr-2 flex-grow w-6">{elem.country}</div>
                    <div className="pr-2 float-left">{elem.price}</div>
                    <div
                      className="px-2"
                      style={{
                        background: getColorString(elem.changesPercentage),
                        borderRadius: 5,
                        height: '25px'
                      }}
                    >
                      {elem.changesPercentage.toFixed(2)} %
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
