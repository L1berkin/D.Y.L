import Header from "./components/Header/Header";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, Redirect } from 'react-router-dom'
import { Fragment } from "react";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import DesignersPage from "./pages/DesignersPage/DesignersPage";
import VacanciesPage from "./pages/VacanciesPage/VacanciesPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CardPage from "./pages/CardPage/CardPage";

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
          <Route path="/signIn" component={SignInPage} />
          <Route path="/signUP" component={SignUpPage} />
          <Route path="/card" component={CardPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
