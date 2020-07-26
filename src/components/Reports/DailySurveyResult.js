import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default class DailySurveyResult extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    const { data } = this.props;

    return (
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 65,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' angle='-60' tickMargin='40' position='left' />
        <YAxis
          label={{
            value: 'Number Of Employees',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={50} />
        <Line
          type='monotone'
          dataKey='total'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
          strokeDasharray='3 4 5 1'
        />
        <Line type='monotone' dataKey='pass' stroke='#82ca9d' />
        <Line
          type='monotone'
          dataKey='fail'
          stroke='red'
          strokeDasharray='3 4 5 2'
        />
      </LineChart>
    );
  }
}
