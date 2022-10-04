import React, { useEffect, useState } from 'react';

const ErrorButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <button type="button" onClick={onThrow}>
      Ошибка
    </button>
  );
};

export default ErrorButton;
