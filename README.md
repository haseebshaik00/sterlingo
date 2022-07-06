# sterlingo

## Sql Database Setup
login into root with password
``` sql
CREATE DATABASE sterlingoDB;
CREATE USER sterlingoUser IDENTIFIED BY 'sterlingo123';
USE sterlingoDB;
GRANT ALL PRIVILEGES ON sterlingoDB.* TO sterlingoUser;
FLUSH PRIVILEGES;
```

## Setup git
```
echo "# sterlingo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/haseebshaik00/sterlingo.git
git push -u origin main
```

## Setup node & other dependencies
```
npm init
npm install --save express mysql2 sequelize
```