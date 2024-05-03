## Bidding API

This is my sample work using express js.
This application supposedly a microservice for my planned application the **Bidding App** specially for **hotwheels**.

Install dependencies

```sh
npm i
```

To start the app in dev mode:

```sh
npm run dev
```

## Database: Postgres

Run the docker compose command inside the **docker** folder:

```sh
docker compose up
```

Create a **.env** file inside docker folder and insert this key value paired data as shown (w/o the bullet):

You can change this values if you want to:

- PORT=3000

- DB_CLIENT="pg"
- DB_HOST="localhost"
- DB_USER="postgres"
- DB_PASSWORD="postgres"
- DB_NAME="bidding_db"
- DB_PORT=5432

Go to **/docker** and run docker command:

```sh
docker compose up
```
