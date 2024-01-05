import React, { useState } from "react";

function UseInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setError(false);
  };

  return {
    value,
    handleChange,
    error,
    setError,
  };
}

export default UseInput;
