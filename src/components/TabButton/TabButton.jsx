import Button from '@mui/material/Button';

function TabButton({ label, onSelect, isSelected }){
  return (
    <li>
    <Button variant='contained' color='primary' className={isSelected ? 'active' : ''} onClick={onSelect}>{label}</Button>
    </li>);
}

export default TabButton