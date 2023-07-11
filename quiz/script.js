const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Mercury"],
      answer: "Mars"
    },
    {
      question :" 2 + 2 " ,
      options : [ "1" , "0" , "4" , "-4"],
      answer : "4"
    },
    {
      question :"Guess : My Favourite IPL Team ?" ,
      options : [ "MI" , "CSK" , "GT" , "RCB"],
      answer : "RCB"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const scoreElement = document.getElementById("score");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
  
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", checkAnswer);
    });
  }
  
  function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = quizData[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.answer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    submitButton.style.display = "none";
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}!`;
  }
  
  showQuestion();
  