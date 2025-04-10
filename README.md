# dashi-client

<div align="center">
  <img src="https://github.com/sohosai/dashi-client/blob/main/assets/dashi.svg" width="300px" height="300px" />
</div>

## dashi

https://dashi.sohosai.com

## 開発環境

### 開発環境の構築

#### 1. `.env`と`.env.sentry-build-plugin`

シークレットな情報のため、詳細はvaultwardenを参照

#### 2. `pnpm i`

以下のコマンドを実行して、依存libraryをinstall

> [!WARNING]
> package managerに`pnpm`を使用してください。

```sh
pnpm i
```

#### 3. playwriteのinstall

> [!WARNING]
> NixOSユーザは失敗しますが、特に問題はないので無視してください。

```sh
npx playwright install chromium --with-deps
```

#### 4. `pnpm run dev`

以下のコマンドを実行して、ローカルサーバの起動

```sh
pnpm run dev
```

### storybookの起動

```sh
pnpm run storybook
```

## 本番環境

### 本番環境の構築

#### 1. docker-compose up (prod)

```sh
docker-compose -f prod.compose.yaml up -d
```
