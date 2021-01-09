import classes from './Wrapper.module.scss'

function Wrapper({children, width}) {
  return (
    <div className={classes.Wrapper} style={{width: width || '90%'}}>
      {children}
    </div>
  )
}

export default Wrapper;