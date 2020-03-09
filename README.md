# user-activity-code-challenge

## User Activity Monitor (Frontend)
```
git clone https://github.com/nicksimmons53/user-activity-code-challenge.git
cd  user-activity-code-challenge
npm install
npm run serve

Application will be running on http://localhost:8080
```


## User Activity Monitor (Backend) 
```
Necessary to run to serve user data in frontend

cd api

python3 -m venv env
source env/bin/activate

pip install django
pip install djangorestframework
pip install django-cors-headers

python manage.py migrate
python manage.py loaddata users.json

python manage.py runserver

API will be running on http://localhost:8000
```

## Thoughts on Challenge and Tech Stack
```
Vue CLI: I used the CLI for fast out-of-the-box implementation. While this is good for smaller projects, the boilerplate may 
         drive away users who have specific enviroment needs.
Vue-Router: Vue-Router was used for paths between pages.
Axios: To consume the API data being shared, I used Axios over other third-party HTTP clients due to its ease of use. 
Django: Very easy to use web framework that allowed quick setup of the backend portion of the application. Also, very easy to 
        use for scalability.
Django-Rest-Framework: The Django-Rest-Framework allowed for quick setup and seamless integration of the Django features.
```

## Requirements
```
All requirements in the challenge have been met and completed. Content is dynamically shown and served from the backend API
and will render conditionally based upon user login activity.
```



