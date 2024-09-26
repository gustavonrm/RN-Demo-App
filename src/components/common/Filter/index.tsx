import React, { createContext, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import style from './style';

const FilterContext = createContext();

const Filter = (props) => {
  const [open, toggle] = useState(false);
  return (
    <FilterContext.Provider value={{ open, toggle }}>
      <Button title="Filter" color="#841584" onPress={() => toggle(!open)} />
      <Modal transparent animationType="slide" visible={open}>
        <View style={style.modal}>
          <Text>{'ola'}</Text>
          <Button title="Filter" color="#841584" onPress={() => toggle(!open)} />
        </View>
      </Modal>
    </FilterContext.Provider>
  );
};

export default Filter;
