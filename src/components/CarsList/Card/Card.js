import classes from './Card.module.scss'
import background from '../../../assets/images/card.jpg'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'; // ES6
import { NavLink } from 'react-router-dom';

function Card({link}) {
  const styles = {
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  const [visible, setVisible] = useState(false)

  return (
    <NavLink to={'/' + link} className={classes.Card}>
      <div className={classes.Card__wrapper}>
        <div className={classes.Card__content} style={styles}
          onMouseOver={() => setVisible(true)}
          onMouseOut={() => setVisible(false)}
        >
          <CSSTransition
            in={visible}
            timeout={500}
            classNames={{
              enter: classes.enter,
              enterDone: classes.enterDone
            }}
            mountOnEnter
            unmountOnExit
          >
            <div className={classes.Card__footer}
            >
              Name Surename
          </div>
          </CSSTransition>
        </div>

      </div>
    </NavLink>
  )
}

export default Card;