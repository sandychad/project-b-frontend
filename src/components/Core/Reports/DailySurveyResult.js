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
      pass: 0.5,
      fail: 0.5,
      total: 0.5,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1.0 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
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
            name='Location'
            dataKey='location'
            textAnchor='end'
            tick={{ angle: -20 }}
            interval={0}
            padding={{ left: 50, right: 30 }}
          />

          <YAxis
            label={{
              value: 'Number Of Employees',
              angle: -90,
              position: 'insideLeft',
            }}
          />

          <Tooltip cursor={{ strokeDasharray: '4 4' }} />
          <Legend
            verticalAlign='top'
            height={40}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <Line
            type='monotone'
            dataKey='total'
            name='Total'
            stroke='Blue'
            activeDot={{ r: 8 }}
            strokeOpacity={opacity.total}
          />
          <Line
            type='monotone'
            dataKey='pass'
            name='Pass'
            stroke='Green'
            activeDot={{ r: 8 }}
            strokeOpacity={opacity.pass}
          />
          <Line
            type='monotone'
            dataKey='fail'
            name='Fail'
            stroke='Red'
            activeDot={{ r: 8 }}
            strokeOpacity={opacity.fail}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
