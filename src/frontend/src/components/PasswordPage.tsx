import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PasswordPageProps {
  onSuccess: () => void;
}

export default function PasswordPage({ onSuccess }: PasswordPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password === '23023006') {
      setError('');
      onSuccess();
    } else {
      setError('Wrong code 😭 Try again!');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">🔐 Enter Secret Code</h1>
      <p className="text-xl mb-8">Only Kashaf can enter 👀💜</p>
      <div className="flex flex-col items-center gap-4">
        <Input
          type="password"
          placeholder="Enter Code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          className="max-w-xs text-center text-lg"
        />
        <Button onClick={handleSubmit} size="lg">
          Unlock
        </Button>
        {error && <p className="text-white text-lg mt-2">{error}</p>}
      </div>
    </div>
  );
}
