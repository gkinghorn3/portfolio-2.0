import { bool, func } from 'prop-types';


import './Burger.styles.scss';

const Burger = ({open, setOpen}) => {
    return (
      <div className='burger-icon' open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
    )
  }

  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  
  export default Burger;