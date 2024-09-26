import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ErrorView from '../common/ErrorView';

type WithErrorProps = {
  [key: string]: any;
};

const withError = (Element: FC<any>, selector: (state: any, props: WithErrorProps) => any) => {
  return (props: WithErrorProps) => {
    const data = useSelector((state) => selector(state, props));

    if (!data || data <= 0) {
      return <ErrorView message={'Error Loading Data'} />;
    } else {
      return <Element {...props} />;
    }
  };
};

export default withError;
