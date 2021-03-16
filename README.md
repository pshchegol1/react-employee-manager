# Getting Started with Create React App

#### Creating A New Project With Create React App.
 ```  
 npx create-react-app **PROJECT_FOLDER_NAME**
 cd **PROJECT_FOLDER_NAME**
 npm start  
```
 
### Package.json  Scripts 

__Runing Development Build__  
In the project directory, you can run: `npm start`. Runs the app in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


 __Runing Development Build__  
 To create a production bundler for deployment run `npm run build`. This script builds your app for production and places all your files in the `PROJECT_FOLDER_NAME/build` folder.  The bundle created is optimized and will give you the best performance.

 
 __Checking The Production Build__  
 When you build your app you can test it locally before production. You can install the serve package as a testing server 
 ```
  npm install -g serve
  serve -s build

 ```
The last command shown above will serve your static site and provide a link in the terminal to open your react app. You can adjust the port by using the -l or --listen flag.
 ```
 serve -s build -l 4000
 ```
 If you want more help on the options of serve then use:
 ```
 serve -h
 ```
 For other options and settings serving your create react app take a look at the create react app  CRA
[ deployment documentation](https://create-react-app.dev/docs/deployment/)
 

 

## Resources
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [React documentation](https://reactjs.org/).
- [Progressive web apps](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
 



 
