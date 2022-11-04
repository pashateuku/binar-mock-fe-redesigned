# 📝 Simple To Do List App (Redesigned 🔨)

This app is developed in order to complete [Binar Mock Technical Test](https://drive.google.com/file/d/1Hnw4OQe3BaniXJuuLfEk5_qJ266lbyEa/view). This is the newest version of client with cleaner UI and new features, you can see the old one from this [link](https://github.com/pashateuku/binar-mock-fe)

  

## Description

Simple to do list web-app with simple auth, task saved in database and you can access it by log into your account. **This is the 🔵 Front End Side (React)**, you can directly move to 🔴 Back End Side (Express) repository by clicking this [link](https://github.com/pashateuku/binar-mock-be). you can see the deployed app by reaching this [link](https://simplydo.vercel.app/)

  

## How to Run

1. Clone this repository

```

git clone  git@github.com:pashateuku/binar-mock-fe-redesigned.git

```

  

2. Access the directory

```

cd binar-mock-fe

```


3. Install required modules

```

npm install

```

4. Run the program

```

npm start

```

  

## Route

Here is all the routes you can access:

| No | Path | Explaination |
|--|--|--|
| 1 |`/register` | Register page |
| 2 |`/login` | Login page |
| 3 |`/` | To do list page |

## Features
1. You can register new account by accessing `/register`'s page and input the require data which are 4-digit numeric user ID and password in the input form.
2. You can login into your account by accessing `/login`'s page and input the require data which are 4-digit numeric user ID and password in the input form.
3. You can create new task by accessing `/` 's page and fill the input form and click the `add` button.
4. In the same page, you can delete the task by pressing '❌' in the listed task.
5. you can press the checklist toogler on the left side to change your task status
6. All the created task will be saved in the database, and you can access it anytime by login into your account.