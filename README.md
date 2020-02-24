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
* Django
* djangorestframework
* django-cors-headers

Additionally, the front-end dependencies are:
* vue
* vue-router
* axios
* moment

*__**Important Note:*_____

In order to most accurately emulate a production environment I opted to consume the Django API in the Vue application.
As such, both projects must be serving locally in order for the front-end application to function correctly.

By default, the projects are hosted at the following addresses:

__API:__ http://localhost:8000
__APP:__ http://localhost:8080/#/

# Architectural Overview

# Further Considerations
