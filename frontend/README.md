# フロントエンド

## 技術スタック

### 開発技術

- TypeScript
- React：フロントエンドフレームワーク
- MUI：マテリアルデザインのフレームワーク
- axios：HTTP クライアント
- SWR：データ取得用ライブラリ（axios と組み合わせて利用）
- AG Grid：データテーブルライブラリ
- MSW：モック用ライブラリ

### 実行環境

- Node.js

### テスト

- Jest：テスティングフレームワーク

## 開発環境作成

### 前提条件

以下がインストールされていること。

- Node.js（nvm 経由でのインストールを推奨）
  ※Windows の場合は WSL2 推奨

### 初期設定

- モジュールインストール

```Bash
npm ci
```

## 起動方法

```bash
# 通常起動
npm start

# MSWを利用したモックで起動
npm run mock
```

## テストについて

work in progress
