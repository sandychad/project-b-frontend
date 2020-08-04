import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

export default class DailySurveyResult extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  state = {
    opacity: {
      pass: 1,
      fail: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    const { data } = this.props;

    return (
      <ResponsiveContainer width={'100%'} height={600}>
        <LineChart
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
            dataKey='location'
            tickMargin={40}
            position='left'
            angle={-60}
          />
          <YAxis
            label={{
              value: 'Number Of Employees',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend
            verticalAlign='top'
            height={50}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <Line
            type='monotone'
            dataKey='total'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
            strokeOpacity={opacity.total}
            strokeDasharray='3 4 5 1'
          />
          <Line
            type='monotone'
            dataKey='pass'
            stroke='#82ca9d'
            strokeOpacity={opacity.pass}
          />
          <Line
            type='monotone'
            dataKey='fail'
            stroke='red'
            strokeOpacity={opacity.fail}
            strokeDasharray='3 4 5 2'
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
