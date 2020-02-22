import React, { useState } from 'react';
import { getColorString } from './utils';

export default function Holdings({ data, add }) {
  const [selected, setSelected] = useState();

  return (
    <div className="flex flex-col  ">
      <h2 className="text-xl text-center my-4">Your Holdings</h2>
      <div>
        {Object.values(data).map(elem => {
          return (
            <div className="">
              <ul>
                <li>
                  <div className="flex m-6 justify-between">
                    <div className="pr-2 flex-grow w-6">
                      {elem.ticker_symbol}
                    </div>
                    <div className="pr-2 float-left">{elem.price}</div>
                    <div
                      className="px-2"
                      style={{
                        background: getColorString(elem.changesPercentage),
                        borderRadius: 5
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
        <div className="p-4 flex justify-center">
          <select
            name="Add Stock"
            className="w-full p-2"
            value={selected}
            onChange={e => {
              setSelected(e.target.value);
            }}
          >
            <option>TSLA</option>
            <option>AIG</option>
            <option>SHOP</option>
          </select>
          <button
            className="py-2 px-4 bg-teal-700 text-white rounded w-40 ml-2"
            onClick={() => {
              add(selected);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
