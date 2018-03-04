# CPU Charity
Project for FSU Hack 2018.
Team DCI: Nick, Kaleb, Nilay

# Features
* Create your own account
* Mine cryptocurrency and track your stats
* View a leaderboard of your stats

# Installation
1. Run the installation scripts, if needed. (`sudo ./bin/install.sh`, make need to `cd bin` first)
2. Rename the `project` folder if needed, please make sure you update `project/project/settings.py`.
3. Initial database migration. `python3 manage.py makemigrations` `python3 manage.py migrate`
4. Run the web application! `python3 manage.py runserver`

# Please note that the development version of the project won't actually benefit charity, it's on a test database.
