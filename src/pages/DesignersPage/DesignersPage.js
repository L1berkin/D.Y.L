import Title from '../../components/Title/Title'
import classes from './DesignersPage.module.scss'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import CardsList from '../../components/CarsList/CardsList';

function DesignersPage() {
  const arr = new Array(16).fill('')

  return (
    <div className={classes.DesignersPage}>
      <Title title={'Draw Your Life'}>
        <p>Рисуй свою жизнь вместе с лучшими дизайнерами <strong>D Y L</strong></p>
        <NavLink to="/search"><span><SearchIcon />Поиск по всем проектам в галерее D Y L</span></NavLink>
      </Title>

      <CardsList arr={arr} />
    </div>
  );
}

export default DesignersPage;
