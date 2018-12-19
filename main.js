let questions = ["Inside which HTML element do we put the JavaScript?" 
,
"Where is the correct place to insert a JavaScript?",
"What is the correct syntax for referring to an external script called xxx.js",
"How do you write Hello World in an alert box?",
"How do you create a function in JavaScript?"];
let responses = [];
let actualAnswers=["<script>","head and body","<script scr=xxx.js","alert(message)","function myFunction()"
];
for(let i=0;i<questions.length;i++){
    // document.write(questions[i]);
    responses[i]=prompt(questions[i]);
    console.log(responses);
    console.log("Correct anwers: " +actualAnswers[i]);
   

}
document.write(responses);

//check answers and output score

let score=0;
for(let j=0;j<actualAnswers.length;j++){
    if(actualAnswers[j]==responses[j]){
        score++;
    }

}
alert("your total score is "+score);
