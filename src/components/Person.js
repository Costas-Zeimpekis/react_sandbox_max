import React from 'react';

const person = ({ age, name, children }) => {
  return (
    <div>
      <p>
        I am {name} and I am {age} years old
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
