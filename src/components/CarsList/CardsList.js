import Card from './Card/Card';
import classes from './CardsList.module.scss'

function CardsList() {
  const arr = new Array(16).fill('')
  return (
    <div className={classes.CardsList}>
      {arr.map((i, ind) => <Card key={ind} />)}
    </div>
  )
}

export default CardsList;