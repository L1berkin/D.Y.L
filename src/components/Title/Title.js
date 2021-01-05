import classes from './Title.module.scss'

function Title({ children, title }) {
  return (
    <div className={classes.Title}>
      <h2 className={classes.Title__text}>
        {title}
      </h2>
      {children}
    </div>
  )
}
export default Title;