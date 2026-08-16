import './App.css'
import React from 'react';
import Calculator from './components/Calculator';
import OperationHistory from './components/OperationHistory';
import { CalculatorProvider } from './context/CalculatorContext';
import ThemeToggle from './components/ThemeToggle';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}

      <main className={`
      py-28 px-4 sm:px-10
      flex flex-col sm:flex-row
      items-center sm:items-stretch
      gap-4
      justify-center
      bg-[var(--background)]
      min-h-screen
      transition-colors duration-300
    `}>
        <ThemeToggle />
        <CalculatorProvider>
          <Calculator />
          <OperationHistory />
        </CalculatorProvider>
      </main>
      );
    </>
  );
}

      export default App;