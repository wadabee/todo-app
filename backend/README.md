# バックエンド

## 技術スタック
### 開発技術
* TypeScript
* Express：Webアプリケーションフレームワーク
* Prisma：ORM + DB Migration
* nodemon：ホットリロード用

### 実行環境
* Docker + Docker Compose
* PostgreSQL

## Dockerの操作
* 環境の起動
```Bash
# 環境立ち上げ（標準出力する場合は、-dを取る）
docker-compose up -d

# 再ビルドして実行（node_modulesの更新を行った場合）
docker-compose up --build
```

* 環境の停止
```bash
# DBを初期化したくない場合
docker-compose down

# DBを初期化したい場合
docker-compose down -v
```


## PRISMAの操作

* Clientの生成
```Bash
npx prisma generate
```

* Migrationの実行
```Bash
npx prisma migrate dev --name some_message
```

## 動作確認
```bash
# 静的データ取得
curl -X GET http://localhost:3000/users/static

# DBのユーザデータ取得
curl -X GET http://localhost:3000/users

# DBにユーザデータ追加
curl -d "name=someName" -X POST http://localhost:3000/users

```


