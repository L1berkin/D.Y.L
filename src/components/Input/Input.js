import { Fragment } from "react";
import classes from './Input.module.scss'

function Input({type, label}) {
  return (
    <Fragment>
      <label htmlFor={Date.now() + Math.random()} className={classes.Label} >{label}</label>
      <input type={type} id={Date.now() + Math.random()} className={classes.Input} />
    </Fragment>
  )
}

export default Input;