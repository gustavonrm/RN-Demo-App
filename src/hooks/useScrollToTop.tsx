import React, { DependencyList, RefObject, useEffect } from 'react';
import { FlatList } from 'react-native';

const useScrollToTop = (ref: RefObject<FlatList<any>>, deps: DependencyList) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, deps);
};

export default useScrollToTop;
