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
  state = {
    indexData: {
      DEU: {
        change: -10 * Math.random()
      }
    }
  };

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
      const dataPoint = this.state.indexData[d.id];

      return {
        ...d,
        color: dataPoint ? getColor(dataPoint.change) : [255, 255, 255]
      };
    });

    return (
      <DeckGL controller={true} initialViewState={INITIAL_VIEW_STATE}>
        <GeoJsonLayer
          id="base-map"
          data={dataSet}
          stroked={true}
          filled={true}
          lineWidthMinPixels={2}
          opacity={1}
          getLineDashArray={[3, 3]}
          getLineColor={[60, 60, 60]}
          getFillColor={d => d.color}
        />
        {/* <GeoJsonLayer
          id="airports"
          data={AIR_PORTS}
          filled={true}
          pointRadiusMinPixels={2}
          pointRadiusScale={2000}
          getRadius={f => 11 - f.properties.scalerank}
          getFillColor={[200, 0, 80, 180]}
          pickable={true}
          autoHighlight={true}
          onClick={this._onClick}
        /> */}
        {/* <ArcLayer
          id="arcs"
          data={AIR_PORTS}
          dataTransform={d =>
            d.features.filter(f => f.properties.scalerank < 4)
          }
          getSourcePosition={f => [-0.4531566, 51.4709959]}
          getTargetPosition={f => f.geometry.coordinates}
          getSourceColor={[0, 128, 200]}
          getTargetColor={[200, 0, 80]}
          getWidth={1}
        /> */}
      </DeckGL>
    );
  }
}
