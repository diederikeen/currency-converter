import React from 'react';
import {
  LineChart,
  Line, CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import Style from './LineGraph.css';


const LineGraph = ({
  data,
  minVal,
  maxVal,
}) => (
  <>
    <div className="e-line-graph">
      <div className="e-line-graph__content-wrap">
        <ResponsiveContainer width="99%" height={260}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="rate" stroke="#0066ff" isAnimationActive={false}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis dataKey="rate" domain={[Number(Math.round(minVal+'e2')+'e-2'), Number(Math.round(maxVal+'e2')+'e-2')]}/>
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </>
);

LineChart.propTypes = {
  props: PropTypes.shape({
    data: PropTypes.array.isRequired,
    minVal: PropTypes.number.isRequired,
    maxVal: PropTypes.number.isRequired,
    baseCurrency: PropTypes.string.isRequired,
    targetCurrency: PropTypes.string.isRequired,
  }),
};

export default LineGraph;
