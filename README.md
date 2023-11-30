# AutomationSuiteCypress

cypress-automation-suite
-------------------------------------------------------------------------------------------------------------
Project Overview 

Test Automation using Cypress 12.17.4 for E-commerce website integrated with BDD Cucumber framework

Tech Stack

Cypress JavaSCript BDD Cucumber Cucumber-Html-report

Requirements
-------------------------------------------------------------------------------------------------------------
Any computer: Mac, Windows, Linux
Node 16+ (LTS), 
git

Check the Node version
-------------------------------------------------------------------------------------------------------------
$ node -v
# for example v18.13.0
$ npm -v
# for example 8.19.3

Clone the repo
--------------------------------------------------------------------------------------------------------------
In order to get the code and install NPM dependencies, first clone my repo to your local machine.

git clone https://github.com/SuryaPriyaM/AutomationSuiteCypress.git

Cloning into ...

Install NPM dependencies
--------------------------------------------------------------------------------------------------------------

Change the working folder to the cloned repository folder

cd cloned repository folder
The cloned repo has the file package.json with all NPM dependencies. Let's install these NPM dependencies

npm install
------------------------------------------------------------------------------------------------------------------------

Quick check 
You can test the installation 
npx cypress open 

You should see the Cypress Desktop window appear and show the list of test files (specs).

CI Readiness
---------------------------------------------------------------------------------------------------------------------
I ensured the framework is fully shareable and suitable for CI with the following

package.json - All Framework Dependancies have been included
Added git.ignore to avoid checking in non required items like node_modules
Added scripts in package.json to facilitate easy execution
Multiple Cucumber HTML Reporter enabled for a quick overview of all tested features and scenarios test execution status