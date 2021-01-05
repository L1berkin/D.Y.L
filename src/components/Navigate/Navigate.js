import classes from './Navigate.module.scss'
import { NavLink } from 'react-router-dom'

function Navigate() {
  return (
    <nav className={classes.Navigate}>
      <ul className={classes.Navigate__list}>
        <li className={classes.Navigate__item}>
          <NavLink to="/" exact className={classes.Navigate__link} activeClassName={classes.active}>Лучшие</NavLink>
        </li>
        <li className={classes.Navigate__item}>
          <NavLink to="/blog" className={classes.Navigate__link} activeClassName={classes.active}>Блог</NavLink>
        </li>
        <li className={classes.Navigate__item}>
          <NavLink to="/vacancies" className={classes.Navigate__link} activeClassName={classes.active}>Вакансии</NavLink>
        </li>
        <li className={classes.Navigate__item}>
          <NavLink to="/about" className={classes.Navigate__link} activeClassName={classes.active}>О нас</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigate;