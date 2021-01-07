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
  const links = [
    {title: 'Лучшие', path: ''},
    {title: 'Блог', path: 'blog'},
    {title: 'Вакансии', path: 'vacancies'},
    {title: 'О нас', path: 'about'}
  ]
  return (
    <header className={classes.Header}>
      <NavLink to="/" exact className={classes.Header__logo}>D Y L</NavLink>

      <Navigate links={links} />
      
      <SearchIcon color="action" style={seachIconStyles} />
      <input type="text" className={classes.Header__search} placeholder="Поиск..."/>
      <span />
      <Button type="white" link="signIn">
        Войти
      </Button>
      <Button type="blue" link="signUp">
        Регистрация
      </Button>
    </header>
  );
}

export default Header;
