# API using Mongo

This is a simple backend for aluraflix challenge by Alura

### This project uses:

- MongoDB
- Mongoose
- Express
- Node

## How to run

1. Open terminal
2. Execute `npm i`
3. Execute `npm run dev`

> Don't forget to create a **.env** file with the values of the variables that are in **.env.example**


## Database

> This project needs a MONGO DB URI

## Routes

##### Categories
- <localhost:PORT>/api/categories -  to get categories        -> **GET** METHOD
- <localhost:PORT>/api/categories -  to create categories      -> **POST** METHOD, body required
- <localhost:PORT>/api/categories/:id -  to update categories  -> **PATCH** METHOD, body required
- <localhost:PORT>/api/categories/:id -  to delete categories  -> **DELETE** METHOD

##### Videos
- <localhost:PORT>/api/videos -  to get videos        -> **GET** METHOD
- <localhost:PORT>/api/videos -  to create videos      -> **POST** METHOD, body required
- <localhost:PORT>/api/videos/:id -  to update videos  -> **PATCH** METHOD, body required
- <localhost:PORT>/api/videos/:id -  to delete videos  -> **DELETE** METHOD

## Examples of Json body data

#### Category
```
{
  "name": "Category name",
  "shortDescription": "short description",
  "longDescription": "long description",
  "color": "#ff00ff",
  "code": "category-code",
  "isFeatured": false
}
```

#### Videos

```
{
  "title": "video name",
  "url": "url to video",
  "poster": "image of the video",
  "category": "category-code",
  "description": "description"
}
```