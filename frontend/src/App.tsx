import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes'
import 'antd/dist/antd.css'

import Header from './components/Header'

import { Layout } from 'antd';



function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header />
      </Layout>
      <Routes />
    </BrowserRouter>
  );

}

export default App;
