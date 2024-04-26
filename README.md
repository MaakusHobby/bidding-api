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

- POSTGRES_USER=postgres
- POSTGRES_PASSWORD=postgres
- PGADMIN_DEFAULT_PASSWORD=postgres
- PGADMIN_DEFAULT_EMAIL=sampleemail@gmail.com

Execute psql on command line:

```sh
docker exec -it docker-db-1 psql -U postgres -W postgres
```
