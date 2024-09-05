# API TESTS
### The API Test Scripts are contained in the Wema Assessment API Testing JSON file
### The tests are designed and implemented in Postman using Postman Scripts which are written in Javascript

##### To run the API tests, import the collection into Postman and use the Postman Runner.
##### Variables utilized in the collection are stored at the Collection Level so there is no need for Environment Variables. This approach was taken to ease the process of sharing the collection.

# MOBILE TESTS
### The Mobile Automation Scripts are contained in the test folder
### The WebdriverIO framework built on Javascript with Appium serving as the driver is utilized to design and implement the mobile tests

##### The Page Object Model was utilized in writing these scripts so, the main executable files are in the specs folder while the pages are in the screens folder.
##### To run the Mobile Tests, the npx wdio command should be run in the Project's path.
##### Scripts have been included in the package.json file to run individual spec files.
##### The node_modules folder containing all the project's dependencies is excluded from this repository. This can be installed when the repository is imported.
