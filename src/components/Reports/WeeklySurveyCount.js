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

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//   },
// ];

export default class WeeklySurveyCount extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

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
        <CartesianGrid strokeDasharray='10 10' />
        <XAxis
          dataKey='date'
          name='7 days'
          angle='-60'
          tickMargin='40'
          position='left'
        />
        <YAxis
          dataKey='surveycount'
          label={{
            value: 'Survey Count',
            angle: -90,
            position: 'left',
          }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={50} />

        <Line
          type='monotone'
          name='Weekly Survey Count'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}
