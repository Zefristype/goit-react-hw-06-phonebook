import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getFilter, onChange } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(onChange(value.toLowerCase()));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
