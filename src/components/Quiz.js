import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import QuestionData from '../data/QuestionData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectChoice, setSelectChoice] = useState('');
  const { score, setScore, setAppState } = useContext(DataContext);

  useEffect(() => {
    checkAnswer();
    // eslint-disable-next-line
  }, [selectChoice]);

  const checkAnswer = () => {
    if (selectChoice !== '') {
      if (selectChoice === QuestionData[currentQuestion].answer) {
        setScore(score + 1);
      }
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    setSelectChoice('');
    if (currentQuestion + 1 < QuestionData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAppState('score');
    }
  };

  return (
    <div className='quiz'>
      <h2>{QuestionData[currentQuestion].question}</h2>
      <div className='choices'>
        <button onClick={() => setSelectChoice('A')}>{QuestionData[currentQuestion].A}</button>
        <button onClick={() => setSelectChoice('B')}>{QuestionData[currentQuestion].B}</button>
        <button onClick={() => setSelectChoice('C')}>{QuestionData[currentQuestion].C}</button>
        <button onClick={() => setSelectChoice('D')}>{QuestionData[currentQuestion].D}</button>
      </div>
      <p>{`${currentQuestion + 1} / ${QuestionData.length}`}</p>
    </div>
  );
};

export default Quiz;
