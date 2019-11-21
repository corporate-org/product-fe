
# product-fe

This is a product listing front-end. It is made up of two parts: a client package and a server
package. The client package is a React app and is served from `/`. The server package acts as an API gateway and forwards api requests from the client on the `/api` endpoint to the base url specified by the `PRODUCT_BE_SERVER_URL` environment variable.

This package is intended to be used with the `product-be` package.

## Configuration

The app accepts database configuration via these enviornmental variables:
| Variable | Description |
|--|--|
| `PRODUCT_BE_SERVER_URL` | The URL to access the `product-be` service. |
| `PORT` | The port number the server should be exposed on. It defaults to `8080`. |


## Running Locally (React dev Server)

You can run the `product-fe` package in development mode with the following 2 commands in differnet terminals:


```
# Start the server
$ cd server
$ PRODUCT_BE_SERVER_URL="http://localhost:8080" PORT=3001 node bin/www
```
```
# Start the React dev server
$ cd client
$ npm start
```
This assumes the `product-be` is running on `localhost` on port `8080`. The `product-fe` server will be running on port 3001 and the React dev server will be running on port 3000.
