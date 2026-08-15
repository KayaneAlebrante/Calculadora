import './App.css'
import Calculator from './components/Calculator';
import OperationHistory from './components/OperationHistory';
import { CalculatorProvider } from './context/CalculatorContext';

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
      <CalculatorProvider>
        <Calculator/>
        <OperationHistory/>
      </CalculatorProvider>
    </main>
  );
}

export default App
