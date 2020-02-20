Project Calculator for the Javascript Fundamentals Sections of Web Dev 101 by Kendra Moyars.

Left to do:
1. Create the functions that populate the display when you click the number buttons .. you should be storing the 'display value' in a variable somewhere for hte use in the next step.

2. Make the calculator work. Need to store the first number that is input into the calculator when a user presses an operator and also save which operation has been chosen and then operate() on them when the user presses the "=" key

  - You should already have the code that can populate the display so once operate() has been called, update the display with the 'solution' to the operation.

  - Thsi is the hardest part of the project. YOu need to figure out how to store all the values and call the operate function with them. Don't feel bad if it takes you a while to figure out the logic.

  3. Gotchas: watch out for and fix these bugs if they show up in your code: 
    
    -Users should be able to string together several operations and get the right answer: 12 + 7 - 5 * 3 etc. The behavior we’re looking for should be something like this https://www.online-calculator.com/.
    -You should round answers with long decimals so that they don’t overflow the screen.
    -Pressing = before entering all of the numbers or an operator could cause problems!
    -Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
    -Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
4. 