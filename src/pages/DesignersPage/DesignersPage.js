import Title from '../../components/Title/Title'
import classes from './DesignersPage.module.scss'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import CardsList from '../../components/CarsList/CardsList';

function DesignersPage() {
  return (
    <div className={classes.DesignersPage}>
      <Title title={'Draw Your Life'}>
        <p>Рисуй свою жизнь вместе с лучшими дизайнерами <strong>D Y L</strong></p>
        <NavLink to="/search"><SearchIcon />Поиск по всем проектам в галерее D Y L</NavLink>
      </Title>

      <CardsList />
    </div>
  );
}

export default DesignersPage;
