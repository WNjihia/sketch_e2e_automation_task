# Test Suite for Sketch Log In Process

This is a suite of E2E tests in Cypress to assess the behaviour of the log in process in Sketch.com

## Setup
Clone/Download the repository and navigate to that folder

```git clone https://github.com/WNjihia/sketch_e2e_automation_task.git```

Install the dependencies

```npm install```

Setup Applitools eyes

```npx eyes-setup```
Add your applitools api key to your environment variables

```
Mac: export APPLITOOLS_API_KEY="YOUR_API_KEY"
Windows: set APPLITOOLS_API_KEY="YOUR_API_KEY"
```

Create a cypress.env.json and add in your login credentials:
```
{
  "valid_email": <YOUR_EMAIL_ADDRESS>,
  "valid_password": <YOUR_PASSWORD>
}
```

Instructions on how to get an applitools api key can be found [here](https://applitools.com/docs/topics/overview/obtain-api-key.html)

## Running the Tests
To run all the tests in interactive mode, run:
`npm run cy:open`
then select the test to run on the Cypress Window

To run all the tests inside of the terminal, run:
`npm run cy:run`
