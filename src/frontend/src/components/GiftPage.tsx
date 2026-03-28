import { useState } from "react";

interface GiftPageProps {
  onComplete: () => void;
}

export default function GiftPage({ onComplete }: GiftPageProps) {
  const [revealed, setRevealed] = useState(false);

  const handleGiftClick = () => {
    if (!revealed) {
      setRevealed(true);
      setTimeout(() => {
        onComplete();
      }, 4000);
    }
  };

  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        🎁 A Mysterious Gift For You
      </h1>
      <p className="text-xl mb-8">Click the gift if you dare 😏💜</p>
      <button
        type="button"
        className="gift-emoji text-8xl cursor-pointer inline-block animate-bounce-gift bg-transparent border-none"
        onClick={handleGiftClick}
        aria-label="Open gift"
      >
        🎁
      </button>
      {revealed && (
        <div className="mt-8 text-lg md:text-xl leading-relaxed animate-fade-in">
          <p className="mb-4">✨ Plot twist ✨</p>
          <p className="mb-2">The gift is not chocolate 🍫</p>
          <p className="mb-2">Not diamonds 💎</p>
          <p className="mb-4">Not money 💸</p>
          <p className="mb-4">
            It's a lifetime free subscription of MY DRAMA 🤭💜
          </p>
          <p>And unlimited hugs (terms & conditions apply 😂)</p>
        </div>
      )}
    </div>
  );
}
