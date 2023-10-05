import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { Input } from './Filter.styled';

const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <Input onChange={handleFilter} id={filterInputId} type="text" />
    </>
  );
};

export default Filter;
