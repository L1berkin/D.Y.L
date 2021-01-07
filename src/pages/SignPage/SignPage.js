import { NavLink } from 'react-router-dom';
import SignBox from '../../components/SignBox/SignBox';
import classes from './SignPage.module.scss'


function SignPage() {
  return (
    <section className={classes.SignPage}>
      <NavLink to="/">D Y L</NavLink>
      <SignBox type="signUp" />
    </section>
  )
}

export default SignPage;