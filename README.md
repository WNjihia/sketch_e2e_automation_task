# Test Suite for Sketch Log In Process

This is a suite of E2E tests in Cypress to assess the behaviour of the log in process in Sketch.com

## Setup
Clone/Download the repository and navigate to that folder
`git clone https://github.com/WNjihia/sketch_e2e_automation_task.git`

Install the dependencies
`npm install`

Setup Applitools eyes
`npx eyes-setup`

Create a cypress.env.json and add your login credentials and applitools api key:
```
{
  "valid_email": <YOUR_EMAIL_ADDRESS>,
  "valid_password": <YOUR_PASSWORD>,
  "APPLITOOLS_API_KEY": <APPLITOOLS_API_KEY>
}
```

## Running the Tests
To run all the tests in interactive mode, run:
`npm run cy:open`
then select the test to run on the Cypress Window

To run all the tests inside of the terminal, run:
`npm run cy:run`
