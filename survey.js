const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question('What do you think of Node.js? ', (answer) => {
  answers.push(answer);
  rl.question(`What's your name? `, (answer) => {
    answers.push(answer);
    rl.question(`What's an activity you like doing? `, (answer => {
      answers.push(answer);
      rl.question(`What do you listen to while doing that? `, (answer) => {
        answers.push(answer);
        rl.question(`Which meal is your favorite? `, (answer) => {
          answers.push(answer);
          rl.question(`Which sport is your absolute favorite? `, (answer) => {
            answers.push(answer);
            rl.question(`What is your superpower? `, (answer) => {
              answers.push(answer);
              const node = answers[0];
              const name = answers[1];
              const activity = answers[2];
              const music = answers[3];
              const meal = answers[4];
              const sport = answers[5];
              const superpower = answers[6];
              console.log(`Your name is ${name}, you like to do ${activity} while listening to ${music}. Your favorite meal is ${meal} and you like ${sport}.
              your superpower is ${superpower} and you think node is ${node}`);
              rl.close();
            })
          })
        })
      })
    }))
  })
});
