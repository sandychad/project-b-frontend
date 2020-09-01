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

  state = {
    opacity: {
      pass: 0.5,
      fail: 0.5,
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
          <XAxis
            dataKey='location'
            //tickMargin={40}
            //angle={-20}
            //position='left'
            textAnchor='end'
            tick={{ angle: -20 }}
            interval={0}
          >
            {/* <label position='insideBottomRight' dy={10} dx={20} /> */}
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
          <Legend
            verticalAlign='top'
            height={50}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <Bar
            dataKey='pass'
            stackId='a'
            fill='#82ca9d'
            legendType='star'
            unit='%'
            strokeOpacity={opacity.pass}
          />
          <Bar
            dataKey='fail'
            stackId='a'
            fill='#8884d8'
            legendType='star'
            unit='%'
            strokeOpacity={opacity.fail}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
