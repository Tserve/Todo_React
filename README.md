# Todo

## 意識したこと

◆ アトミックデザインを意識して

- Atmos: 表示パターンが増えても柔軟に対応できるように構築
- molecules: 汎用性が高い共通パーツなどを担当
- organisms: サーバーとの通信やローカルストレージへのアクセスを担当。また ul タグのような li タグを複数持ってデータを表示する場合の配列型 state を所有する。
- pages: 最上位の親要素を担当

◆ パフォーマンスチューニング

- 通常の Todo を実装後にライフサイクルやコンポーネントの再レンダリング要件を考慮して不要な再レンダリングを避けるように実装

## setup

```
yarn
```

```
yarn start
```

## 作成時間

３ h
