# README #

This README would normally document whatever steps are necessary to get your application up and running.  
This project is a powerful RESTful API-related to the integration of express and mysql.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### What should I do with the version change? ###

* Format is should be  [ Major . Minor . Fix ] (1.0.0)
* If the change is bug fix, [Fix] version should be increased (1.0.1)
* If changes is made in prerequisite, requires testing, requires changes to the test documentation, add new endpoint or edit existing endpoint [Minor] version should be increased (1.1.0)
* If the usage is changed, added new features or big changes [Major] version should be increased (2.0.0)

### Configuration

* [Env]()
* [Db]()

### Installation

```sh
$ npm install
```

```sh
$ npm start
```
and the express server will be listening at `http://localhost:8080`

#### Db model creating ####

>> sequelize-auto -o "models" -d database_name -h ip_hostname -u username -p 3306 -x password -e mysql
* [More](https://github.com/sequelize/sequelize-auto)

### TODO

- **Better Modeling**
- **Realtime documentation**

- [ ] Can be used lib
