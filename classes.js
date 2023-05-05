//QUESTION 1a
class Car{
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model=model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    toggleAvailability(){
        this.isAvailable = !this.isAvailable
    }
};
let car = new Car ("Ferrari","Portofino",2022,true);
console.log({car});
car.toggleAvailability();
console.log(car.isAvailable);
car.toggleAvailability();
console.log(car.isAvailable);


//QUESTION 1b

class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
       this.car = car;
       this.renterName = renterName;
       this.rentalStartDate = rentalStartDate;
       this.rentalEndDate = rentalEndDate; 
    }
    calculateRentalDuration(){
        const durationInMiliseconds= this.rentalEndDate.getTime() - this.rentalStartDate.getTime();
        const durationInDays = Math.ceil(durationInMiliseconds/(1000*60*60*24));
        return durationInDays;
    }
}

let rentalStartDate = new Date("2023-05-04");
let rentalEndDate = new Date("2023-05-10");
let  rental = new Rental(car,"Angela Adisa",rentalStartDate,rentalEndDate);
let rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration);

//QUESTION 2a

class Question{
    constructor (text,options,correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(ans){
        return ans ===this.correctAnswer;
    }
}

//QUESTION 2b

class Quiz{
   constructor(questions,currentQuestionIndex,score) {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
   }
   addQuestion(question){
    this.questions.push(question);
   }
   nextQuestion(){
    this.currentQuestionIndex++;
   }
   submitAnswer(ans){
    let currentQuiz = this.questions[this.currentQuestionIndex];
    if(currentQuiz.checkAnswer(ans)){
        this.score++;
    }

   }
}

let quiz = new Quiz();
console.log("Capital city of USA");
