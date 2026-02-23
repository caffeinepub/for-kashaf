import { Button } from '@/components/ui/button';

interface BirthdayPageProps {
  onNext: () => void;
}

export default function BirthdayPage({ onNext }: BirthdayPageProps) {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">🎉 HAPPY BIRTHDAY KASHAF 🎉</h1>
      <div className="space-y-4 mb-8 text-xl md:text-2xl">
        <p>You are the best person in the world 💜</p>
        <p>I love you soooo much 🥺</p>
        <p>From Shamaaim 💕</p>
      </div>
      <Button onClick={onNext} size="lg">
        Next Surprise
      </Button>
    </div>
  );
}
