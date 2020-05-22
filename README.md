# marshmallow-obs-assistant
マシュマロ配信で，ダウンロードフォルダがマシュマロの画像で埋まる・画像を扱うのが面倒といった問題を軽減してくれるツールです。  
やることは，このソフト上で行われるダウンロードを問答無用で指定のファイルにDLするだけです。  

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
