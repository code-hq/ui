# CodeHQ UI

## Getting Started

To start the development environment via docker:

```bash
docker-compose up -d
```

This will start a development server at [http://localhost:8080]().

Any changes to the project source code will be automatically compiled
and reloaded in the browser.

## Linting Files

Linting happens automatically whenever a file is saved, however you can
explicitly lint **and automatically fix** the source code too.

```bash
docker-compose exec app npm run lint
```

## Running Tests

### Unit Tests

```bash
docker-compose exec app npm run test:unit
```

### End-to-End Tests

```bash
docker-compose exec app npm run test:e2e
```

## Building for Production

TODO
