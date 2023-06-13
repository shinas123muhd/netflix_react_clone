
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import NavBar from './Components/navBar/navBar';
import {originals,action,horror,comedy} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url ={originals} title='Trending'/>
      <RowPost url ={action}  title='Action' isSmall />
      <RowPost url ={horror}  title='Horror' isSmall />
      <RowPost url ={comedy}  title='Comedy' />
    </div>
  );
}

export default App;
