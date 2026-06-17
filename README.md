Readme

This Framework is for Automation of QA 

Where to get the repro:
Clone this repo: https://github.com/VinMcQueen95/EntFramework.git

To run the test: 1 test is currently added: loginTest.spec.ts: that checks if we are able to login using a valid username and password and clicking teh Login button on: saucedemo.com, that provides a site for checking automation scripts on this site. This is to exercise the setup of the framework from scratch and talking the free saucedemo site to run a few tests successfully 

Next step is to have the site to be sofytest / pentest environments so that these sites can be tested qwith test scenarios

Summary: Implemented:
TypeScript-based Playwright framework
Structured project layout
Page Object Model: For LoginPage and HomePage
Screenshot capture on test failure
Framework documentation

Future enhancemnents:
HTML reporting
Externalized test data
Environment-based configuration
Logging support
Test tagging
Parallel execution optimization
Retry mechanisms
CI/CD integration
Advanced fixtures and utilities

Folder structure:
project-root/

├── pages/
├── tests/
├── data/
├── config/
├── playwright.config.ts
├── package.json
└── README.md


pages: supports the Page object model and every page has a corresponding file and all reusable utilities corresponding to that page are saved and maintained in that page
tests: contains the test spec files: test.spec.ts
data: the data used to run the same test with multiple sets of data
Config: The configuration settings for say the env to be used etc will saved in this
playwrigght.config.ts: the settings and configurations for the playwright 
package.json: lists all the packages installed and available as part of this framework
README.md : explains the basic overview and how to use this framework
api: for api testing
reporting: The test reports
test-results: the results from a test run are captured