import React, {useState} from 'react';

const Button = ({action, className, innerText}) => {
  const [loading, setLoading] = useState(false);
  return (
    <button disabled={loading} className={className} onClick={(() => action())}>
      {
        loading ?
        <span>Loading...</span>
        :
        innerText
      }
    </button>
  );
};

export default Button;