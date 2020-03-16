# Attainia Assessment
Note: I did not realize I couldn't just make a pull request from another repo (I should have just forked this from the beginning). If you'd like to see the commit history, you can go to <https://github.com/richardswei/attainiaapp> 
### Getting Started
I work on a Windows machine. The instructions should be mostly the same even if you work on a Mac or Linux.  
On Mac or Linux, replace 'py' with 'python3' or 'python'  
Clone this repository: 
```git clone git@github.com:richardswei/user-activity-code-challenge.git```

### Set up the Django REST Framework API
This install depends on pip, make sure you have it by running:  
  ```pip -V```  
I also use virtualenvwrapper for easier virtual env management: <https://virtualenvwrapper.readthedocs.io/en/latest/>   
Make a new virtual environment:  
  ```mkvirtualenv <INSERT desired environment name here>```  
From the root director, install dependencies:  
  ```pip install -r requirements.txt```  
Make the migrations:  
  ```py manage.py migrate```  
Seed the sqlite database:  
  ```py manage.py loaddata users.json```   
Run the server:  
  ```py manage.py runserver```  

Navigate to <http://localhost:8000/api/v1/users/> to see the users.  
To get the list of users that have logged on at least once:  
<http://localhost:8000/api/v1/users/?status=active>  
To get the list of users that never logged on:  
<http://localhost:8000/api/v1/users/?status=dormant>

### Set up the Vue frontend
Open another terminal tab

From project root, cd into the vue app:  
  ```cd user-activity-app/```  
Install dependencies:  
  ```npm install```  
Run the app:  
  ```npm run serve``` 

### Run the Application
Navigate to <http://localhost:8080/> to see the application.
If no data appears in the table, make sure both servers are running in separate terminal tabs.
