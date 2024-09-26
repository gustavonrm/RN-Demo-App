import React, { createContext, useState, useContext } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { WHITE } from '../../../constants/colors';
import ActionButton from '../ActionButton';

type FilterContent = {
  open: boolean;
  toggle: (value: boolean) => void;
};
const FilterContext = createContext<FilterContent>({ open: false, toggle: () => {} });
const useFilterContext = () => useContext(FilterContext);

const Filter = (props: { children: React.ReactElement[] }) => {
  const [open, toggle] = useState(false);

  return <FilterContext.Provider value={{ open, toggle }}>{props.children}</FilterContext.Provider>;
};

const Toggle = () => {
  const { open, toggle } = useFilterContext();

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

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { open, toggle } = useFilterContext();

  return (
    <Modal transparent animationType="slide" visible={open}>
      <View style={style.modal}>
        <View style={style.headerContainer}>
          <ActionButton onPress={() => toggle(!open)}>
            <FontAwesomeIcon icon="xmark" color={WHITE} size={20} />
          </ActionButton>
        </View>
        <ScrollView style={style.sectionContainer}>{children}</ScrollView>
        <View style={style.actionButtonContainer}>
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

const Section = ({
  children,
  name,
}: {
  children: React.ReactNode[] | React.ReactNode;
  name: string;
}) => {
  return (
    <View>
      <Text style={style.text}>{name}</Text>
      {children}
    </View>
  );
};

const Item = ({
  children,
  name,
}: {
  children: React.ReactNode[] | React.ReactNode;
  name: string;
}) => {
  return (
    <ActionButton secondary testID={`${name}FilterTestId`}>
      <Text style={style.buttonText}>{children}</Text>
    </ActionButton>
  );
};

Filter.Toggle = Toggle;
Filter.Menu = Menu;
Filter.Section = Section;
Filter.Item = Item;

export default Filter;
