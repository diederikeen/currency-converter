import React, { useState, useEffect } from 'react';
import FetchFixer from './calls/Fixer';

// eslint-disable-next-line no-unused-vars
import styles from './CurrencySelect.css';

const Select = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [options, setOptions] = useState();

  const [isError, setIsError] = useState({
    bool: false,
    message: '',
  });

  const handleError = (error) => {
    setIsError({
      bool: true,
      message: error.info,
    });
  };

  const handleSucces = ({ symbols: currencies }) => {
    setIsFetching(false);
    setOptions(currencies);
  };

  function onEffect() {
    const params = {
      endpoint: 'symbols',
    };

    FetchFixer(params, handleSucces, handleError);
  }

  useEffect(() => {
    onEffect();
  }, []);

  return (
    <>
      {isError.bool && <p>{isError.message}</p>}
      <select {...props}>
        {options && Object.keys(options).map(key => (
          <option
            value={key}
            key={key}
          >
            {options[key]}
          </option>
        ))}
      </select>
      {isFetching && <span>Retrieving currencies</span>}
    </>
  );
};

export default Select;
