import React, { createContext, useState, useContext } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { WHITE } from '../../../constants/colors';
import ActionButton from '../../ActionButton';

interface FilterContextType {
  open: boolean;
  toggle: (value: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const Filter = (props: { children: React.ReactElement<any, string> }) => {
  const [open, toggle] = useState(false);

  return <FilterContext.Provider value={{ open, toggle }}>{props.children}</FilterContext.Provider>;
};

const Toggle = () => {
  const { open, toggle } = useContext(FilterContext);

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

const Menu = ({ children }) => {
  const { open, toggle } = useContext(FilterContext);

  return (
    <Modal transparent animationType="slide" visible={open}>
      <View style={style.modal}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <ActionButton onPress={() => toggle(!open)}>
            <FontAwesomeIcon icon="xmark" color={WHITE} size={20} />
          </ActionButton>
        </View>
        {children}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            marginBottom: 5,
          }}
        >
          <ActionButton secondary onPress={() => toggle(!open)}>
            <Text style={style.buttonText2}>Clear Filters</Text>
          </ActionButton>
          <ActionButton>
            <Text style={style.buttonText}>Apply Filters</Text>
          </ActionButton>
        </View>
      </View>
    </Modal>
  );
};

const Section = () => {};
const Item = () => {};

Filter.Toggle = Toggle;
Filter.Menu = Menu;

export default Filter;
