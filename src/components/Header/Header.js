import classes from './Header.module.scss'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  const seachIconStyles = {
    position: 'relative',
    left: '30px'
  }

  return (
    <div className={classes.Header}>
      <a href="/" className={classes.Header__logo}>D Y L</a>

      <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
          <li className={classes.navbar__item}>
            <a href="/" className={classes.navbar__link}>Лучшие</a>
          </li>
          <li className={classes.navbar__item}>
            <a href="/" className={classes.navbar__link}>Прямые трансляции</a>
          </li>
          <li className={classes.navbar__item}>
            <a href="/" className={classes.navbar__link}>Вакансии</a>
          </li>
        </ul>
      </nav>
      <SearchIcon color="action" style={seachIconStyles} />
      <input className={classes.Header__search} placeholder="Поиск..."/>

      <button className={classes.Header__signIn}>Войти</button>
      <button className={classes.Header__signUp}>Регистрация</button>
    </div>
  );
}

export default Header;
