# This is 105 mini project's repository

This repository contain backend and frontend

## To run the frontend and backend in developmode 
For frontend, use
```
    npm run dev
```
For backend, use
```
    node index.js
```

# Grocery List App

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

### Login

#### URL
`POST /login`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String|email
|password|String| password|


Example
```
   {
     "email" : "test@gmail.com",
     "password" : "12"
   }


```


#### Success
Response

###### Status Code
` 200`  login success

#### Response Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id
| createdAt | DateTime | create Time 

Example
```
{
   "email":"test@gmail.com",
   "username":"test",
   "id" : "1",
   "createdAt" : "2023-05-17 11:12:55.687"
}

```
**noted: If success, the Response will be sent with cookie named UserToken**

### Signup

#### URL
`POST /signup`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username |
|email| String | email |
|password|String| password|

Example
```
   {
    "email":"test@gmail.com",
    "username":"test",
     "password" : "12"
   }


```

#### Success

###### Status Code
` 200`  register success

no response body

### get logged in user

#### URL
`GET /me`

#### Request Body 
No Request Body


#### Success

###### Status Code
` 200`  got data

| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id
| createdAt | DateTime | create Time

Example
```
{
   "email":"test@gmail.com",
   "username":"test",
   "id" : "1",
   "createdAt" : "2023-05-17 11:12:55.687"
}

```

### getAllItems

#### URL
`GET /items`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  found items

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of item | all items related to user |

#### item
the item object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of item |
| name | string | item name |
| user_id | string | id of user |
| bought | string | checked item |
| updatedAt | DateTime | latest updated time |
| createdAt | DateTime | create Time |

Example
```
[
    {
        "id" : "1",
        "name" : "carrot",
        "user_id" : "1",
        "bought" : "0",
        "updatedAt" : "2023-04-25T14:58:58.264Z",
        "createdAt" : "2023-04-25T14:58:58.264Z",
    }
]

```


### Create Item

#### URL
`POST /item`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| name | string | item name |


#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| user_id | string | id of user |
| name | string | item name |

Example
```
    {
        "user_id" : "1",
        "name" : "carrot"
    }

```

### Edit Item

#### URL
`PATCH /item`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of item |
| name | string | item name |


#### Success
Response

###### Status Code
` 200`  success

no response body


### Delete Item

#### URL
`DELETE /item/:id`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | String | id of item
 
#### Request Body 
No Request Body

#### Success
Response

###### Status Code
` 200`  delete success

no response body

### Check Item

#### URL
`PATCH /item/check`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of item |
| bought | string | item is bought |


#### Success
Response

###### Status Code
` 200`  success

no response body
