import { NavLink } from 'react-router-dom';
import SignBox from '../../components/SignBox/SignBox';
import classes from './SignPage.module.scss'


function SignPage(props) {
  const path = props.match.path

  const clsLink = [
    classes.link
  ]

  const clsPage = [
    classes.SignPage
  ]

  if (path === '/signIn') {
    clsLink.push(classes.left)
    clsPage.push(classes.SignPage__signIn)
  } else {
    clsLink.push(classes.right)
    clsPage.push(classes.SignPage__signUp)
  }
  
  return (
    <section className={clsPage.join(' ')}>
      <NavLink to="/" className={clsLink.join(' ')} >D Y L</NavLink>
      <SignBox path={path} />
    </section>
  )
}

export default SignPage;