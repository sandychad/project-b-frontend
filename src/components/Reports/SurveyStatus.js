import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Text,
  Label,
  CustomizedLegend,
} from 'recharts';

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);
  return (
    <div className='customized-tooltip-content'>
      <p className='total'>{`${label} (Total: ${total})`}</p>
      <ul className='list'>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default class SurveyStatus extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    const { data } = this.props;

    return (
      <BarChart
        width={800}
        height={500}
        barSize={40}
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 65,
        }}
      >
        <CartesianGrid strokeDasharray='5 5' />
        <XAxis
          dataKey='name'
          angle='-60'
          tickMargin='40'
          position='left'
        ></XAxis>
        <YAxis
          label={{
            value: 'Survey Pass Percentage',
            angle: -90,
            position: 'insideLeft',
            tickFormatter: { toPercent },
          }}
        />
        <Legend verticalAlign='top' height={50} />} />
        <Bar dataKey='pass' stackId='a' fill='#82ca9d' />
        <Bar dataKey='fail' stackId='a' fill='#8884d8' />
      </BarChart>
    );
  }
}
