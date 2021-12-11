# Password-Generator - JavaScript Project

[Link to Password Generator Website] (https://marikadicarlo.github.io/Password-Generator/)

![password-generator](file:///Users/marikadicarlo/Desktop/projects/Password-Generator/Images/passgen.jpg)

## Password Generator Javascript Challenge

This challenge solves security concerns for weak passwords. The user will be prompted to determine if they would like to include lowercase, uppercase, numbers and special characters. It also prompted the user to determine the length of their password.  
The user is prompted by questions, which they need to enter specific criteria.

During this challenge, I came across multiple challenges with the Javascript code. There was starter code provided, which I used to determine what steps needed to be taken next. I had in mind what I wanted to achieve but there were many flaws in my code along the way. My biggest issue was creating a function, but not calling it later in the javascript code. After a session with my tutor, he was able to break it down, section by section, and help me realize what I needed to add to make everything work cohesively.


## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

