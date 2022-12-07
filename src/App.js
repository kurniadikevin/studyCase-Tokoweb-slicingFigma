import './App.css';
import Head from './component/head/head';
import Banner1  from './component/banner1/banner1';
import Main from './component/main/main';
import Banner2  from './component/banner2/banner2';
import Footer from './component/footer/footer';
function App() {
  return (
    <div className="App">
      <Head/>
      <Banner1/>
      <Main/>
      <Banner2/>
      <Footer/>
    </div>
  );
}

export default App;
