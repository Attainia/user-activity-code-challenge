# Usage Instructions

This submission for the user activity code challenge can be installed and served locally using the following commands

```
git clone https://github.com/PatrickJFierro/user-activity-code-challenge
cd user-activity-code-challenge
source env/bin/activate
cd app
npm install
python ../api/manage.py runserver & npm run dev
```

These commands assume that the node package manager is installed. I've included a python virtual environment for ease
of use but if you would rather serve the API natively it uses the following packages:
- Django
- djangorestframework
- django-cors-headers

Additionally, the front-end dependencies are:
- vue
- vue-router
- axios
- moment

**Important Note**:

In order to most accurately emulate a production environment I opted to consume the Django API in the Vue application.
As such, both projects must be serving locally in order for the front-end application to function correctly.

By default, the projects are hosted at the following addresses:

__API:__ http://localhost:8000/users

__APP:__ http://localhost:8080/#/

# Architectural Overview

## Backend
Because the user data was provided in a raw JSON format, the driving consideration in my view concerned the best
method for incorporating the data into Django's featureset. From my understanding there were three obvious approaches:

1. Parse the JSON using python at the controller level, forgoing any need to translate the user data to a database.
2. Use Django fixtures in order to load the raw data into the development database.
3. Create a migration for populating a user database table.

While it may have been a perfectly viable solution for a project of this scope (especially since user mutability is
not a concern), I opted not to take the first approach because it fails to use Django's featureset and would quickly
become untenable in a more complex API. Between the second and third approach, I ultimately chose to create a migration
because fixtures are better suited for parsing JSON files generated from database exports and it seemed inelegant to
modify the provided data to emulate that format.

## Frontend
