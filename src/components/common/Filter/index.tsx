import React, { createContext, useState, useContext } from 'react';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { BLACK, WHITE } from '../../../constants/colors';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

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
        <TouchableOpacity>
          <FontAwesomeIcon icon="xmark" color={BLACK} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Clear Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Applr Filters</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

Filter.Toggle = Toggle;
Filter.Menu = Menu;

export default Filter;
