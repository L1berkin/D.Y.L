import classes from './Button.module.scss'

function Button({children, type}) {
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

  return (
    <button className={cls.join(' ')}>
      {children}
    </button>
    
  )
}

export default Button;