import classes from './Background.module.scss'

function Background({type, onClick}) {
  let style = {background: 'rgba(0, 0, 0, 0'}
  if (type === 'dark') {
    style = {background: 'rgba(0, 0, 0, 0.7)'}
  }

  return (
    <div
      className={classes.Background}
      style={style}
      onClick={onClick}  
    >

    </div>
  )
}

export default Background;