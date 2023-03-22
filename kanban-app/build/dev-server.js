// Node.jsのrequireでインポート
const bodyParser = require('body-parser')

// `Express`アプリケーションインスタンスを受け取り関数をエクスポート
module.exports = app => {
    // HTTPリクエストのbodyの内容をJSONとして解析するようミドルウェアをインストール
    app.use(bodyParser.json())

    // TODO: APIの実装内容を追加していく
}