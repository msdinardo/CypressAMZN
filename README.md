# CypressEcommerce
Cypress Test on automationPractice.com, it constains several specs files with test suites and test to validate the functionality of the page

## Instructions

To download and test the following scripts it's required to have node.js already installed in your computer then follow the following steps

1. Clone the repository
```
git clone https://github.com/msdinardo/CypressEcommerce.git
```
2. Run npm install to download the required libraries
```
npm install
```
### Run the Test Interactively
1. Run npx cypress open to open Cypress
```
npx cypress open
```
2. Search just the **ecommerce** test 
![image](https://user-images.githubusercontent.com/6429558/116893275-a0e2a300-abe5-11eb-850a-963902c59e8a.png)
3. Run all the integrations specs

### Run the Test in Bash Mode
1. Run npx cypress run to run Cypress in Bash Mode
```
npm run cy:ecommerce
```
2. The videos of the executions are going to be stored in the following folder
```
./CypressEcommerce/cypress/videos
```
3. The report is stored in the following folder (the report is mochawesome https://github.com/LironEr/cypress-mochawesome-reporter) 
```
./CypressEcommerce/cypress/reports/html/index.html
```
### Run the Test in Bash Mode (Headed)
1. Run npm run cy:headed to run Cypress in Bash Mode
```
npm run cy:headed
```
### Run the Test in Bash Mode (Chrome/Headless)
1. Run npm run cy:chrome to run Cypress in Bash Mode
```
npm run cy:chrome
```
### Run the Test in Bash Mode (Edge/Headless)
1. Run npm run cy:edge to run Cypress in Bash Mode
```
npm run cy:edge
```

