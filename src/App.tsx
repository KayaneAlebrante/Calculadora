import './App.css'
import Calculator from './components/Calculator';
import OperationHistory from './components/OperationHistory';

function App() {
  return (
    <main className={`
      py-28 px-4 sm:px-10
      flex flex-col sm:flex-row
      intems-center sm:items-stretch
      gap-2
      justify-center
      bg-[#807ece]
      min-h-screen
      `}>
      <Calculator/>
      <OperationHistory/>
    </main>
  );
}

export default App
