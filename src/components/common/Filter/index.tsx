import React, { createContext, useState } from 'react';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { WHITE } from '../../../constants/colors';

const FilterContext = createContext();

const Filter = (props) => {
  const [open, toggle] = useState(false);

  return (
    <FilterContext.Provider value={{ open, toggle }}>
      {props.children}
      <Modal transparent animationType="slide" visible={open}>
        <View style={style.modal}>
          <Text>{'ola'}</Text>
          <Button title="Filter" color="#841584" onPress={() => toggle(!open)} />
        </View>
      </Modal>
    </FilterContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = React.useContext(FilterContext);

  return (
    <View style={style.toggle}>
      <TouchableOpacity
        testID={'filterButtonTestId'}
        style={style.button}
        onPress={() => toggle(!open)}
      >
        <FontAwesomeIcon icon="list" color={WHITE} />
        <Text style={style.buttonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

Filter.Toggle = Toggle;

export default Filter;
