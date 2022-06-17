import { useState } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ProgressBar } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
const questions = [
  {
    questionText: 'Qual o idiomafalado no Brasil?',
    answerOptions: [
      { answerText: 'Português', isCorrect: true },
      { answerText: 'Inglês', isCorrect: false },
      { answerText: 'Francês', isCorrect: false },
      { answerText: 'Alemão', isCorrect: false },
    ],
  },
  {
    questionText:
      'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
    answerOptions: [
      { answerText: 'Japão e Serra Leoa', isCorrect: true },
      { answerText: 'Austrália e Afeganistã', isCorrect: false },
      { answerText: 'Itália e Chade', isCorrect: false },
      { answerText: 'Brasil e Congo', isCorrect: false },
    ],
  },
  {
    questionText: 'Qual empresa criou o Iphone?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'Como aprender a programar?',
    answerOptions: [
      { answerText: 'Praticando o que se aprende', isCorrect: true },
      { answerText: 'Vendo vídeo', isCorrect: false },
      { answerText: 'Lendo', isCorrect: false },
      { answerText: 'Dormindo', isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [noOfRight, setNoOfRight] = useState(0);
  const [noOfWrong, setNoOfWrong] = useState(0);
  const [points, setPoints] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setNoOfRight(noOfRight + 1);
      setPoints(points + 5);
    } else {
      setNoOfWrong(noOfWrong + 1);
      setPoints(points - 4);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      <Container>
        <div className="upper-div">
          <Row>
            <h6>Points</h6>
          </Row>
          <Row>
            <h6>{points}</h6>
          </Row>
          <Row>
            <Col>
              <p>Right Ans</p>
              <ProgressBar variant="success" now={noOfRight * 25} />
            </Col>
            <Col>
              <p>Wrong Ans</p>
              <ProgressBar variant="danger" now={noOfWrong * 25} />
            </Col>
          </Row>
        </div>
        <div>
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      onClick={() => handleAnswer(answerOption.isCorrect)}
                      key={index}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
