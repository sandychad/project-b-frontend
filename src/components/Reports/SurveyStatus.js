import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
  Label,
} from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     Pass: 4000,
//     Fail: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     Pass: 3000,
//     Fail: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     Pass: 2000,
//     Fail: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     Pass: 2780,
//     Fail: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     Pass: 1890,
//     Fail: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     Pass: 2390,
//     Fail: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     Pass: 3490,
//     Fail: 4300,
//     amt: 2100,
//   },
// ];

export default class SurveyStatus extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    const { data } = this.props;

    const getPercent = (value, total) => {
      const ratio = total > 0 ? value / total : 0;

      return toPercent(ratio, 2);
    };

    const toPercent = (decimal, fixed = 0) =>
      `${(decimal * 100).toFixed(fixed)}%`;

    return (
      <BarChart
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
          dataKey='name'
          angle='-295'
          tickMargin='40'
          position='center'
        ></XAxis>
        <YAxis
          label={{
            value: 'Survey Pass Percentage',
            angle: -90,
            position: 'center',
          }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={50} />
        <Bar dataKey='pass' stackId='a' fill='#82ca9d' />
        <Bar dataKey='fail' stackId='a' fill='#8884d8' />
      </BarChart>
    );
  }
}
