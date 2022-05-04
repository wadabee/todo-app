# Backend
## Environments

### Requirements
The following must be installed.
- Docker
- Docker Compose
-  Node.js  
  Recommend: Install via version manager tool for node.js (e.g. nvm, nodebrew, etc...)

## API Reference

Launch the application and access the following URL.   
* Swagger(Executable API in Web pages) 
  * http://localhost:8000/docs  
* Redoc(Beautiful layout) 
  * http://localhost:8000/redoc


## Get started
- Install node modules

```Bash
npm ci
```

- Generate Prisma client.

```bash
npx prisma generate
```

## Application Launch
Applications are launched using Docker Compose.

- Start

```Bash
# Launch（If without "-d" option, print stdout.）
docker-compose up -d

# Rebuild and Launch（when updated node_modules）
docker-compose up --build
```

- Stop

```bash
# Don't initialize DB.
docker-compose down

# Initialize DB.
docker-compose down -v
```

## Operate Prisma

- DB Migration  
  Generate DDL and apply to DB.

```Bash
npx prisma migrate dev --name some_message
```

- Apply to DB
  If a migration file already exists, only apply to DB.

```bash
npx prisma db push
```

### Helthcheck

```bash
# Get user data from DB.
curl -X GET http://localhost:8000/users

# Register user to DB.
curl -d "name=someName" -X POST http://localhost:8000/users

```

## Test

### Requirements
Install dotenv-CLI in npm(global).  
Used to switch env.

```bash
npm install -g dotenv-cli
```

### Test Strategy
* API testing uses DB.
  * Tests the results of API execution.
* Repository testing uses DB.
  * Tests the results of CRUD.
* Unit tests uses Mock.
  * Don't use DB.

### Run Tests

*NOTE*
* If Prisma Generate fails, initialize the DB with `docker-compose down`.    
* Docker is not using Volume, DB will be initialize when remove the container.    


```bash
# DB startup for testing.
# If DB migration causes an error, run it again (DB startup is not in time).
npm run docker:up:test

# Initialize DB for testing.
npm run docker:restart:test

# Run All Tests.
# Required: DB startup for testing.
# Execution Time： Unit < Repo < API < ALL
npm run test:all

# Run Unit Tests.
npm run test:unit

# Run Repository Tests.
# Required: DB startup for testing.
npm run test:repo

# Run API Tests.
# Required: DB startup for testing.
npm run test:api

```



