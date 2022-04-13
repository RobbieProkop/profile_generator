// as promises API

// import * as readline from 'node:readline/promises';
// const  readline = require('readline/promises');
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({input, output});
// const answer = await rl.question('What do you think of this RL? ');
// console.log(`THank you for your valuable feedback: ${answer}`);

// rl.close()

// as callback and sync API

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questions = {
  q1: "What's your name? ",
  q2: "What's your age? ",
  q3: "What's the purpose of life? ",
  q4: "What do want to achieve within this lifetime? ",
  q5: "How would you respond to the idea of past/future lives? ",
  q6: "Regardless of past/future lives, how can one become free from suffering? ",
  q7: "Are you happy? ",
}

rl.question(questions.q1, answer1 => {
  console.log(`Hello, ${answer1}, Welcome to the Qustionaire extrordinaire! `);
  rl.question(questions.q2, answer2 =>{
    console.log(`You are ${answer2} years closer to your death. `) 
    rl.question(questions.q3, answer3 =>{
      console.log(`${answer1} belives that ${answer3} is the purpose. `)
      rl.question(questions.q4, answer4 =>{
        console.log(`${answer1} wants to achieve ${answer4} within this lifetime. `)
        rl.question(questions.q5, answer5 =>{
          console.log(`${answer5} to past/future lives. Better make use of the current life that you do have! `)
          rl.question(questions.q6, answer6 =>{
            console.log(`${answer6} to come out of suffering. `)
            rl.question(questions.q7, answer7 =>{
              console.log(`Hello, ${answer1}, Welcome to the Qustionaire extrordinaire! He is ${answer2} years closer to your death. ${answer1} belives that ${answer3} is the purpose of life. ${answer1} wants to achieve ${answer4} within this lifetime. ${answer5} to past/future lives. Better make use of the current life that you do have! ${answer6} to come out of suffering. ${answer7}, ${answer1} is happy. May you be happy, peace and liberated from all suffering. `)
              rl.close()
            })
          })
        })
      })
    })
  })
  // rl.question(questions.q2, answer => {
  //   reply.q2();
  // })
  // rl.question("What's your name? Nicknames are also acceptable ", answer => {
  //   console.log(`Hello, ${answer}`);
  
    
  // });

  // rl.close()
});
