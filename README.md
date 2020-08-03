Project was completed using django rest and react. Ended up with react in the interest of time as I have lots of familiarity with react and none with vue. 
I understand if this may hamper my chances but I cannot commit more time right now. 

### To start frontend:
1. cd frontend
2. yarn install            
2. yarn start

### To start backend: (done in python 3.7.2)
1. cd backend
2. pip install -r requirements.txt
3. python manage.py migrate 
4. python manage.py loaddata users
5. python manage.py runserver

### Usage
You can navigate to http://localhost:3000/ to view the table
For the backend:
    - http://localhost:8000/users should return all the users
    - http://localhost:8000/users?login_count_gt=0 should return all users that have logged in
    - http://localhost:8000/users?login_count=0 shoudl return all users that have no logged in



===================================================================================================================================================

# User Activity Monitor (Frontend)

## Resources
- [Vue Javascript Framework](https://vuejs.org/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

## Description
For this exercise create an application using the Vue Javascript Framework.  This application should be free of errors and satisfy all the requirements outlined below.  All source code related to this project should be stored in a public git repo on Github. 3rd party dependencies do not need to be included in the repo, however someone should be able to easily install the required dependencies and run the application with the files included in this repo.

## Requirements
One page of the application should display a table of the values found in `users.json`.  By default this table should display all rows with a white background.  On the same page there should be a button.  When this button is clicked all user rows with a login count of 0 should have a red background.  When the button is clicked again all records should have a white background.

A separate page of the application should display a table of the values found in `users.json`.  By default this table should display all rows with a white background.  On the same page there should be a button.  When this button is clicked all user rows with a login count greater than or equal to 1 should have a green background.  When the button is clicked again all records should have a white background.


# User Activity Monitor (Backend)

## Resources
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

## Description
For this exercise create an application using the Django Rest Framework. This application should be free of errors and satisfy all the requirements outlined below. All source code related to this project should be stored in a public git repo on Github. 3rd party dependencies do not need to be included in the repo, however, someone should be able to easily install the required dependencies and run the application with the files included in this repo.

## Requirements
Create a Django Rest Framework application that has an endpoint that can produce the content of the users.json file. Your application should be able to return all users, users that have not logged in, and users that have logged in.
