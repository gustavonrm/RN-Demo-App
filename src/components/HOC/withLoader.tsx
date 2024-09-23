import React, { FC }  from 'react';
import Loader from '../common/Loader';
import { Text } from 'react-native';
import { SerializedError } from '@reduxjs/toolkit';

type WithLoaderProps = {
    [key: string]: any;
};

const withLoader = (
    Element: FC<any>,
    useQuery: (arg?: any) => { data?: any; error?: SerializedError | any; isLoading: boolean }
) =>  {
    return (props: WithLoaderProps) => {
        const {data, error, isLoading} = useQuery();


        if(isLoading) {return <Loader />;}
        if(error) {return <Text>{error}</Text>;}
        return <Element {...props} data={data}/>;
    };
};

export default withLoader;
