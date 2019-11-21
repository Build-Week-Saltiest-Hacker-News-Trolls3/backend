# <center>Saltiest Hacker News Trolls Backend</center>

[Heroku App](https://salty-nick.herokuapp.com)

#### Pitch

Build an app that uses Hacker News comment data to rank commenters based on comment sentiment (saltiness/negativity).

#### MVP

Saltiest hacker news trolls rates and ranks hacker news commenters by negativity of comment sentiment (limited to commenters who have made x number of posts). Allows users to search by username to view comments and sentiment levels of specific users.

# Authentication Endpoints:

## POST /api/auth/login

#### Expected request body:

```
{
    "username": "testuser",
    "password": "password123"
}
```

#### Returns:

```
{
    "message": "Login Successful",
    "payload": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
}
```

## POST /api/auth/register

#### Expected request body:

```
{
    "username": "testuser",
    "password": "password123"
}
```

#### Returns:

```{
    "id": 2,
    "username": "testuser"
}
```

# User Endpoints:

## GET /api/users

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
[
  {
    "id": 1,
    "username": "admin"
  },
  {
    "id": 2,
    "username": "testuserone"
  },
  {
    "id": 3,
    "username": "testusertwo"
  }
]
```

## GET /api/users/:id/favorites

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
[
  {
    "id": 1,
    "username": "admin",
    "troll_username": "GigaTroll420",
    "troll_comment": "I hate the internet and everyone here",
    "troll_comment_id": 1
  },
  {
    "id": 1,
    "username": "admin",
    "troll_username": "MongolDB",
    "troll_comment": "Ghenhis Khan was the greatest IT professional",
    "troll_comment_id": 2
  }
]
```

## DELETE /api/users/:id/favorites/:comment_id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
true || false
```

## POST /api/users/:id/favorites/:comment_id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
{
  "message": "Add Successful!",
  "user_id": "1",
  "comment_id": "3"
}
```

# Troll Endpoints:

## GET /api/trolls

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
[
  {
    "id": 64,
    "name": "xeno_camel_dark2569",
    "date_created": 1454525670,
    "salty_rank": 1.03,
    "salty_comments": 134,
    "comments_total": 16
  },
  {
    "id": 46,
    "name": "xx_flower_cracker3954",
    "date_created": 1355682472,
    "salty_rank": 1.05,
    "salty_comments": 112,
    "comments_total": 118
  },
]
```

## GET /api/trolls/:name

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
[
  {
    "id": 64,
    "name": "xeno_camel_dark2569",
    "date_created": 1454525670,
    "salty_rank": 1.03,
    "salty_comments": 134,
    "comments_total": 16
  }
]
```

## GET /api/trolls/:troll_name/comments

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
[
  {
    "id": 59,
    "comment_uuid": 528525428,
    "troll_name": "xx_flower_cracker3954",
    "is_salty": 1,
    "comment_text": "random text here goes one two three four five"
  },
  {
    "id": 132,
    "comment_uuid": 521853649,
    "troll_name": "xx_flower_cracker3954",
    "is_salty": 0,
    "comment_text": "random text here goes one two three four five"
  }
]
```
