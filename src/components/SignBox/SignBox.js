import Button from '../Button/Button'
import Input from '../Input/Input';
import classes from './SignBox.module.scss'

function SignBox({type}) {
  const content = type === 'signIn' 
    ? {title: 'Войти', password: 'Введите пароль'} 
    : {title: 'Регистрация', password: 'Придумайте пароль'}

    return (
    <section className={classes.SignBox}>
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
        {type === 'signUp'
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