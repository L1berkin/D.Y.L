import Button from '../Button/Button'
import Input from '../Input/Input';
import classes from './SignBox.module.scss'

function SignBox(props) {
  let content;
  const cls = [
    classes.SignBox
  ]

  if (props.path === '/signIn') {
    content = {title: 'Войти', password: 'Введите пароль'}
    cls.push(classes.SignBox__right)
  } else {
    content = {title: 'Регистрация', password: 'Придумайте пароль'}
    cls.push(classes.SignBox__left)
  }


    return (
    <section className={cls.join(' ')}>
      <h1 className={classes.title}>{content.title}</h1>
      <form>
        <Input
          label="Введите адресс электронной почты"
          type="email"
        />
        <Input
          label={content.password}
          type="password"  
        />
        {props.path === '/signUp'
        ? <Input
            label='Повторите пароль'
            type="password"  
          /> 
        : null
        }
        
        <Button type="blue" size="medium" onClick={e => e.preventDefault()}>Продолжить</Button>
      </form>
    </section>
  )
}

export default SignBox;