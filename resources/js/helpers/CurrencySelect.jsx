import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import styles from './CurrencySelect.css';

const Select = ({ options, ...rest }) => (
  <>
    <select {...rest}>
      {options && Object.keys(options).map(key => (
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
