# SPA Tutorial
## このプロジェクトの目的
- SPAをVanilla JSで実現するのに必要なコンポーネントを作成すること。

## SPAに必要な機能
- ルーティング機能
  - ページをリロードせずにコンテンツの切り替えを行うのに必要。
  - ブラウザの履歴の前後に対応する必要がある。
- 状態管理機能
    - 複数のコンポーネントでデータや状態を共有するのに必要。
    - ReactではContext APIやReduxが使用されている。
- コンポーネント機能
    - UIやその他コンテンツに共通する機能を定義するのに必要。
    - ルーティングや状態管理機能との繋がりを予め定義しておき、新たなコンテンツやUIを作成する際の煩雑な作業を減らす目的。
- 非同期通信機能
    - その都度ページ自体を更新せずに、必要な情報だけをサーバーから取得するのに必要。
    - Ajax、Fetch APIなどを利用するのが一般的。

この他にも、セキュリティやアクセシビリティ、パフォーマンスの最適化などの処理が機能として挙げられるが、それは上の4つの機能がある程度実装できた段階で、追加実装の有無を判断することとする。