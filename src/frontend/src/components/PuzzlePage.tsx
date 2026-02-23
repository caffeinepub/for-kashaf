import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PuzzlePageProps {
  onSuccess: () => void;
}

export default function PuzzlePage({ onSuccess }: PuzzlePageProps) {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (answer === '16') {
      setMessage('Correctttt 💜 She is the BESTTTT!');
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setMessage('Nooo sillyyy 😂 Try again!');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">🧩 Solve This Cute Puzzle</h1>
      <div className="puzzle-box inline-block">
        <p className="text-xl mb-6">What is 2 + 3 + 0 + 2 + 3 + 0 + 0 + 6 ?</p>
        <Input
          type="text"
          placeholder="Your Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          className="max-w-xs text-center text-lg mb-4"
        />
        <br />
        <Button onClick={handleSubmit} size="lg">
          Submit
        </Button>
        {message && <p className="text-white text-lg mt-4">{message}</p>}
      </div>
    </div>
  );
}
