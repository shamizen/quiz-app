import { useContext } from 'react';
import { DataContext } from '../App';
import QuestionData from '../data/QuestionData';

const Score = () => {
  const { score, setScore, setAppState } = useContext(DataContext);

  const restartApp = () => {
    setScore(0);
    setAppState('menu');
  };

  return (
    <div className='score'>
      <h2>YOUR SCORE</h2>
      <h2>
        {`${score}`} / {`${QuestionData.length}`}
      </h2>

      <button onClick={restartApp}>Try Again</button>
    </div>
  );
};

export default Score;
