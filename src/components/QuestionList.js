import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion, updateCorrectIndex }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionItem
              key={question.id}
              deleteQuestion={deleteQuestion}
              updateCorrectIndex={updateCorrectIndex}
              question={question}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
