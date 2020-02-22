import React from 'react';
import { getColorString } from './utils';

function CountriesList(props) {
  return (
    <div className="container">
      <h2>Your stocks</h2>

      <div>
        {Object.values(props.countryProps).map(elem => {
          console.log(elem);
          return (
            <div
              style={{
                background: getColorString(elem.change)
              }}
            >
              {elem.country}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
