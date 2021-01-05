import classes from './Card.module.scss'
import background from '../../../assets/images/card.jpg'
import { useState } from 'react'

function Card() {
  const styles = {
    background: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  const [visible, setVisible] = useState(false)

  return (
    <div className={classes.Card}>
      <div className={classes.Card__wrapper}>
        <div className={classes.Card__content} style={styles}
          onMouseOver={() => setVisible(true)}
          onMouseOut={() => setVisible(false)}
        >
          {visible 
          ?<div className={classes.Card__footer}
            >
              Name Surename
            </div>
            : null
          }
          
        </div>

      </div>
    </div>
  )
}

export default Card;