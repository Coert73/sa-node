# sa-node


### How to setup the database:
1. Install any database management client you feel comfortable with like: pgadmin, DBeaver etc.
2. Ensure that you remeber the username and password you used to create the primary user of your DB client
3. Create one database on your client (you may call it anything but it would be preferable to name it something logical)

### How to setup the backend project:
1. Clone the repository
2. Make sure you have install npm (Node package manager) on your machine
3. Run this command in the termainal of the project
```
npm install
```
This will install all of the dependancies of the project.
4. Make sure that you change the connection string inside the .env file to the DB on your local machine.
The format is:
```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```
5. To run the migration to update your database run the following command:
```
npx prisma migrate dev
```
6. To run the backend enter the command below in the root directory of the project:
```
nodemon server.js
```