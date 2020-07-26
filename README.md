# burger
For this project I created an application that is able to add entries to a table, and then retrieve them. This application was made using SQL, express, heroku for the deployment, and handlebar. Using these tools I was able to retrieve information from the SQL table, and add, update and delete it. The handlebars programs were used to deploy the information to the html files. Using the `{{#each}}` tag to loop through the data object that is returned by the express router. I then used the `{{#unless}}` and the `{{#if}}` tags to check if the dog was petted or not yet. Using the orm constructor I was able to create an orm object with methods in it that would gather information from the SQL table. This orm was then used in another javascript file, and then finally utilized by the controller on the actual api calls. The client side javascript was created in the handlebars html files. Below is a gif of the working application: 

![](tracker.gif)

This gif shows the functionality of the  application in that it can make departments, roles, and employees. It also shows the functionality of updating the table.

## Getting Started

To get this project running, one must copy the files from the class repository, and run an `npm install` on the correct directory. One could also just view it using the deployed link.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [SQL](https://dev.mysql.com/doc/)
* [Node.js](https://nodejs.org/en/docs/)

## Deployed Link

* [See Live Site](https://mysterious-sands-92673.herokuapp.com/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp



