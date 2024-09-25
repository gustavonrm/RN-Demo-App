import React, { FC } from 'react';
import Loader from '../common/Loader';
import { SerializedError } from '@reduxjs/toolkit';

type WithLoaderProps = {
  [key: string]: any;
};

const withLoader = (
  Element: FC<any>,
  useQuery: (arg?: any) => { data?: any; error?: SerializedError | any; isLoading: boolean }
) => {
  return (props: WithLoaderProps) => {
    const { isLoading } = useQuery();

    if (isLoading) {
      return <Loader />;
    }

    return <Element {...props} />;
  };
};

export default withLoader;
