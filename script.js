const questions = [
  {
    question: "What is the closest planet to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
      { text: "Saturn", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "What galaxy is Earth located in?",
    answers: [
      { text: "Andromeda", correct: false },
      { text: "Triangulum", correct: false },
      { text: "Milky Way", correct: true },
      { text: "Whirlpool", correct: false }
    ]
  },
  {
    question: "What is the name of Earth's only natural satellite?",
    answers: [
      { text: "Titan", correct: false },
      { text: "The Moon", correct: true },
      { text: "Europa", correct: false },
      { text: "Phobos", correct: false }
    ]
  },
  {
    question: "Which planet has the most well-known ring system?",
    answers: [
      { text: "Uranus", correct: false },
      { text: "Saturn", correct: true },
      { text: "Neptune", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What star is at the center of our solar system?",
    answers: [
      { text: "Polaris", correct: false },
      { text: "Sirius", correct: false },
      { text: "The Sun", correct: true },
      { text: "Betelgeuse", correct: false }
    ]
  },
  {
    question: "Who was the first person to walk on the Moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Yuri Gagarin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "John Glenn", correct: false }
    ]
  },
  {
    question: "What do we call a large rock that orbits the Sun, smaller than a planet?",
    answers: [
      { text: "Comet", correct: false },
      { text: "Asteroid", correct: true },
      { text: "Meteor", correct: false },
      { text: "Nebula", correct: false }
    ]
  },
  {
    question: "What is the term for a streak of light caused by a small piece of space debris burning up in Earth's atmosphere?",
    answers: [
      { text: "Meteor", correct: true },
      { text: "Asteroid", correct: false },
      { text: "Satellite", correct: false },
      { text: "Comet", correct: false }
    ]
  },
  {
    question: "Which planet is known for having a Great Red Spot?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "What is the name of the space agency of the United States?",
    answers: [
      { text: "ESA", correct: false },
      { text: "NASA", correct: true },
      { text: "Roscosmos", correct: false },
      { text: "JAXA", correct: false }
    ]
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false }
    ]
  },
  {
    question: "What is the coldest planet in our solar system?",
    answers: [
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: true },
      { text: "Pluto", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What is the name of the first artificial satellite launched into space?",
    answers: [
      { text: "Sputnik 1", correct: true },
      { text: "Voyager 1", correct: false },
      { text: "Apollo 11", correct: false },
      { text: "Explorer 1", correct: false }
    ]
  },
  {
    question: "Which planet is closest in size to Earth?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Mercury", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "What do astronauts wear to survive outside a spacecraft?",
    answers: [
      { text: "A wetsuit", correct: false },
      { text: "A spacesuit", correct: true },
      { text: "A helmet only", correct: false },
      { text: "A pressure vest", correct: false }
    ]
  },
  {
    question: "What is the name of our galaxy's neighboring galaxy that is on a collision course with it?",
    answers: [
      { text: "Triangulum", correct: false },
      { text: "Andromeda", correct: true },
      { text: "Sombrero", correct: false },
      { text: "Pinwheel", correct: false }
    ]
  },
  {
    question: "What causes a solar eclipse?",
    answers: [
      { text: "The Earth passing between the Sun and Moon", correct: false },
      { text: "The Moon passing between the Sun and Earth", correct: true },
      { text: "The Sun passing behind the Moon", correct: false },
      { text: "A planet passing in front of the Sun", correct: false }
    ]
  },
  {
    question: "What is the name of the phenomenon where a star runs out of fuel and collapses violently?",
    answers: [
      { text: "Black hole", correct: false },
      { text: "Nebula", correct: false },
      { text: "Supernova", correct: true },
      { text: "Solar flare", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const gridButtons = document.querySelectorAll(".grid-btn");

let currentQuestionIndex = 0;
let score = 0;

// Stores the answer selected for each question.
// null means the question has not been answered yet.
let userAnswers = new Array(questions.length).fill(null);


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(questions.length).fill(null);

    nextButton.innerHTML = "Next";

    // Reset all grid buttons
    gridButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
    });

    showQuestion();
}


function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, answerIndex) => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");

        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });


    // If this question has already been answered,
    // restore its previous answer and result.
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedAnswerIndex = userAnswers[currentQuestionIndex];

        const buttons = answerButton.children;
        const selectedButton = buttons[selectedAnswerIndex];

        if (questions[currentQuestionIndex].answers[selectedAnswerIndex].correct) {
            selectedButton.classList.add("correct");
        } else {
            selectedButton.classList.add("incorrect");
        }

        // Show the correct answer
        Array.from(buttons).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }

            button.disabled = true;
        });

        nextButton.style.display = "inline-block";
    }

    // Previous is available whenever we're not on question 1.
    if (currentQuestionIndex > 0) {
        prevButton.style.display = "inline-block";
    }

    // Update the grid button for the current question.
    updateGridButton(currentQuestionIndex);
}


function resetState() {
    nextButton.style.display = "none";
    prevButton.style.display = "none";

    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;

    // Find which answer button was selected.
    const selectedAnswerIndex =
        Array.from(answerButton.children).indexOf(selectedBtn);

    const isCorrect =
        questions[currentQuestionIndex].answers[selectedAnswerIndex].correct;


    // Save the user's answer for this question.
    userAnswers[currentQuestionIndex] = selectedAnswerIndex;


    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }


    // Show the correct answer and disable all answers.
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });


    // Update the corresponding grid button.
    updateGridButton(currentQuestionIndex);


    nextButton.style.display = "inline-block";

    if (currentQuestionIndex > 0) {
        prevButton.style.display = "inline-block";
    }
}


function updateGridButton(index) {
    const gridButton = gridButtons[index];

    if (!gridButton) {
        return;
    }

    // Remove any previous result class.
    gridButton.classList.remove("correct", "incorrect");


    // If the question hasn't been answered, leave it unchanged.
    if (userAnswers[index] === null) {
        return;
    }


    const selectedAnswerIndex = userAnswers[index];

    const isCorrect =
        questions[index].answers[selectedAnswerIndex].correct;


    if (isCorrect) {
        gridButton.classList.add("correct");
    } else {
        gridButton.classList.add("incorrect");
    }
}


function calculateScore() {
    score = 0;

    userAnswers.forEach((selectedAnswerIndex, questionIndex) => {
        // Ignore unanswered questions.
        if (selectedAnswerIndex === null) {
            return;
        }

        if (questions[questionIndex].answers[selectedAnswerIndex].correct) {
            score++;
        }
    });

    return score;
}


function showScore() {
    calculateScore();

    resetState();

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


function handlePrevButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}


// NEXT BUTTON
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


// PREVIOUS BUTTON
prevButton.addEventListener("click", handlePrevButton);


// GRID BUTTONS
gridButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        currentQuestionIndex = index;
        showQuestion();
    });
});


startQuiz();