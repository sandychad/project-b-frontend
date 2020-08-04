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
  Legend,
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
            angle='-60'
            tickMargin='40'
            position='left'
            padding={{ left: 50, right: 50 }}
          />
          <YAxis
            type='number'
            dataKey='avgTemperature'
            name='Average Temperature'
            domain={[94, 106]}
            unit='°F'
            label={{
              value: 'Average Temperature',
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
          <Legend verticalAlign='top' height={50} />
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
