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
