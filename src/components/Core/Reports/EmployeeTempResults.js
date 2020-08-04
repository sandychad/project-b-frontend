import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  //ZAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9Lfxjjty/';

  state = {
    opacity: {
      City: 1,

      //      fail: 1,
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
        <ScatterChart
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
            angle={-60}
            tickMargin={40}
            position='left'
            padding={{ left: 50, right: 50 }}
          />
          <YAxis
            dataKey='Temperature'
            domain={[93, 106]}
            unit='°F'
            label={{
              value: 'Temperature',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          {/* <ZAxis dataKey='City' name='City' />  */}
          <Legend
            verticalAlign='top'
            height={50}
            layout='vertical'
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
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
            //            name='City'
            data={data}
            dataKey='City'
            strokeOpacity={opacity.City}
            shape='wye'
            fill='#8884d8'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
