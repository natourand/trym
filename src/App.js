import './App.css';
import Header from './Headers/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';

function App() {
  return (
    <div className="app">
   <Header/>


    <div className="app__body">
      <Sidebar/>
      <Feed/>
      </div>
      
        { /* widgets */}
   
    </div>
  );
}

export default App;
