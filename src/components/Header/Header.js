import classes from './Header.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom'
import Navigate from '../Navigate/Navigate';
import Button from '../Button/Button';

function Header() {
  const seachIconStyles = {
    position: 'relative',
    left: '30px'
  }

  return (
    <header className={classes.Header}>
      <NavLink to="/" exact className={classes.Header__logo}>D Y L</NavLink>

      <Navigate />
      
      <SearchIcon color="action" style={seachIconStyles} />
      <input type="text" className={classes.Header__search} placeholder="Поиск..."/>

      <Button type="signIn" link="signIn">
        Войти
      </Button>
      <Button type="signUp" link="signUp">
        Регистрация
      </Button>
    </header>
  );
}

export default Header;
