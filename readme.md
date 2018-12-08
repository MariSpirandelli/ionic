# Description

This is a simple Ionic project which make Rest requests to a SpringBoot project server. 
The project is basically a CRUD of people and theirs applications, adding a role to each person (which does nothing untill the moment).

## Requirements:

*Frontend:*

 - Node - 10.13.0;
 - NPM - 6.4.1;
 - Ionic v3: npm install -g ionic;
 - Cordova: npm install -g cordova.

*Backend:*
 - java 8;
 - Maven 3.6.0.

*Database:*
 - MySql.

## Running application:

First of all, create your database from the file schema.sql located on db folder and run mysql server.

*Frontend:*

On a command line, open the project on root folder (ionic/marionic) and run:
```bash 
npm install
```
 After that, you just need to run:
```bash 
ionic server --lab 
```
to check it on desktop simulating both IoS and Android (noticing that the layout was focused on the Android platform).

*Backend:*

After cheking all database configurations on application.properties file, open a command line and run:
```bash 
mvn spring-boot:run
```
 on the root folder (mba-service).
