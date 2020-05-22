# highSpace-backend

The repo is for the backend for The HighSpace company assignment.
This is a Node js and Mongodb REST API server.
> URL : https://highspace.herokuapp.com/

## Functions:
- CREATE USER
- VIEW USERS
- VIEW A USER BY ID


## API DOC :
- Add a User 
`POST`
<i>URL : /api/user/add</i>
<b>POST DATA SAMPLE:</b>
{

  "name": "vansh",
  "age": 20,
  "gender": "Male",
  "addresses":["toronto","delhi","bangalore","pune"]
}


- View all Users
`GET`
<i>URL : /api/user/</i>

- View a User
`GET`
<i>URL : /api/user/one/:id</i>


