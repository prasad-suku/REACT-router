import React, { useEffect, useRef, useState } from "react";
import Question from "./QuizQuestions.json";
import "./index.css";
const Clonequiz = () => {
  // state variables
  const [currentdata, setcurrentdata] = useState(0);
  let [score, setscore] = useState(0);
  const [scoreSection, setscoresection] = useState(false);
  const [timer, settimer] = useState(15);
  let interval = useRef(null);
  //    useeffect for setting timer
  useEffect(() => {
    if (timer > 0 && !scoreSection) {
      interval.current = setInterval(() => {
        settimer((prev) => prev - 1);
      }, 1000);
    } else {
      setscoresection(true);
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [timer, scoreSection]);

  //   checking the options based on answer

  let checkoption = (selectedoption) => {
    if (selectedoption == Question[currentdata].answer) {
      // increment the score value
      //   setscore(score + 1);
      setscore(score + 1);
    }

    // redirect to next question
    if (currentdata < Question.length - 1) {
      setcurrentdata(currentdata + 1);
      settimer(15);
    } else {
      setscoresection(true);
    }
  };

  //   restart the quiz
  let restart = () => {
    setscoresection(false);
    setcurrentdata(0);
    settimer(15);
  };

  return (
    <div>
      <div className="quiz-app">
        {scoreSection ? (
          <div className="score-section">
            <h2>Score section</h2>
            <p>
              Your score is <span> {score}/10</span>
            </p>
            <button onClick={restart}>Restart</button>
          </div>
        ) : (
          <div className="questionsection">
            <div className="question">
              <h2>Question - {currentdata + 1}</h2>
              <p>{Question[currentdata].question}</p>
            </div>

            <div className="option">
              {Question[currentdata].options.map((option, i) => (
                <p
                  key={i}
                  onClick={() => {
                    checkoption(option);
                  }}
                >
                  {option}
                </p>
              ))}
            </div>

            <p className="timer">
              Time left :<span>{timer}s</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clonequiz;
