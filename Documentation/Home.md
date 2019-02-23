# Simple Ionic Application

### Team: ID: 6-1
Sindhusha Tiyyagura Class ID:24   
Pradeepika Kolluru Class ID:12   

### Introduction:
Creating a basic android application using Ionic Framework ( login, signup pages with a mashup of 2 web service pages)

### Main Objective:
Task-1: Creating basic Log In and Sign Up pages using ionic tags and local storage functionalities    
Task-2: Creating a mashup of 2 web service APIs related to the knowledge services/AI/machine Learning     
Task-3: Creating Unit Testing environment using Jasmine and Karma, and Writing at least 3 unit test cases for the ionic application.   

### Design and Implementation for each of the above tasks:

### Task-1: Creating basic Log In and Sign Up pages using ionic tags and local storage functionalities:
1) Created Ionic application using command in command prompt: `ionic start ionic-app sidemenu`
2) Opened the Ionic project in Webstorms.
3) Created 2 new pages for Log In and Sign Up using command: `ionic g page login`   
`ionic g page register`
4) Added the two pages in the app.routing.ts file for displaying the menu with login and register pages.
5) Added Basic html page in log in and sign up pages using ionic html tags
6) Created AuthService provider using command: `ionic g service AuthService`
7) Providing 2 functions in the AuthService with the local storage functionality to set and get the login details.
8) Respective AuthService functions are called from the login and signup pages for registering the user details and checking the credentials of the user.
9) After registering user details successfully, page will be redirected to login page using Router Module.
10) Running the ionic appication using command `ionic serve`
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/login%20page.png)
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/registeration%20page.png)

### Task-2: Creating a mashup of 2 web service APIs related to the knowledge services/AI/machine Learning:
1) Selected the following web services for the ionic app:   
**Classify API**: https://www.uclassify.com/   
**URL Preview API**: https://www.microsoft.com/cognitive-services/en-us/academic-knowledge-api 
2) Created an account in the above mentioned web services and generated keys.
3) Created 2 new pages for the following web services using command: `ionic g page classifyText`
`ionic g page urlPreview`
4) Written basic html page templates for both the web service pages.
5) For Classify API page: When user enters a sentence, Http request is sent to the classify API url and gives the scale of positive and negative impact of the sentence in values ranging from (0 to 1)
6) Displaying the above contents in a table using ionic html tags
7) For URL Preview API page: When user enters the URL in the input, HTTP get request is sent to the web service URL using the subscription key specified in the HttpHeader and gives the response back with the following details:
    * Short description about URL
    * Whether the URL is family Friendly or not.
    * URL
    * Image related to the URL
8) Both pages were added in the app.routing.ts file to display in the side menu items list.
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/Classify%20text%20page.png)
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/URL%20preview%20page%201.png)
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/URL%20preview%20page%202.png)

### Task-3: Creating Unit Testing environment using Jasmine and Karma, and Writing at least 3 unit test cases for the ionic application.
1) Karma and Jasmine testing tools are used for testing angularjs applications.
2) Created Karma default config file using command: `karma init`
3) We have written unit testing for login page.
4) We have set localstorage with user details and verified credentials function.
5) We have written unit testing for registration page by executing saveUserDetails function and expecting to have the values in the localstorage function.
6) All the values set in the local storage will be removed after the unit testing is done.
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/karma%20installation.png)
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/login%20page%20testing.png)

Deployed the basic Ionic application in Ionic Lab.
![](https://github.com/sindhusha-t/Ionic-app-1/raw/master/src/Screenshots/ionic%20lab%20deploy.png)

### Conclusion:
We have learnt how to write an android applications using Ionic. It is almost similar to developing web applications just that html pages differ by the tags.
We have learnt how to write unit testing using karma and Jasmine.