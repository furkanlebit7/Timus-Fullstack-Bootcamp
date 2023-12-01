# 📽️ Timus Fullstack Bootcamp Day-6

### Users and Notes using Express and pg

#### Tasks
:heavy_check_mark: Add MVC for Notes<br />
:heavy_check_mark: Create a relation between users and notes<br />
:heavy_check_mark: Make project MVC Format<br />
:heavy_check_mark: If user doesn't exist note can not be added for that user<br />
:heavy_check_mark: getUserNotes method will be added<br />
:heavy_check_mark: If the user is deleted, its notes will also be deleted. <br />

## 🔥Technologies and Libraries

🟢 Nodejs <br />
🟢 Express <br />
🟢 Fs <br />
🟢 Nodemon <br />
🟢 Body-Parser <br />
🟢 pg <br />
🟢 pg-promise <br />
🟢 helmet <br />
🟢 morgan <br />
🟢 dotenv <br />
🟢 path <br />



## 📬 API Usage

### 🙋‍♂️ User
#### GET All Users

```http
   GET /api/users
```
#### GET User by ID

```http
  GET /api/users/${id}
```
#### POST User

```http
   POST /api/users
```

| Body          | Type       | Description                                    |
| :-------------- | :-------- | :------------------------------------------ |
| `username`         | `string`  | **Required**. Enter username   |
| `email`     | `string`  | **Required**. Enter email          |

#### DELETE User By ID

```http
  DELETE /api/users/${id}
```

#### PUT User by ID

```http
   PUT /api/users/${id}
```
| Body          | Type       | Description                                    |
| :-------------- | :-------- | :------------------------------------------ |
| `username`         | `string`  | **Required**. Enter username   |
| `email`     | `string`  | **Required**. Enter email          |

#### GET User Notes

```http
   GET /api/users/${id}/notes
```


### 📝 Note
#### GET All Notes

```http
   GET /api/notes
```
#### GET Note by ID

```http
  GET /api/notes/${id}
```
#### POST Note

```http
   POST /api/notes
```

| Body          | Type       | Description                                    |
| :-------------- | :-------- | :------------------------------------------ |
| `userid`         | `number`  | **Required**. Enter userid   |
| `title`         | `string`  | **Required**. Enter title   |
| `content`     | `string`  | **Required**. Enter content          |

#### DELETE Note By ID

```http
  DELETE /api/notes/${id}
```

#### PUT Note by ID

```http
   PUT /api/notes/${id}
```
| Body          | Type       | Description                                    |
| :-------------- | :-------- | :------------------------------------------ |
| `userid`         | `number`  | **Required**. Enter userid   |
| `title`         | `string`  | **Required**. Enter title   |
| `content`     | `string`  | **Required**. Enter content          |

#### GET Notes by UserID

```http
   GET /api/notes/user/${id}
```
