import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default class SurveyStatus extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width={'100%'} height={600}>
        <BarChart
          barSize={40}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 65,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='location' tickMargin={40} angle={-60} position='left'>
            <label position='insideBottomRight' dy={10} dx={20} />
          </XAxis>
          <YAxis
            type='number'
            unit='%'
            label={{
              value: 'Survey Pass Percentage',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend verticalAlign='top' height={50} />
          <Bar
            dataKey='pass'
            stackId='a'
            fill='#82ca9d'
            legendType='star'
            unit='%'
          />
          <Bar
            dataKey='fail'
            stackId='a'
            fill='#8884d8'
            legendType='star'
            unit='%'
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
