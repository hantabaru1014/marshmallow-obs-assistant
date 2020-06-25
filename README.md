# マシュマロ配信支援ツール（仮） 
[![動作デモv0.2](https://drive.google.com/uc?id=1JVO93O5G6bDRhM5cBDmB9ijOBZea_BUx)](https://www.youtube.com/watch?v=o7OTvmbbBSA)  
[YouTube - 動作デモv0.2](https://www.youtube.com/watch?v=o7OTvmbbBSA)  
マシュマロ配信で，ダウンロードフォルダがマシュマロの画像で埋まる・画像を管理するのが面倒といった問題を軽減してくれるツールです。  
マシュマロの「画像ダウンロード」ボタンの機能を置き換えて，OBSへのマシュマロ画像の取り込みの手間を省きます。詳しい動作は上の動画やgif，下記の使い方をご参照ください。  

# ダウンロード
[Releaseページ](https://github.com/hantabaru1014/marshmallow-obs-assistant/releases)から最新のzipをダウンロードして，解凍してご使用ください。  

# 使い方
1. ソフトを起動したら，マシュマロのサイトが開かれると思うのでログインして，受信箱を表示してください。
2. 以下のいずれかの方法で配信ソフトへの取り込みを行ってください。
### ビュアーを使う場合： 
「食べる」（本来は「画像ダウンロード」となっている所）を押すとビュアーに表示されるので，OBSのウィンドウキャプチャ機能を用いてOBSに取り込んでください。  
[マシュマロビューの使い方](https://github.com/hantabaru1014/marshmallow-obs-assistant/wiki/%E4%BD%BF%E3%81%84%E6%96%B9---%E3%83%9E%E3%82%B7%E3%83%A5%E3%83%9E%E3%83%AD%E3%83%93%E3%83%A5%E3%83%BC)  
### 画像を使う場合：
「食べる」を押すと，exeのあるフォルダにdl-marshmallow.pngができるので，それをOBS等で表示してください。  
あとは，「食べる」をするたびに，同じファイルに上書きされます。OBSは画像が更新されると自動でOBS上でも更新されるのでいちいちOBSに画像を入れるということをしなくても良くなるはずです。 
### テキストを使う場合：  
「食べる」を押すと，exeのあるフォルダのdl-marshmallow.txtにテキストで出力されます。ご自由に。

# 設定
左上のメニューの[File] → [Settings]を押すと，設定ファイルが開きます。それぞれの項目の意味は以下のとおりです。

項目 | デフォルト | 説明
--- | --- | ---
defaultUrl | `"https://marshmallow-qa.com/messages/personal"` | 開くマシュマロのサイトのURLです。受信箱以外をデフォルトで開きたい場合やサイト側の仕様変更でURLが変わった際に変更してください。
mmview.useMMView | `true` | マシュマロビュアーを使用するかどうかを設定できます。
mmview.mmviewBGColor | `"green"` | マシュマロビュアーのバックグラウンドカラーです。CSSプロパティの書き方を使用できます。
updateChecker.checkUpdate | `true` | 簡易アップデートチェック機能の有効・無効を指定します。
updateChecker.updateUrl | `"https://github.com/hantabaru1014/marshmallow-obs-assistant/releases/latest"` | 簡易アップデートチェックに使用するGithubのrelease/latestのURLです。
imagePath  | `""` | ダウンロード先のファイルパスです。空白だと"(exeがあるディレクトリ)/dl-marshmallow.png"の扱いになります。画像の置き場にこだわりがある場合は指定してください。絶対パスじゃないと動かないです。
textPath | `""` | テキスト形式のダウンロード先のファイルパスです。`imagePath`と同様です。
baseDomain | `"https://marshmallow-qa.com"` | マシュマロのサイトのベースURLです。ドメインが変わった場合等に。
imageUrl | `"https://cdn.marshmallow-qa.com/system/images/{uuid}.png"` | マシュマロの画像ダウンロード先のURLです。

# その他
アイコンの画像は[こちら](https://www.stockio.com/free-icon/toasted-marshmallows)です。
