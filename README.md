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

## Solution
The pages are available in the project root. page1.html and page2.html cover the respective requirements above. No installation required.


# User Activity Monitor (Backend)

## Resources
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

## Description
For this exercise create an application using the Django Rest Framework. This application should be free of errors and satisfy all the requirements outlined below. All source code related to this project should be stored in a public git repo on Github. 3rd party dependencies do not need to be included in the repo, however, someone should be able to easily install the required dependencies and run the application with the files included in this repo.

## Requirements
Create a Django Rest Framework application that has an endpoint that can produce the content of the users.json file. Your application should be able to return all users, users that have not logged in, and users that have logged in.

## Solution
The Django application is under the `testapp/` directory. To run the application:

1. Install Python 3.x, [Django 3.1](https://docs.djangoproject.com/en/3.1/topics/install/#installing-official-release), and the [Django REST framework](https://www.django-rest-framework.org/#installation)
2. From the `testapp/` directory, run the command `python manage.py runserver` to start a local instance on port 8000.
3. The API is available at [localhost:8000/api](localhost:8000/api)

The desired result sets can be found at the following paths
- [localhost:8000/api/users-all?format=json](localhost:8000/api/users-all?format=json) 
- [localhost:8000/api/users-inactive?format=json](localhost:8000/api/users-inactive?format=json) 
- [localhost:8000/api/users-active?format=json](localhost:8000/api/users-active?format=json)