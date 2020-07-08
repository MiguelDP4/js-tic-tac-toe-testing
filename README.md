# TicTacToe Testing

This project was created to practice testing with jest on javascript.

## Built With

- HTML
- CSS
- JavaScript
- ESLint
- Prettier
- Jest

## Preview

![screenshot](./img/screenshot.png)

## Live demo

- Watch the demo here: [live version](https://raw.githack.com/MiguelDP4/js-tic-tac-toe-testing/feature/dist/index.html)



## Getting Started

**Want to check the code and make some changes please .**

Do you want to clone this project please use this command on you terminal

```
git clone https://github.com/MiguelDP4/js-todo-list.git
```

webpack is used to compile JavaScript modules. Once installed, you can interface with webpack either from its CLI or API. If you're still new to webpack, please read through the core concepts and this comparison to learn why you might use it over the other tools that are out in the community.

Core concepts : [Webpack](https://webpack.js.org/concepts/)


### Prerequisites

- Webpack 
- NPM 

### Setup

Install NPM

Check that you have node and npm installed

To check if you have Node.js installed, run this command in your terminal:


```
node -v
```

To confirm that you have npm installed you can run this command in your terminal:


```
npm -v
```


### Install

install npm and webpack


```
sudo apt update
sudo apt install npm
```


:Show
Local Installation Webpack

To install the latest release or a specific version, run one of the following commands:

```
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

Global Installation Webpack

The following NPM installation will make webpack available globally:

```
npm install --global webpack
```
Now you can make changes on src files to change the behavior of the application

finally if you want to compile the code run this command

```
npm run build
```

## Run test on local

```
npm run test
```


## Test Results 

```

 PASS  src/tests/boardModule.test.js
  ✓ if user does not select a symbol, the default symbol is X (1 ms)
  ✓ if user selects a symbol, the symbol will be the one the user selected (1 ms)
  ✓ if user selects a symbol, the symbol will be the one the user selected
  ✓ If the user does not select a name, their name will be player<symbol>
  ✓ If the user does not select a name, their name will be player<symbol> (1 ms)
  ✓ If the user writes their name, their name will be the selected one
  ✓ The second player will have the opposite symbol the first player selected
  ✓ The second player will have the opposite symbol the first player selected
  ✓ checks if player won on position 1,2,3 
  ✓ checks if player won on position 4,5,6 
  ✓ checks if player won on position 7,8,9 
  ✓ checks if player won on position 0,3,6 
  ✓ checks if player won on position 1,4,7 
  ✓ checks if player won on position 2,5,8  (1 ms)
  ✓ checks if player won on position 0,4,8 
  ✓ checks if player won on position 6,4,2 
  ✓ checks if game is a draw
  ✓ checks if game is a not draw
  ✓ return true if position is not taken (1 ms)
  ✓ return false if position is taken

Test Suites: 1 passed, 1 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        1.012 s
Ran all test suites.

Watch Usage: Press w to show more.


```

## Authors

👤 **Miguel Dubois**

- Github: [@MiguelDP4](https://github.com/MiguelDP4)
- Twitter: [@Mike_DP4](https://twitter.com/Mike_DP4)
- LinkedIn [Miguel Dubois](https://www.linkedin.com/in/miguel-angel-dubois)

👤 **Ruben Paz Chuspe**

- Github: [@rubenpazch](https://github.com/rubenpazch)
- Linkedin: [rubenpch](https://www.linkedin.com/in/rubenpch/)
- Twitter: [chuspepaz](https://twitter.com/ChuspePaz)


## 🤝 Contributing

This project is for learning purposes only, we wont accept contributions, though suggestions are welcome.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- We thank microverse for this learning opportunity.