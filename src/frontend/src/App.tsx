import { useState } from 'react';
import PasswordPage from './components/PasswordPage';
import PuzzlePage from './components/PuzzlePage';
import GiftPage from './components/GiftPage';
import BirthdayPage from './components/BirthdayPage';
import FinalMessagePage from './components/FinalMessagePage';

type PageType = 'password' | 'puzzle' | 'gift' | 'birthday' | 'final';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('password');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      {currentPage === 'password' && (
        <PasswordPage onSuccess={() => setCurrentPage('puzzle')} />
      )}
      {currentPage === 'puzzle' && (
        <PuzzlePage onSuccess={() => setCurrentPage('gift')} />
      )}
      {currentPage === 'gift' && (
        <GiftPage onComplete={() => setCurrentPage('birthday')} />
      )}
      {currentPage === 'birthday' && (
        <BirthdayPage onNext={() => setCurrentPage('final')} />
      )}
      {currentPage === 'final' && <FinalMessagePage />}
    </div>
  );
}

export default App;
