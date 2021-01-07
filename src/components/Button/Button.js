import { NavLink } from 'react-router-dom'
import classes from './Button.module.scss'

function Button({children, type, link, size, onClick}) {
  const cls =[
    classes.Button
  ]

  switch (size) {
    case 'medium': cls.push(classes.Button__medium)
      break
    case 'big': cls.push(classes.Button__big)
      break
    default: break
  }

  switch (type) {
    case 'white': cls.push(classes.Button__white)
      break
    case 'blue': cls.push(classes.Button__blue)
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
    <button className={cls.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;