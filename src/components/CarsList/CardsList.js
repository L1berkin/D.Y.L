import Card from './Card/Card';
import classes from './CardsList.module.scss'

function CardsList({arr}) {
  return (
    <div className={classes.CardsList}>
      {arr.map((i, ind) => <Card key={ind} link="card"/>)}
    </div>
  )
}

export default CardsList;