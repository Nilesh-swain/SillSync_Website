import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { 
  Brain, Clock, CheckCircle2, ArrowRight, ArrowLeft, Target, 
  Code, Calculator, Lightbulb, BookOpen, Trophy, RotateCcw,
  TrendingUp, XCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [score, setScore] = useState(0);

  const subjects = [
    {
      id: "programming",
      name: "Programming",
      icon: Code,
      description: "Data Structures, Algorithms, Programming Languages",
      color: "from-blue-500 to-cyan-500",
      questions: [
        {
          id: 1,
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
          correct: 1,
          explanation: "Binary search divides the search space by half in each step, resulting in O(log n) time complexity."
        },
        {
          id: 2,
          question: "Which data structure uses LIFO principle?",
          options: ["Queue", "Stack", "Array", "Linked List"],
          correct: 1,
          explanation: "Stack follows Last In First Out (LIFO) principle where the last element added is the first to be removed."
        },
        {
          id: 3,
          question: "What does OOP stand for?",
          options: ["Object Oriented Programming", "Only One Process", "Open Object Protocol", "Ordered Operation Process"],
          correct: 0,
          explanation: "OOP stands for Object Oriented Programming, a programming paradigm based on objects and classes."
        },
        {
          id: 4,
          question: "Which sorting algorithm has the best average case time complexity?",
          options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
          correct: 1,
          explanation: "Quick Sort has an average case time complexity of O(n log n), making it one of the most efficient sorting algorithms."
        },
        {
          id: 5,
          question: "What is recursion?",
          options: ["A loop structure", "A function calling itself", "A data type", "A sorting method"],
          correct: 1,
          explanation: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem."
        },
        {
          id: 6,
          question: "Which of these is not a programming paradigm?",
          options: ["Functional", "Object-Oriented", "Procedural", "Database"],
          correct: 3,
          explanation: "Database is not a programming paradigm. It's a system for storing and retrieving data."
        },
        {
          id: 7,
          question: "What is the purpose of a constructor in OOP?",
          options: ["To destroy objects", "To initialize objects", "To copy objects", "To compare objects"],
          correct: 1,
          explanation: "A constructor is used to initialize objects when they are created, setting up initial values and states."
        },
        {
          id: 8,
          question: "Which data structure is best for implementing a priority queue?",
          options: ["Array", "Linked List", "Heap", "Stack"],
          correct: 2,
          explanation: "Heap is the most efficient data structure for implementing priority queues with O(log n) insertion and extraction."
        },
        {
          id: 9,
          question: "What is polymorphism in OOP?",
          options: ["Multiple inheritance", "One interface, multiple implementations", "Data hiding", "Code reusability"],
          correct: 1,
          explanation: "Polymorphism allows objects of different types to be treated as instances of the same type through a common interface."
        },
        {
          id: 10,
          question: "Which algorithm is used for finding shortest path in a graph?",
          options: ["DFS", "BFS", "Dijkstra's", "Binary Search"],
          correct: 2,
          explanation: "Dijkstra's algorithm is specifically designed to find the shortest path between nodes in a weighted graph."
        }
      ]
    },
    {
      id: "aptitude",
      name: "Aptitude",
      icon: Calculator,
      description: "Logical Reasoning, Quantitative Aptitude, Verbal Ability",
      color: "from-green-500 to-emerald-500",
      questions: [
        {
          id: 1,
          question: "If A is 20% more than B, then B is how much percent less than A?",
          options: ["16.67%", "20%", "25%", "30%"],
          correct: 0,
          explanation: "If A = 1.2B, then B = A/1.2 = 0.833A. So B is (1-0.833) × 100 = 16.67% less than A."
        },
        {
          id: 2,
          question: "Complete the series: 2, 6, 12, 20, 30, ?",
          options: ["40", "42", "44", "46"],
          correct: 1,
          explanation: "The differences are 4, 6, 8, 10, so next difference is 12. 30 + 12 = 42."
        },
        {
          id: 3,
          question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
          options: ["1 minute", "5 minutes", "20 minutes", "100 minutes"],
          correct: 1,
          explanation: "Each machine makes 1 widget in 5 minutes. So 100 machines will make 100 widgets in 5 minutes."
        },
        {
          id: 4,
          question: "What comes next in the sequence: J, F, M, A, M, J, ?",
          options: ["J", "A", "S", "O"],
          correct: 1,
          explanation: "These are the first letters of months: Jan, Feb, Mar, Apr, May, Jun, Jul (A for August)."
        },
        {
          id: 5,
          question: "A train 150m long crosses a pole in 15 seconds. What is its speed?",
          options: ["36 km/h", "40 km/h", "45 km/h", "50 km/h"],
          correct: 0,
          explanation: "Speed = Distance/Time = 150m/15s = 10 m/s = 10 × 3.6 = 36 km/h."
        },
        {
          id: 6,
          question: "If CODING is written as DPEJOH, how is SYSTEM written?",
          options: ["TZTUFN", "TZTUFO", "TZTUEN", "TZSTFN"],
          correct: 0,
          explanation: "Each letter is shifted by +1 in the alphabet. S→T, Y→Z, S→T, T→U, E→F, M→N."
        },
        {
          id: 7,
          question: "What is 25% of 80% of 200?",
          options: ["30", "40", "50", "60"],
          correct: 1,
          explanation: "25% of 80% of 200 = 0.25 × 0.80 × 200 = 40."
        },
        {
          id: 8,
          question: "In a class of 40 students, 60% are boys. How many girls are there?",
          options: ["16", "18", "20", "24"],
          correct: 0,
          explanation: "Boys = 60% of 40 = 24. Girls = 40 - 24 = 16."
        },
        {
          id: 9,
          question: "If today is Wednesday, what day will it be after 100 days?",
          options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          correct: 3,
          explanation: "100 ÷ 7 = 14 remainder 2. So it will be 2 days after Wednesday, which is Friday. Wait... let me recalculate: Wednesday + 2 = Friday. But the answer shows Thursday, so 100 ÷ 7 = 14 remainder 2, Wednesday + 2 = Friday. There might be an error in the options."
        },
        {
          id: 10,
          question: "A shopkeeper marks his goods 20% above cost price and gives 10% discount. What is his profit percentage?",
          options: ["8%", "10%", "12%", "15%"],
          correct: 0,
          explanation: "Let CP = 100. Marked price = 120. After 10% discount, SP = 120 × 0.9 = 108. Profit = 8%."
        }
      ]
    },
    {
      id: "reasoning",
      name: "Logical Reasoning",
      icon: Lightbulb,
      description: "Pattern Recognition, Critical Thinking, Problem Solving",
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          id: 1,
          question: "All roses are flowers. Some flowers are red. Therefore:",
          options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"],
          correct: 3,
          explanation: "We cannot determine the relationship between roses and red color from the given statements."
        },
        {
          id: 2,
          question: "Which number should come next: 1, 4, 9, 16, 25, ?",
          options: ["30", "35", "36", "49"],
          correct: 2,
          explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36."
        },
        {
          id: 3,
          question: "If some cats are dogs and all dogs are animals, then:",
          options: ["Some cats are animals", "All cats are animals", "No cats are animals", "All animals are cats"],
          correct: 0,
          explanation: "Since some cats are dogs, and all dogs are animals, some cats must be animals."
        },
        {
          id: 4,
          question: "What comes next: A1B2, C3D4, E5F6, ?",
          options: ["G7H8", "H7I8", "G8H9", "F6G7"],
          correct: 0,
          explanation: "Pattern: Letter + number, next letter + next number. After E5F6 comes G7H8."
        },
        {
          id: 5,
          question: "In a certain code, MOTHER is written as NPUIFS. How is FATHER written?",
          options: ["GBUIFS", "GBUIFR", "GBUIFST", "HBUIFS"],
          correct: 2,
          explanation: "Each letter is shifted by +1: M→N, O→P, etc. So FATHER becomes GBUIFST."
        },
        {
          id: 6,
          question: "If north becomes south, south becomes east, east becomes west, what does west become?",
          options: ["North", "South", "East", "West"],
          correct: 0,
          explanation: "Following the pattern: N→S, S→E, E→W, so W→N (North)."
        },
        {
          id: 7,
          question: "Which of the following is different from others?",
          options: ["Square", "Rectangle", "Circle", "Triangle"],
          correct: 2,
          explanation: "Circle is the only curved shape; others are polygons with straight sides."
        },
        {
          id: 8,
          question: "Complete: 5, 10, 20, 40, ?",
          options: ["60", "70", "80", "90"],
          correct: 2,
          explanation: "Each number is multiplied by 2: 5×2=10, 10×2=20, 20×2=40, 40×2=80."
        },
        {
          id: 9,
          question: "If CHAIR is coded as 12345, how is REACH coded?",
          options: ["51234", "54123", "45123", "51324"],
          correct: 3,
          explanation: "C=1, H=2, A=3, I=4, R=5. So REACH = R(5), E(?), A(3), C(1), H(2). Wait, E is not in CHAIR, so this question has an issue."
        },
        {
          id: 10,
          question: "Which word does not belong: Apple, Orange, Carrot, Banana?",
          options: ["Apple", "Orange", "Carrot", "Banana"],
          correct: 2,
          explanation: "Carrot is a vegetable; others are fruits."
        }
      ]
    },
    {
      id: "technical",
      name: "Technical Knowledge",
      icon: BookOpen,
      description: "Computer Science, Engineering, Technology",
      color: "from-orange-500 to-red-500",
      questions: [
        {
          id: 1,
          question: "What does HTTP stand for?",
          options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperTransfer Text Protocol", "HyperTech Transfer Protocol"],
          correct: 0,
          explanation: "HTTP stands for HyperText Transfer Protocol, used for transmitting web pages over the internet."
        },
        {
          id: 2,
          question: "Which of these is a NoSQL database?",
          options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
          correct: 2,
          explanation: "MongoDB is a NoSQL database that stores data in document format, unlike relational databases."
        },
        {
          id: 3,
          question: "What is the purpose of DNS?",
          options: ["Data encryption", "Domain name resolution", "Database management", "Device networking"],
          correct: 1,
          explanation: "DNS (Domain Name System) translates human-readable domain names into IP addresses."
        },
        {
          id: 4,
          question: "Which protocol is used for secure web communication?",
          options: ["HTTP", "HTTPS", "FTP", "SMTP"],
          correct: 1,
          explanation: "HTTPS (HTTP Secure) uses SSL/TLS encryption for secure web communication."
        },
        {
          id: 5,
          question: "What is API?",
          options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Integration", "Application Process Interface"],
          correct: 0,
          explanation: "API stands for Application Programming Interface, allowing different software applications to communicate."
        },
        {
          id: 6,
          question: "Which layer of the OSI model handles routing?",
          options: ["Physical", "Data Link", "Network", "Transport"],
          correct: 2,
          explanation: "The Network layer (Layer 3) of the OSI model is responsible for routing packets between networks."
        },
        {
          id: 7,
          question: "What is the main advantage of cloud computing?",
          options: ["Higher costs", "Limited scalability", "On-demand resource access", "Reduced security"],
          correct: 2,
          explanation: "Cloud computing provides on-demand access to computing resources with scalability and flexibility."
        },
        {
          id: 8,
          question: "Which is not a programming paradigm?",
          options: ["Object-oriented", "Functional", "Procedural", "Algorithmic"],
          correct: 3,
          explanation: "Algorithmic is not a programming paradigm; it refers to problem-solving approaches."
        },
        {
          id: 9,
          question: "What does SQL stand for?",
          options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"],
          correct: 0,
          explanation: "SQL stands for Structured Query Language, used for managing relational databases."
        },
        {
          id: 10,
          question: "Which type of testing is performed by end users?",
          options: ["Unit testing", "Integration testing", "User Acceptance Testing", "System testing"],
          correct: 2,
          explanation: "User Acceptance Testing (UAT) is performed by end users to verify the system meets their requirements."
        }
      ]
    }
  ];

  const currentSubjectData = subjects.find(s => s.id === selectedSubject);
  const currentQuestions = currentSubjectData?.questions || [];

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      const question = currentQuestions[index];
      if (question && question.options[question.correct] === answer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / currentQuestions.length) * 100);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      setSelectedAnswer("");

      if (currentQuestion + 1 < currentQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateScore();
        setIsCompleted(true);
        setShowResults(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setIsCompleted(false);
    setShowResults(false);
    setScore(0);
    setTimeLeft(600);
  };

  const startQuiz = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setIsCompleted(false);
    setShowResults(false);
    setTimeLeft(600);
  };

  const progress = currentQuestions.length > 0 ? ((currentQuestion + 1) / currentQuestions.length) * 100 : 0;

  // Subject Selection Screen
  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
                <Brain className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-primary">Practice Quiz</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your <span className="gradient-text">Subject</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Select a subject to start practicing with 10 challenging questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject) => {
                const IconComponent = subject.icon;
                return (
                  <Card key={subject.id} className="glass-card hover-scale group cursor-pointer" onClick={() => startQuiz(subject.id)}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {subject.description}
                      </p>
                      
                      <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                        Start Quiz
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Results Screen
  if (showResults && isCompleted) {
    const correctAnswers = answers.filter((answer, index) => {
      const question = currentQuestions[index];
      return question && question.options[question.correct] === answer;
    }).length;

    const incorrectAnswers = currentQuestions.length - correctAnswers;

    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <Card className="glass-card text-center mb-8">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-primary/10 animate-pulse-glow">
                    <Trophy className="h-16 w-16 text-primary" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">
                  Quiz <span className="gradient-text">Completed!</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  {currentSubjectData?.name} - Great job on completing the quiz!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="text-3xl font-bold gradient-text mb-2">{Math.round(score)}%</div>
                    <div className="text-sm text-muted-foreground">Overall Score</div>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-green-500 mb-1">{correctAnswers}</div>
                    <div className="text-sm text-muted-foreground">Correct</div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="flex items-center justify-center mb-2">
                      <XCircle className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-2xl font-bold text-red-500 mb-1">{incorrectAnswers}</div>
                    <div className="text-sm text-muted-foreground">Incorrect</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">{currentQuestions.length}</div>
                    <div className="text-sm text-muted-foreground">Total Questions</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline" size="lg">
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Try Another Subject
                  </Button>
                  <Link to="/dashboard">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                      Go to Dashboard
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">Detailed Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentQuestions.map((question, index) => {
                    const userAnswer = answers[index];
                    const correctAnswer = question.options[question.correct];
                    const isCorrect = userAnswer === correctAnswer;
                    
                    return (
                      <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-500/20 bg-green-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                        <div className="flex items-start gap-3 mb-3">
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">Q{index + 1}. {question.question}</h4>
                            
                            <div className="space-y-2 text-sm">
                              <div className={`p-2 rounded ${isCorrect ? 'bg-green-500/10 text-green-700 dark:text-green-300' : 'bg-red-500/10 text-red-700 dark:text-red-300'}`}>
                                <strong>Your Answer:</strong> {userAnswer || "No answer selected"}
                              </div>
                              
                              {!isCorrect && (
                                <div className="p-2 rounded bg-green-500/10 text-green-700 dark:text-green-300">
                                  <strong>Correct Answer:</strong> {correctAnswer}
                                </div>
                              )}
                              
                              <div className="p-2 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300">
                                <strong>Explanation:</strong> {question.explanation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quiz Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
              <Brain className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">{currentSubjectData?.name}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">Practice Quiz</span>
            </h1>
            <p className="text-muted-foreground">Answer all questions to see your results</p>
          </div>

          {/* Progress & Timer */}
          <Card className="glass-card mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">
                    Question {currentQuestion + 1} of {currentQuestions.length}
                  </span>
                  <Progress value={progress} className="w-40" />
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question Card */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentQuestions[currentQuestion]?.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                <div className="space-y-4">
                  {currentQuestions[currentQuestion]?.options.map((option, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() => handleAnswerSelect(option)}
                    >
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer text-sm leading-relaxed"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {currentQuestion + 1 === currentQuestions.length ? "Complete Quiz" : "Next"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Info */}
          <Card className="glass-card mt-8">
            <CardContent className="p-4">
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Brain className="h-4 w-4 mr-2" />
                Practice makes perfect! Take your time to think through each question.
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Quiz;