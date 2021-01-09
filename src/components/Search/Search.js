import classes from './Search.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import Filter from './Filter/Filter';

function Search() {
  const ops1 = [
    'Все типы вакансий',
    'Полная занятость',
    'Частичная занятость',
    'Удаленная работа'
  ]
  const ops2 = [
    'Есть зарплата',
    'Нет зарплаты'
  ]
  return (
    <div className={classes.Search}>
      <SearchIcon />
      <input type="text" placeholder="Искать работу по ключевым словам" />
      <Filter 
        ops={ops1}
        defaultOps={ops1[0]}
      />
      <Filter 
        ops={ops2}
        defaultOps={ops2[0]}
      />
    </div>
  )
}

export default Search;