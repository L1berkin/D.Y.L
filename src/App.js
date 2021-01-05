import Header from "./components/Header/Header";
import Layout from "./hoc/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import DesignersPage from "./pages/DesignersPage/DesignersPage";
import VacanciesPage from "./pages/VacanciesPage/VacanciesPage";
import { Route, Switch, Redirect } from 'react-router-dom'
import { Fragment } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={DesignersPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/vacancies" component={VacanciesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/search" component={SearchPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
