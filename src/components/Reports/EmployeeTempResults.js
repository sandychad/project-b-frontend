import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     EmployeeID: 2400,
//   },
//   {
//     name: 'Page B',
//     EmployeeID: 1398,
//   },
//   {
//     name: 'Page C',
//     EmployeeID: 9800,
//   },
//   {
//     name: 'Page D',
//     EmployeeID: 3908,
//   },
//   {
//     name: 'Page E',
//     EmployeeID: 4800,
//   },
//   {
//     name: 'Page F',
//     EmployeeID: 3800,
//   },
//   {
//     name: 'Page G',
//     EmployeeID: 4300,
//   },
// ];

export default class EmployeeTempResults extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/wpfnfmh7/';

  render() {
    const { data } = this.props;
    return (
      <LineChart
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
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='Employee ID'
          angle='-60'
          tickMargin='40'
          position='left'
        />
        <YAxis
          label={{
            value: 'Temperature',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip />
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
        <Line type='monotone' dataKey='Temperature' stroke='#8884d8' />
      </LineChart>
    );
  }
}
