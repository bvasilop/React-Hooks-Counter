import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <p>The current count is {count}</p>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};

App.defaultProps = {
  initialCount: 0,
};

App.propTypes = {
  initialCount: PropTypes.number,
};

export default App;
