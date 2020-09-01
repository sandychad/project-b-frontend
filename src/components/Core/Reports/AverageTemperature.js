import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default class AverageTemperature extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width={'100%'} height={600}>
        <ScatterChart
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 65,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey='location'
            name='Location'
            textAnchor='end'
            tick={{ angle: -20 }}
            interval={0}
            // padding={{ left: 50, right: 50 }}
          />
          <YAxis
            type='number'
            dataKey='avgTemperature'
            name='Average Temperature'
            domain={[94, 106]}
            unit='°F'
            label={{
              value: 'Temperature',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <ZAxis
            type='number'
            dataKey='totalpeople'
            range={[100, 1000]}
            name='Total People'
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          {/* <Legend /> */}
          <Scatter
            name='Average Temperature'
            data={data}
            fill='#8884d8'
            shape='star'
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
