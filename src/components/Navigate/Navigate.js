import classes from './Navigate.module.scss'
import { NavLink } from 'react-router-dom'

function Navigate({links}) {
  return (
    <nav className={classes.Navigate}>
      <ul className={classes.Navigate__list}>
        {
          links.map((link, index) => (
            <li className={classes.Navigate__item} key={index + link.path}>
              <NavLink to={'/' + link.path} exact={!link.path} className={classes.Navigate__link} activeClassName={classes.active}>{link.title}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigate;