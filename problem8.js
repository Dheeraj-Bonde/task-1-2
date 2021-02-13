var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]


function chksecurityQuestions(securityQuestions, ques, ans){
    for(let i in securityQuestions){
        if(securityQuestions[i]['question']===ques){
            if(securityQuestions[i]['expectedAnswer']===ans){
                return console.log(true);
            }
        }
    }
    return console.log(false);
}

var ques = 'What was your first pet’s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);