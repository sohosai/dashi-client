# dashi-client

<div align="center">
  <img src="https://github.com/sohosai/dashi-client/tree/main/assets/dashi.svg" />
</div>

## 開発環境

### 開発環境の構築

1. `.env`と`.env.sentry-build-plugin`

シークレットな情報のため、詳細はvaultwardenを参照

2. `pnpm i`

以下のコマンドを実行して、依存libraryをinstall

> [!WARNING]
> package managerに`pnpm`を使用してください。

```sh
pnpm i
```

3. `pnpm run dev`

以下のコマンドを実行して、ローカルサーバの起動

```sh
pnpm i
```

## 本番環境

### 開発環境の構築

1. docker-compose up (prod)

```sh
docker-compose -f prod.compose.yaml up -d
```
