# environment setup

1. go to the project root directory (directory containing package.json file).
2. create a dotenv file and set three variables in it
   1. A MONGO_URL varibale and set it to be equal to the url of your mongodb database
   2. A JWT_SECRET variable and set it to the jsonwebtoken secret that you want to use in you project
   3. A JWT_LIFE_TIME variable and set to the jsonwebtoken expiry time
3. run npm install to install all requred dependecies
4. run npm run dev to start development server using nodemon or run npm start to start the server using node
## additional enviroment variable 
having done the above step... you project sholud be up and run.
in this project, am using cloudinary file uploading technology to handle file upload
so you need to create a cloudinary account and under the dashboard you will be able to see the cloud name, api key and api  secret
in the environment variable ADD the following variables
1. CLOUDINARY_CLOUD_NAME variable and set it to the cloud name
2. CLOUDINARY_API_SECRET variable and set it to the API secret
3. CLOUDINARY_API_KEY variable and set it to the API key

## package description

This package is created in order to get rid of the boiler plates that one have to write to set up a working server with node js like creating all the folder structures and iporting and initializing the server which id pety common in all node js application. this package uses the modern javascript ES6 syntax instead of common js to write the server. since users are plety common in all application, this package provides you with a basic user schema whih u can use to create your own users in to the system hence enabling you to concentrate on the core function of the server. you can add or remove properties from the user model to suit you need. the default logging method provided by this server is using an email and password method.
you can change this by modifying the login function in the users controller . the package is able to handle file upload in to the server using multer. you can find the uploaded image inside the uploads folder. you can change this default path by providing you own path in the handleUpload method inside the routes folder . you can change the type of file to allow for upload inside the handleUpload method by passing a second parameter to be equal to an array of all allowed extensions.
by default the file generate a unique name for the file.you can change this by adding a third parameter which is an object with the fileName property. sometimes you may not want to change the unique name but you ,may want to change the number of charactors for the unique name .you do thi by passing another property to the object called fileNameLength and provide a number .you can also change the maximum file sizean by adding a size property to the object.
the package provide an error handle middleware as well as authentification middleware for logging users in

######

created by godie - software enginer
email:ngugimaina2019@gmail.com
