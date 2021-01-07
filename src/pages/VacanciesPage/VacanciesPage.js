import classes from './VacanciesPage.module.scss'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import CardsList from '../../components/CarsList/CardsList';
import Search from '../../components/Search/Search';

function VacanciesPage() {
  const arr = new Array(16).fill('')

  return (
    <div className={classes.VacanciesPage}>
      <div className={classes.title}>
        <Title title="Творческие профессии" background={true} >
          <p>Сделайте следующий шаг в продвижении карьеры, выполните внештатную работу или пройдите стажировку</p>
          <Button type="blue" size="medium" link="createVac">Опубликовать вакансию</Button>
        </Title>
        <Search />
        <CardsList arr={arr} />
      </div>
    </div>
  );
}

export default VacanciesPage;
