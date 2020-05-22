# marshmallow-obs-assistant
[![動作デモ](https://img.youtube.com/vi/QxS2tCDDrvk/0.jpg)](https://www.youtube.com/watch?v=QxS2tCDDrvk)  
マシュマロ配信で，ダウンロードフォルダがマシュマロの画像で埋まる・画像を扱うのが面倒といった問題を軽減してくれるツールです。  
やることは，このソフト上で行われるダウンロードを問答無用で指定のファイルにDLするだけです。  

# ダウンロード
[Releaseページ](https://github.com/hantabaru1014/marshmallow-obs-assistant/releases)から最新のzipをダウンロードして，解凍してご使用ください。  
v0.1 - [直接ダウンロード](https://github.com/hantabaru1014/marshmallow-obs-assistant/releases/download/v0.1/marshmallow-obs-assistant_v0.1.zip)

# 使い方
1. ソフトを起動したら，マシュマロのサイトが開かれると思うのでログインして，受信箱を表示してください。
2. 「画像ダウンロード」を押すと，このフォルダにdl-marshmallow.pngができるので，それをOBS等で表示してください。
3. あとは，「画像ダウンロード」をするたびに，同じファイルに上書きされます。OBSは画像が更新されると自動でOBS上でも更新されるのでいちいちOBSに画像を入れるということをしなくても良くなるはずです。


# 設定
左上のメニューの[File] → [Settings]を押すと，設定ファイルが開きます。それぞれの項目の意味は以下のとおりです。

項目 | 説明
--- | ---
url       | 開くマシュマロのサイトのURLです。受信箱以外をデフォルトで開きたい場合やサイト側の仕様変更でURLが変わった際に変更してください。
imagePath | ダウンロード先のファイルパスです。空白だと"(exeがあるディレクトリ)/dl-marshmallow.png"の扱いになります。画像の置き場にこだわりがある場合は指定してください。絶対パスじゃないと動かないかもしれないです。

# その他
アイコンの画像は[こちら](https://www.stockio.com/free-icon/toasted-marshmallows)をお借りしました。
