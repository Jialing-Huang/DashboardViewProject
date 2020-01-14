# DashboardView

This project is a full stack web application done by MEAN and could be running at web browser. Angular Material style is implemented to build up the UI of the project.Functions bellow available:
  1. Register/Login UI and functions
  2. Angular Material Sidebar UI
  3. Data visualization by charts based on d3.js 
  4. Error warning and handler
  
Frontend by Angular8, Backdend by Express and Node.js, database resource is MongoDB.Atlas.

The project has been deployed on AWS and could be visited by the linkage:
http://boardview.s3-website.us-east-2.amazonaws.com

## How to run the application

1. Download the project and unpack it.
2. Use program IDE to open `/backend/app.js` and use your own mongodb connection string to replace current string at line #12, then save the file.
3. Open command window and under the project folder input `npm install`.
4. Input `npm run start:sever`, and nodemon will automatically start until you can see `Connected to database!` if eveything OK.
5. Open another command window and enter into the project folder and input `ng serve --open` and enjoy it!

Thank you!
