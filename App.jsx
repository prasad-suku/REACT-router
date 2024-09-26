import React, { useEffect, useRef, useState } from "react";
import Questions from "./QuizQuestions.json";
import "./index.css";

const App = () => {
  const [currentdata, setdata] = useState(0);
  const [timer, settimer] = useState(15);
  const [showscore, setshowscore] = useState(false);
  const [score, setscore] = useState(0);
  let intervalRef = useRef(null);

  //  TIMER FUNCTIONALY
  useEffect(() => {
    if (timer > 0 && !showscore) {
      intervalRef.current = setInterval(() => {
        settimer((prev) => prev - 1);
      }, 1000);
    } else {
      setshowscore(true);
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer, showscore]);

  // handle check the option that  given by users

  const handlecheck = (selectedoption) => {
    if (selectedoption == Questions[currentdata].answer) {
      // increment the score value
      setscore(score + 1);
    }

    if (currentdata < Questions.length - 1) {
      //  navigate the next question by increment currentdata
      setdata(currentdata + 1);
      settimer(15);
    } else {
      setshowscore(true);
    }
  };

  // when user click Restart button then we can play again in fresh

  let restart = () => {
    setshowscore(false);
    setscore(0);
    setdata(0);
    settimer(15);
  };

  return (
    <>
      <div className="quiz-app">
        {/* showing defaukt question section wheather showscore state is true then show score section */}
        {showscore ? (
          <section className="scoresection">
            <h2>
              Your Score is : {score}/{Questions.length}
            </h2>

            <button onClick={restart}>Restart</button>
          </section>
        ) : (
          <section className="questionsection">
            <h2 style={{ color: "green" }}>Question - {currentdata + 1} </h2>

            {/* questions mapping through json data */}

            <h3 className="question">
              {currentdata + 1} .{Questions[currentdata].question}{" "}
            </h3>

            {/* options here */}

            <div className="options">
              {Questions[currentdata].options.map((option, ind) => (
                <p
                  key={ind}
                  onClick={() => {
                    handlecheck(option);
                  }}
                >
                  {option}
                </p>
              ))}
            </div>

            <div className="timer">
              Time left :<span>{timer}</span>s
            </div>
          </section>
        )}

        {/* <h1>{Questions[0].answer}</h1> */}
      </div>
    </>
  );
};

export default App;
