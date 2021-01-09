import Card from './Card/Card';
import classes from './CardsList.module.scss'

function CardsList({arr, type}) {
  return (
    <div className={classes.CardsList}>
      {
        type === 'design'
        ? arr.map((i, ind) => <Card key={ind} link="card"/>)
        : arr.map((i, ind) => <Card key={ind} link="card"/>)
      }
    </div>
  )
}

export default CardsList;