import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/uLysj0u2/';

  render() {
    const { data } = this.props;

    return (
      <ScatterChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 65,
        }}
      >
        <CartesianGrid />
        <XAxis
          dataKey='Employee ID'
          angle='-60'
          tickMargin='40'
          position='left'
          padding={{ left: 50, right: 50 }}
        />
        <YAxis
          dataKey='Temperature'
          label={{
            value: 'Temperature',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip cursor={{ strokeDasharray: '10 10' }} />
        <Legend verticalAlign='top' height={50} />
        <ReferenceLine
          y={104}
          label={{ position: 'top', value: 'Upper Limit' }}
          stroke='red'
        />
        <ReferenceLine
          y={96}
          label={{ position: 'bottom', value: 'Lower Limit' }}
          stroke='green'
        />
        <Scatter
          data={data}
          fill='#8884d8'
          type='monotone'
          dataKey='Location'
        />
      </ScatterChart>
    );
  }
}
