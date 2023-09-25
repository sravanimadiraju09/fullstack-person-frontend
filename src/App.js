
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonListComponent from './components/PersonListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddPersonComponent from './components/AddPersonComponent';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import withNavigation from './components/withNavigation';

function App() {
  const PersonListComponentwithNavigation =withNavigation(PersonListComponent);
  const AddPersonComponentwithNavigation=withNavigation(AddPersonComponent);
  return (
    <div >
      <HeaderComponent/>

<div className='container'>
  <Router>
    <Routes>
      <Route path="/" element={<PersonListComponentwithNavigation/>}></Route>
      <Route path="/persons" element ={<PersonListComponentwithNavigation/>}></Route>
      <Route path="/add-person/:id" element={<AddPersonComponentwithNavigation/>}></Route>
    </Routes>
  </Router>
  </div>
      

      <FooterComponent/>
      
      
    </div>
  );
}

export default App;
