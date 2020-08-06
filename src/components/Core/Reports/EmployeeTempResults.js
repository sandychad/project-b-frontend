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
  Legend,
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
  for (let row in data) {
    let cities = [];
    if (cities.includes(row.City)) {
      cities.push(row.City);
    }
    let colors = {};
    cities.map((city) => {
      colors.city = getRandomColor();      
    });
  }
};

export default class Example extends PureComponent {
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
          <ZAxis dataKey='City' name='City' />
          <Legend verticalAlign='top' height={50} layout='vertical' />
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
            shape='wye'
            fill='#8884d8'
          >
            {data.map((row, index) => {

            } (
              <Cell
                key={`cell-${index}`}
                fill={colors}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
