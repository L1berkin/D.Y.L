// import classes from './VacanciesPage.module.scss'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import CardsList from '../../components/CarsList/CardsList';
import Search from '../../components/Search/Search';
import { Fragment } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Background from '../../components/Background/Background';

function VacanciesPage() {
  const arr = new Array(16).fill('')

  return (
    <Fragment>
        <Title title="Творческие профессии" background={true} >
          <p>Сделайте следующий шаг в продвижении карьеры, выполните внештатную работу или пройдите стажировку</p>
          <Button type="blue" size="medium" link="createVac">Опубликовать вакансию</Button>
        </Title>
        <Wrapper width="80%" >
          <Search />
          <CardsList arr={arr} type={'vac'} />
        </Wrapper>
    </Fragment>
  );
}

export default VacanciesPage;
