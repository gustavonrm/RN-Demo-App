import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ErrorView from '../common/ErrorView';

type WithErrorProps = {
  [key: string]: any;
};

const withError = (Element: FC<any>, selector) => {
  return (props: WithErrorProps) => {
    const data = useSelector(selector);
    if (data.length > 0) return <Element {...props} />;
    else return <ErrorView />;
  };
};

export default withError;
