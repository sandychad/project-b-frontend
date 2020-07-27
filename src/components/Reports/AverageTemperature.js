import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default class AverageTemperature extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

  render() {
    return (
      <ScatterChart
        width={800}
        height={500}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 65,
        }}
      >
        <CartesianGrid />
        <XAxis
          type='number'
          dataKey='x'
          name='stature'
          unit='cm'
          angle='-60'
          tickMargin='40'
          position='left'
          label={{
            value: 'Locations',
            position: 'insideBottom',
          }}
        />
        <YAxis
          type='number'
          dataKey='y'
          name='weight'
          type='number'
          unit='oF'
          label={{
            value: 'Average Temperature',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <ZAxis
          type='number'
          dataKey='z'
          range={[60, 400]}
          name='score'
          unit='km'
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend verticalAlign='top' height={50} />
        <Scatter
          name='Averate Temperature Today'
          data={data01}
          fill='#8884d8'
          shape='star'
        />
      </ScatterChart>
    );
  }
}
