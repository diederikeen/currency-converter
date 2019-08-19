import React from 'react';
import PropTypes from 'prop-types';

import './CurrencySelect.css';

const Select = ({ options, ...rest }) => (
  <>
    <select {...rest}>
      {options && Object.keys(options).map((key) => (
        <option
          value={key}
          key={key}
        >
          {options[key]}
        </option>
      ))}
    </select>
  </>
);

Select.propTypes = {
  options: PropTypes.object.isRequired,
};

export default Select;
