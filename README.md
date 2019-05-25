CodeHQ UI
===

The CodeHQ front end application.

## Getting Started

### Run the production containers

Run the containers in the background.

```bash
$ docker-compose -f docker-compose.prod.yml up -d --build
```

Once complete you should be able to access the application here [http://localhost:8080]().

## Development

### Configure Environment Variables

Run the following command from the projects root directory.

```bash
$ echo "DEV_UID=$(id -u)" > .env
```

This ensures that any files created in mounted directories have the correct permissions.

### Run the development containers

Run the containers in the background.

```bash
$ docker-compose up -d
```

Once complete you should be able to access the application here [http://localhost:8080]().

Any changes to the project source code will be automatically compiled and reloaded in the browser.

## Linting Files

Linting happens automatically whenever a file is saved, however you can
explicitly lint **and automatically fix** the source code too.

```bash
$ docker-compose exec app npm run lint
```

## Running Tests

### Unit Tests

```bash
$ docker-compose exec app npm run test:unit
```
