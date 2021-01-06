import { NavLink } from 'react-router-dom'
import classes from './Button.module.scss'

function Button({children, type, link}) {
  const cls =[
    classes.Button
  ]

  switch (type) {
    case 'signIn': cls.push(classes.Button__signIn)
      break
    case 'signUp': cls.push(classes.Button__signUp)
      break
    default: break
  }

  if (link) {
    cls.push(classes.Button__link)

    return (
      <NavLink to={'/' + link} className={cls.join(' ')}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={cls.join(' ')}>
      {children}
    </button>
  )
}

export default Button;