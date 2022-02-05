import React from 'react';

const Input = (props) => {
  const { type, handleAction } = props
  return (
    <div className="col-4">
        <input type={type} onChange={handleAction} />
    </div>
  );
}

export default Input;
