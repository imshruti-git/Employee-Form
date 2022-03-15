
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppTable from './components/AppTable';
import TopBar from './components/TopBar';
import useAppForm from './components/AppForm';

function App() {
 const { records, setRecords, deleteEntry } = useAppForm()

  return (
    <div className="App">
      <TopBar />
      
      <AppTable {...{records, setRecords, deleteEntry }}/>
    </div>
  );
}

export default App;
