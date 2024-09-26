import React, {
  createContext,
  useState,
  useContext,
  isValidElement,
  cloneElement,
  Children,
} from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { WHITE, YELLOW } from '../../../constants/colors';
import ActionButton from '../ActionButton';

type FilterContent = {
  open: boolean;
  toggle: (value: boolean) => void;
  filters: object;
  setFilter: (key: string, value: number | string | boolean) => void;
  clearFilters: () => void;
};
const FilterContext = createContext<FilterContent>({ open: false, toggle: () => {} });
const useFilterContext = () => useContext(FilterContext);

const Filter = (props: { children: React.ReactElement[] }) => {
  const [open, toggle] = useState(false);
  const [filters, setFilters] = useState({});

  console.log(filters);

  const setFilter = (key: string, value: number | string | boolean) => {
    if (filters[key] == value) setFilters({ ...filters, [key]: null });
    else setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    toggle(false);
    setFilters({});
  };

  return (
    <FilterContext.Provider value={{ open, toggle, filters, setFilter, clearFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle, filters } = useFilterContext();

  return (
    <View style={style.toggle}>
      <TouchableOpacity
        testID={'filterButtonTestId'}
        style={style.button}
        onPress={() => toggle(!open)}
      >
        {Object.keys(filters).length > 0 && <View style={style.badge} />}
        <FontAwesomeIcon icon="list" color={WHITE} />
        <Text style={style.buttonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { open, toggle, clearFilters } = useFilterContext();

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
          <ActionButton secondary onPress={() => clearFilters()}>
            <Text style={style.buttonText2}>Clear Filters</Text>
          </ActionButton>
          <ActionButton onPress={() => toggle(!open)}>
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
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { section: name });
        }
        return child;
      })}
    </View>
  );
};

const Item = ({
  children,
  name,
  section,
  value,
}: {
  children: React.ReactNode[] | React.ReactNode;
  name: string;
  value: string | boolean | number;
  section: string;
}) => {
  const { filters, setFilter } = useFilterContext();
  return (
    <ActionButton
      secondary={filters[section] !== value}
      testID={`${name}FilterTestId`}
      onPress={() => setFilter(section, value)}
    >
      <Text style={style.buttonText}>{children}</Text>
    </ActionButton>
  );
};

Filter.Toggle = Toggle;
Filter.Menu = Menu;
Filter.Section = Section;
Filter.Item = Item;

export default Filter;
