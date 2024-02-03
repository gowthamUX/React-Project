import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

  return (
    <div>
        <h1> Opss!!</h1>
        <h2> Somethig went wrong</h2>
        <h3> {err.status}: {err.statusText}</h3>
    </div>
  );
}

export default Error;
