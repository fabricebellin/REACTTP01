import './App.css';
import MonHeader from './MonHeader';
import MonBody from './MonBody';
import MonFooter from './MonFooter';

function App() {
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <MonHeader />
      </div>
      <div className=" justify-center bg-gray-100" style={{ height: 'calc(100vh - 110px)' }}>
        <MonBody />
      </div>
      <footer className="flex flex-col text-center">
        <MonFooter nom="Bueno-Barthe" prenom="Gaël" session="M05-2024/2025" />
      </footer>
    </div>
  );
}

export default App;