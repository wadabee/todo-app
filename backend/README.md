# バックエンド

## 技術スタック

### 開発技術

- TypeScript
- Express：Web アプリケーションフレームワーク
- tsoa：OpenAPI 対応の Web アプリケーションフレームワーク（Express と組み合わせて利用）
- Prisma：ORM + DB Migration
- nodemon：ホットリロード用
- Swagger + Redoc：API ドキュメントの自動生成

### 実行環境

- Docker + Docker Compose
- PostgreSQL

### テスト
- Jest：テスティングフレームワーク
- Supertest：APIテスト用

## API ドキュメント

開発環境を起動し、以下の URL へアクセス。  
Swagger(API 実行可能) http://localhost:8000/docs  
Redoc(見やすいレイアウト) http://localhost:8000/redoc

## 開発環境作成

### 前提条件

以下がインストールされていること。

- Node.js（nvm 経由でのインストールを推奨）
- Docker
- Docker Compose

※Windows の場合は WSL2 推奨

### 初期設定

- モジュールインストール

```Bash
npm ci
```

- Prisma クライアント生成

```bash
npx prisma generate
```

### Docker の操作

開発環境は Docker Compose を利用して起動すること。

- 環境の起動

```Bash
# 環境立ち上げ（標準出力する場合は、-dを取る）
docker-compose up -d

# 再ビルドして実行（node_modulesの更新を行った場合）
docker-compose up --build
```

- 環境の停止

```bash
# DBを初期化したくない場合
docker-compose down

# DBを初期化したい場合
docker-compose down -v
```

## PRISMA の操作

- Migration の実行  
  DDL を自動生成し、DB へ適用する。

```Bash
npx prisma migrate dev --name some_message
```

- DB への適用  
  既に Migration ファイルが存在する場合は、DB へ適用する。

```bash
npx prisma db push
```

## 動作確認

```bash
# DBのユーザデータ取得
curl -X GET http://localhost:8000/users

# DBにユーザデータ追加
curl -d "name=someName" -X POST http://localhost:8000/users

```

## テストについて

### テストの事前準備
npmのグローバル領域にCLIをインストール  
※環境情報の切り替えを実施
```bash
npm install -g dotenv-cli
```

### テスト方針
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



