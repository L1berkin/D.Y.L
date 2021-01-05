import classes from './Header.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom'

function Header() {
  const seachIconStyles = {
    position: 'relative',
    left: '30px'
  }

  return (
    <header className={classes.Header}>
      <NavLink to="/" exact className={classes.Header__logo}>D Y L</NavLink>

      <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
          <li className={classes.navbar__item}>
            <NavLink to="/" exact className={classes.navbar__link} activeClassName={classes.active}>Лучшие</NavLink>
          </li>
          <li className={classes.navbar__item}>
            <NavLink to="/blog" className={classes.navbar__link} activeClassName={classes.active}>Блог</NavLink>
          </li>
          <li className={classes.navbar__item}>
            <NavLink to="/vacancies" className={classes.navbar__link} activeClassName={classes.active}>Вакансии</NavLink>
          </li>
          <li className={classes.navbar__item}>
            <NavLink to="/about" className={classes.navbar__link} activeClassName={classes.active}>О нас</NavLink>
          </li>
        </ul>
      </nav>
      <SearchIcon color="action" style={seachIconStyles} />
      <input className={classes.Header__search} placeholder="Поиск..."/>

      <button className={classes.Header__signIn}>Войти</button>
      <button className={classes.Header__signUp}>Регистрация</button>
    </header>
  );
}

export default Header;
