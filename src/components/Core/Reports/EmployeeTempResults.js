import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
  Cell,
} from 'recharts';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getColorsFromData = (data) => {
  let cities = [];
  let colors = {};
  data.map((row) => {
    const city = row['City'].trim();
    if (!cities.includes(city)) {
      cities.push(city);
    }
    return row;
  });
  cities.map((city) => {
    colors[city] = getRandomColor();
    return city;
  });
  return colors;
};

export default class EmployeeTempResults extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9Lfxjjty/';

  render() {
    const { data } = this.props;
    const colors = getColorsFromData(data);
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
          <ZAxis dataKey='City' name='Location' />
          {/* <Legend /> */}
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
          <Scatter data={data} dataKey='City' shape='wye' fill='#8884d8'>
            {data.map((row, index) => {
              return <Cell key={`cell-${index}`} fill={colors[row.City]} />;
            })}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
