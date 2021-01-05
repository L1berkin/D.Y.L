import Header from "./components/Header/Header";
import Layout from "./hoc/Layout/Layout";
import DesignListPage from "./pages/DesignListPage/DesignListPage";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <DesignListPage /> 
      </Layout>
    </div>
  );
}

export default App;
