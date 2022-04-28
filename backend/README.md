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
* APIテストはDBを利用して実施する（APIの実行結果を担保）
* RepositoryのテストはDBを利用して実施する（意図しているDB操作ができていることを担保）
* その他のテストはMockを活用しUnitレベルで確認  

### 各テストの実行方法
APIとRepositoryのテストは、Docker-ComposeによるDBの起動が必要なので注意。  
PrismaのGenerate処理が失敗する場合は、`docker-compose down`でDBを初期化すること。  
DBはVolumeを利用していないため、コンテナを削除する度に削除されるので注意。  

```bash
# テスト用のDB起動
# DBマイグレーションでエラーになったら再度実行（DB起動が間に合っていない）
npm run docker:up:test

# テスト用DBの初期化
npm run docker:restart:test

# 実行時間：Unit < Repo < API < ALL
# 全てのテストを実行（あらかじめDBを起動しておくこと）
npm run test:all

# DBを利用しないUnitテストを実行
npm run test:unit

# Repositoryのテストを実行（あらかじめDBを起動しておくこと）
npm run test:repo

# APIのテストを実行（あらかじめDBを起動しておくこと）
npm run test:api

```



