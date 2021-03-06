# Project Expectation:

![alt text](https://github.com/akarelia20/MERN_backend_coursework/blob/main/Faker_API/instructions1.png)

![alt text](https://github.com/akarelia20/MERN_backend_coursework/blob/main/Faker_API/instructions2.png)

# Intial Backend Server Setup (Express/Node)

1. setup project folder and add server.js
2. cd in to project folder in CLI
3. "npm init" or "npm init -y" to intialize the folder to take in node pakage manager request and also it generates pakege.jason
4. "npm install express" will install node modules in the project folder which has all the dependencies for backeend (express).
5. Write following code base in the server.js and run "node server.js" in CLI to see the console.log statement (You have successfully connected to port 8000).

   ```
   const express = require('express')
   const app = express()

   app.listen(8000, () =>
   console.log('You have successfully connected to port 8000')
   )

   ```

6. Problem with "node server.js" is everytime we make change to file we will have to restart the server by tiping "node server.js", but there is a solution to that. We can simply install nodemon globally by typing following command.
   (This is done only once since we are installing this globally)

   > sudo npm install -g nodemon

7. Now since we have nodemon install globally type this follwing in the CLI, which allows server.js file to run attomatically after user saves a file. Nodemon is monitoring node/server changes after every save.

   > nodemon server.js

# Project Dependency

- For this project we want to install faker pakage from npm(node pakage manager)

  > npm install @faker-js/faker --save-dev

- more about Faker on - https://github.com/faker-js/faker

# Project Output (In Postman):

![alt text](https://github.com/akarelia20/MERN_backend_coursework/blob/main/Faker_API/Output.png)
