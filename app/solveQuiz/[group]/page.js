"use client";
import { useState, useEffect } from "react";
import { getMockQuiz } from "@/lib/mockQuizGenerator";
import { useParams } from "next/navigation";

export default function QuizPage() {
  const params = useParams();
  const group = params.group;

  const [level, setLevel] = useState("easy");
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 10;
  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  useEffect(() => {
    const questions = getMockQuiz(group, level);
    setQuiz(questions);
    setSelectedAnswers({});
    setCurrentPage(0);
  }, [group, level]);

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = quiz.slice(startIndex, endIndex);
  return (
    <>
      <head>
        <title>Quiz for {group} | Programmers Discussion Hub</title>
        <meta
          name="description"
          content={`Practice ${group} programming quizzes`}
        />
      </head>
      <div className="bg-white text-black dark:bg-[#2d2f3a] dark:text-white">
        <div className="  p-4 text-md xl:text-lg">
          <h1 className="text-xl md:text-2xl text-center font-bold mb-4">
            Quiz for {group}
          </h1>

          <div className="mb-4 xl:mx-80 lg:mx-72 md:mx-36 mx-10">
            <label htmlFor="level" className="mr-2 font-semibold">
              Select Level:
            </label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="easy">Easy</option>
              <option value="advance">Advance</option>
            </select>
          </div>

          {currentQuestions.map((q, idx) => {
            const globalIdx = startIndex + idx;
            return (
              <div
                key={globalIdx}
                className="mb-4 xl:mx-80 lg:mx-72 md:mx-36 mx-3 p-4 border rounded shadow hover:shadow-lg"
              >
                <p className="font-semibold mx-3">
                  {startIndex + idx + 1}. {q.question}
                </p>
                <ul className="list-disc mt-2">
                  {q.options.map((opt, i) => {
                    const isSelected = selectedAnswers[globalIdx] === opt;
                    return (
                      <div key={i}>
                        <label
                          className={`w-full dark:bg-black flex items-center space-x-2 px-5 py-2 mb-1 cursor-pointer rounded border transition dark:accent-white accent-[#546276]
      ${isSelected[idx] === opt ? " bg-[#e2e8f0]" : "bg-[#e2e8f0]"}
      hover:bg-[#cfdae8]`}
                        >
                          <input
                            type="radio"
                            name={`question-${globalIdx}`}
                            value={opt}
                            checked={isSelected}
                            onChange={() => handleOptionChange(globalIdx, opt)}
                            className=" form-radio mr-2 h-4 w-5"
                          />
                          {opt}
                        </label>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {(currentPage + 1) * questionsPerPage < quiz.length ? (
            <>
              {incorrectAnswers.length > 0 && (
                <div className="mb-4 text-red-900 font-medium">
                  <p>if any mistakes correct them to move next</p>
                  {incorrectAnswers.map((i) => (
                    <p key={i}>
                      {i + 1}: Correct Answer is: {quiz[i].correctAnswer}
                    </p>
                  ))}
                </div>
              )}

              <div className="text-center mb-2">
                <button
                  onClick={() => {
                    const wrong = currentQuestions
                      .map((q, idx) => {
                        const globalIdx = startIndex + idx;
                        return selectedAnswers[globalIdx] !== q.correctAnswer
                          ? globalIdx
                          : null;
                      })
                      .filter((i) => i !== null);
                    if (wrong.length > 0) {
                      setIncorrectAnswers(wrong);
                    } else {
                      setIncorrectAnswers([]);
                      setCurrentPage((prev) => prev + 1);
                    }
                  }}
                  className={` px-4 py-2 rounded shadow  ${
                    currentQuestions.every(
                      (_, idx) => selectedAnswers[startIndex + idx],
                    )
                      ? "bg-[#cfdae8] text-black hover:text-white hover:bg-[#546276]"
                      : "bg-gray-200 text-black cursor-not-allowed"
                  }`}
                  disabled={
                    !currentQuestions.every(
                      (_, idx) => selectedAnswers[startIndex + idx],
                    )
                  }
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            quiz.length > 0 && (
              <p className="mt-4 font-bold text-green-600">
                You have completed all questions!
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
}
