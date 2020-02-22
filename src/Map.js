import React, { Component } from 'react';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import countries from './countries.json';
import { getColor } from './utils';

const INITIAL_VIEW_STATE = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0
};

export default class Map2 extends Component {
  _onClick(info) {
    if (info.object) {
      // eslint-disable-next-line
      alert(
        `${info.object.properties.name} (${info.object.properties.abbrev})`
      );
    }
  }

  render() {
    const dataSet = countries.features.map(d => {
      const dataPoint = this.props.indexData[d.id];

      return {
        ...d,
        color: dataPoint
          ? getColor(dataPoint.changesPercentage)
          : [255, 255, 255]
      };
    });

    return (
      <DeckGL controller={true} initialViewState={INITIAL_VIEW_STATE}>
        <GeoJsonLayer
          id="base-map"
          data={dataSet}
          stroked={true}
          filled={true}
          lineWidthMinPixels={1}
          opacity={1}
          getLineDashArray={[3, 3]}
          getLineColor={[60, 60, 60]}
          getFillColor={d => d.color}
        />
      </DeckGL>
    );
  }
}
