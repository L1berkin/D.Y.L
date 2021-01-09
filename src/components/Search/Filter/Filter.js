import { Fragment, useState } from 'react';
import Background from '../../Background/Background';
import classes from './Filter.module.scss'

function Filter(props) {
  const [dropDown, setDropDown] = useState(false)
  const [title, setTitle] = useState(props.defaultOps)
  const dropDownHandler = () => {
    setDropDown(!dropDown)
  }
  const chooseOptionHandler = event => {
    const value = event.target.dataset.value
    setTitle(value)
  }
  return (
    <Fragment>
      {dropDown ? <Background onClick={dropDownHandler} /> : null}
      <div
        className={classes.Filter}
        onClick={dropDownHandler}
      >
        <p>{title}</p>
        {dropDown 
        ? <ul className={classes.dropDown}>
            {props.ops.map((el, ind) => (
              <li data-value={el} key={el+ind} onClick={chooseOptionHandler}>{el}</li>
            ))}
          </ul>
        : null  
        }
      </div>
    </Fragment>
  )
}

export default Filter;