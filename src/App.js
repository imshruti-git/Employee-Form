
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppTable from './components/AppTable';
import TopBar from './components/TopBar';
import useAppForm from './components/AppForm';

function App() {
 const { records, deleteEntry, updateEntry, display} = useAppForm()

  return (
    <div className="App">
      <TopBar />
      <AppTable {...{records, deleteEntry, updateEntry, display}}/>
    </div>
  );
}

export default App;
