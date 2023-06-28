# BaSP M2023 - Week 14
## Become a Sofware Developer 2023 
### Radium Rocket.

This project consists on a test automation using the WebdriverIO framework on  website: [the Swag Labs](https://www.saucedemo.com/.)


----
### _Installation_:

Clone this repository on your local machine using this command:

git clone https://github.com/LucreciaV/Week-14

```bash
#1 Install the dependencies:
 npm install
 ```
 ```python
#2 Configuration
Before running the tests, be sure to configure the following files:

 wdio.conf.js
 ```
```python
#3 Running tests
To run all the tests, you can use the following command:

  npm run wdio
```
```python
#4 To run standard user tests, you can use this command:

 npx wdio wdio.conf.js --spec ./test/specs/standardUser.js

This will start the execution of the tests using WebDriverIO and display the results in the console.

```
```python
#5 Allure report
To run the allure reports, you can use the following command:

npx allure generate allure-results && npx allure open
