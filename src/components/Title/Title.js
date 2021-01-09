import classes from './Title.module.scss'

function Title({ children, title, background }) {
  const cls = [
    classes.Title,
    'bigSize'
  ]
  if (background) {
    cls.push(classes.Title_background)
  }

  return (
    <section className={cls.join(' ')}>
      <h2 className={classes.Title__text}>
        {title}
      </h2>
      {children}
    </section>
  )
}
export default Title;