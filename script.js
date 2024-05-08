const questions = [
    {
      question: "Question 1: How do you usually prefer to spend your free time?",
      answers: [
        { text: "Reading a book", value: "you are a good listner ad observer." },
        { text: "Socializing with friends", value: "you have extrovert , talkative and social personality and needs attention." },
        { text: "Exploring new places", value: "you like do to new innovations and you can think yourself as a independent person ."},
        { text: "Doing something creative", value: "you are very imaginative, and creative person" }
        
      ]
    },
    {
      question: "Question 2: What do you find most satisfying?",
      answers: [
        { text: "Achieving a goal        ", value: "you are very strong willed, Ambitious person."},
        { text: "Making others happy", value: "you are helpful, understanding and modest person." },
        { text: "Learning something new", value: " , Adapting new changs are easy and inspiring for you.you do things with full vitality." },
        { text: "Expressing yourself", value: "you are logical and reserved person who likes to being systematic. " }
      ]
    },
    {
      question: "Question 3: How you describe your perfect day?",
      answers: [
        { text: "when you make a great achievement", value: "you are little agressive and goal oriented person you like to being a Pioneer."},
        { text: "a day where you found more friends to appreciate you", value: "you are very charming and attractive person.you enjoy when people arrounds you appreciate you."},
        { text: "simple day where you help more peoples", value: "you are very supportive person . you first think for others rather than thinking about you ."},
        { text:"an organized and well planned day", value: "you are very analytical person. you like every thing in a proper place and well planned." }
      ]
    },
    {
      question: "Ouestion 4: What are your hobbies?",
      answers: [
        { text: "adventoures or competative hobbies ", value: "you are very compitative person. you always want to be first we can also say that you are performance oriented person ."},
        { text: "creative hobbies", value: "you like to spend your times in hobbies which leads to imaginations and enthusiastic." },
        { text: "reading or listner hobbies", value: " you are very considerate , thoughtful and persistent person ." },
        { text: "brain building exercise", value: "you are very meticulous, questioning person and person who seeks fact ."}
      ]
    },
    {
      question: "Question 5: How is your attitude towards your goal?",
      answers: [
        { text: " get it done by any means ", value: "you are very much goal oriented person you like to push yourself above your limits to complete the goal."  },
        { text: "very optimistic and have imaginative ideas", value: "you are  communicative person who likes to explore new ideas you don't think whether they are practical or not . " },
        { text: "  ok in both factor achieved or not", value: "you are very composed person, loyal person. you like your comfort zone and rather you wait to achieve your goal than fight with ohers ." },
        { text: "well planned and conventional", value: "you are very well planned person who prefers to complete small goals first . you have everything planned which step to take when ."  }
      ]
    },
    {
      question: "Question 6: How you interact with people? ",
      answers: [
        { text: "you like to boss around them ", value: "you are very dominating and controlling person. you want everyone to follow your lead ." },
        { text:"good and interacting with people", value: "you are very charming and attractive among people. you know how to stike communication and how to grab everyone's attention. " },
        { text: "you like to help people", value: "you are very reliable, loyal and modest person.you conceals your feelings ." },
        { text: "suspicious of people around you", value: "you are very suspicious person or a introvert person. Even ehen someone is helping you , you think of it as what's his/her motive behind it." }
      ]
    },
    {
      question: "Question 7: How you deal with failure?",
      answers: [
        { text: "you will become more strong  ", value: "failure cannot stop you. you belive in nothing is impossible.The impossible just takes little longer." },
        { text: "learn from your failure ", value: "you are very sensitive person . But you will learn from evry failure and make it possible." },
        { text: "small failure can cause you to doubt your overall abilities", value: "you are  very self - controlled person but you are an overthinker . " },
        { text: "research on your failure and found fact behinf it or cause behind it ", value: "you are very quality oriented person we can think of you as Perfectionist ." }
      ]
    },
    // Add more questions here as needed
  ];
  
  let currentQuestionIndex = 0;
  let answers = [];
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answers');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const resultHeading = document.getElementById('result-heading');
  const resultDescription = document.getElementById('result-description');
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = `
        <img src="${answer.imageUrl}" alt="${answer.text}"  class="answer-image">
        <span>${answer.text}</span>
        
      `;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer.value));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(answerValue) {
    answers.push(answerValue);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const personalityType = calculatePersonalityType(answers);
    resultHeading.innerText = `Your Personality Result: ${personalityType}`;
    resultDescription.innerText = getPersonalityDescription(personalityType);
    resultContainer.style.display = 'block';
    nextButton.style.display = 'none';
  }
  
  function calculatePersonalityType(answers) {
    // Simple logic to calculate personality type, you can replace it with your own algorithm
    // For demonstration purposes, let's just concatenate all the answers
    return answers.join('');
  }
  
  function getPersonalityDescription(personalityType) {
    // Replace with your descriptions based on personality types
    switch (personalityType) {
      case 'ABCD':
        return "You're a well-rounded individual who enjoys a balance of various activities.";
      // Add more cases for other personality types
      default:
        return "Your personality type description goes here.";
    }
  }
  
  nextButton.addEventListener('click', () => {
    showQuestion(questions[currentQuestionIndex]);
  });
  
  
  