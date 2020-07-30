import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// const data = [
//   { Location: 100, avgTemperature: 200, avgtemptoday: 200 },
//   { Location: 120, avgTemperature: 100, avgtemptoday: 260 },
//   { Location: 170, avgTemperature: 300, avgtemptoday: 400 },
//   { Location: 140, avgTemperature: 250, avgtemptoday: 280 },
//   { Location: 150, avgTemperature: 400, avgtemptoday: 500 },
//   { Location: 110, avgTemperature: 280, avgtemptoday: 200 },
// ];

export default class AverageTemperature extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

  render() {
    const { data } = this.props;

    return (
      <ScatterChart
        width={800}
        height={600}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 65,
        }}
      >
        <CartesianGrid />
        <XAxis
          dataKey='location'
          name='Location'
          angle='-60'
          tickMargin='40'
          position='left'
          padding={{ left: 50, right: 50 }}
        />
        <YAxis
          type='number'
          dataKey='avgTemperature'
          name='Average Temperature'
          label={{
            value: 'Average Temperature',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <ZAxis
          type='number'
          dataKey='avgtemptoday'
          range={[60, 400]}
          // name='Average Temperature'
        />
        <Tooltip cursor={{ strokeDasharray: '10 10' }} />
        <Legend verticalAlign='top' height={50} />
        <Scatter
          name='Average Temperature'
          data={data}
          fill='#8884d8'
          shape='star'
        />
      </ScatterChart>
    );
  }
}

/*  render() {
    return (
      <ScatterChart
        width={800}
        height={500}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 65,
        }}
      >
        <CartesianGrid />
        <XAxis
          type='number'
          dataKey='Location'
          name='Location'
          angle='-60'
          tickMargin='40'
          position='left'
        />
        <YAxis
          dataKey='avgTemperature'
          label={{
            value: 'Average Temperature',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <ZAxis
          type='number'
          dataKey='avgtemptoday'
          range={[60, 300]}
          name='Average Temperature Today'
        />
        <Tooltip cursor={{ strokeDasharray: '6 6' }} />
        <Legend verticalAlign='top' height={50} />
        <Scatter
          name='Average Temperature'
          //          data={data}
          fill='#8884d8'
          shape='star'
        />
      </ScatterChart>
    );
  }
}
 */
