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
import { PINK, WHITE } from '../../../constants/colors';
import ActionButton from '../ActionButton';
import {
  selectFilters,
  setFilters as setFiltersReducer,
} from '../../../redux/slices/filters.slice';
import { useDispatch, useSelector } from 'react-redux';

type FilterContent = {
  open: boolean;
  toggle: (value: boolean) => void;
  filters: object;
  setFilters: (value: object) => void;
};
const FilterContext = createContext<FilterContent>({ open: false, toggle: () => {} });
const useFilterContext = () => useContext(FilterContext);

const Filter = (props: { children: React.ReactElement[] }) => {
  const [open, toggle] = useState(false);
  const [filters, setFilters] = useState({});

  return (
    <FilterContext.Provider value={{ open, toggle, filters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = useFilterContext();
  const selectedFilters = useSelector(selectFilters);

  return (
    <View style={style.toggle}>
      <TouchableOpacity
        testID={'filterButtonTestId'}
        style={style.button}
        onPress={() => toggle(!open)}
      >
        {Object.keys(selectedFilters).length > 0 && <View style={style.badge} />}
        <FontAwesomeIcon icon="list" color={WHITE} />
        <Text style={style.buttonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { open, toggle, filters, setFilters } = useFilterContext();

  const dispatch = useDispatch();

  const clearFilters = () => {
    toggle(false);
    setFilters({});
    dispatch(setFiltersReducer({}));
  };

  const applyFilters = () => {
    toggle(false);
    dispatch(setFiltersReducer(filters));
  };

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
          <ActionButton testID={'applyFilterButtonTestId'} onPress={() => applyFilters()}>
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
  sort,
}: {
  children: React.ReactNode[] | React.ReactNode;
  name: string;
  sort?: boolean;
}) => {
  return (
    <>
      <Text style={style.text}>{name}</Text>
      <View style={sort && { flex: 1, flexDirection: 'row' }}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { section: name });
          }
          return child;
        })}
      </View>
    </>
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
  value: string | boolean | number | number[];
  section?: string;
}) => {
  const { filters, setFilters } = useFilterContext();

  const setFilter = (key: string, value: number | string | boolean) => {
    if (filters[key] == value) setFilters({ ...filters, [key]: null });
    else setFilters({ ...filters, [key]: value });
  };

  const selected = filters[section] == value;
  return (
    <ActionButton
      secondary={!selected}
      testID={`${name}FilterTestId`}
      onPress={() => setFilter(section, value)}
    >
      <Text style={{ ...style.buttonText, color: selected ? WHITE : PINK }}>{children}</Text>
    </ActionButton>
  );
};

Filter.Toggle = Toggle;
Filter.Menu = Menu;
Filter.Section = Section;
Filter.Item = Item;

export default Filter;
