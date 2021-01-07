import classes from './Title.module.scss'

function Title({ children, title, background }) {
  const cls = [
    classes.Title
  ]
  if (background) {
    cls.push(classes.Title_background)
  }

  return (
    <div className={cls.join(' ')}>
      <h2 className={classes.Title__text}>
        {title}
      </h2>
      {children}
    </div>
  )
}
export default Title;