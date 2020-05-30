# マシュマロ配信支援ツール（仮）
[![動作デモ](https://drive.google.com/uc?id=1RtjFXpPMXOGBBnpf1xxfLRBn6WLj85d1)](https://www.youtube.com/watch?v=QxS2tCDDrvk)  
[YouTube - 動作デモ](https://www.youtube.com/watch?v=QxS2tCDDrvk)  
マシュマロ配信で，ダウンロードフォルダがマシュマロの画像で埋まる・画像を管理するのが面倒といった問題を軽減してくれるツールです。  
やることは，このソフト上で行われるダウンロードを問答無用で指定のファイルにDLする~~だけ~~です。  
v0.2から：  
レシートマロ対策+αのためにOBSでウィンドウキャプチャする用のマシュマロビュアーを実装しました。画像をOBSに取り込んで使うより場合によっては便利だと思います。もちろん，画像のDLもされるのでシンプルに扱うこともできます。  
[![動作デモv0.2](https://drive.google.com/uc?id=1JVO93O5G6bDRhM5cBDmB9ijOBZea_BUx)](https://drive.google.com/uc?id=1JVO93O5G6bDRhM5cBDmB9ijOBZea_BUx)

# ダウンロード
[Releaseページ](https://github.com/hantabaru1014/marshmallow-obs-assistant/releases)から最新のzipをダウンロードして，解凍してご使用ください。  
v0.2 - [直接ダウンロード](https://github.com/hantabaru1014/marshmallow-obs-assistant/releases/download/v0.2/marshmallow-obs-assistant_v0.2.zip)

# 使い方
1. ソフトを起動したら，マシュマロのサイトが開かれると思うのでログインして，受信箱を表示してください。
2. 「食べる」（本来は「画像ダウンロード」となっている所）を押すと，exeのあるフォルダにdl-marshmallow.pngができるので，それをOBS等で表示してください。
3. あとは，「食べる」をするたびに，同じファイルに上書きされます。OBSは画像が更新されると自動でOBS上でも更新されるのでいちいちOBSに画像を入れるということをしなくても良くなるはずです。  
### ビュアーを使う場合： 
「食べる」を押すとビュアーに表示されるので，OBSのウィンドウキャプチャ機能を用いてOBSに取り込んでください。スクロールバーは無いですがスクロールできます。また，短いマロの場合は余白がグリーンバックになっているので，クロマキーをして透過してください。  
### テキストを使う場合：  
dl-marshmallow.txtにテキストで出力されます。ご自由に。

# 設定
左上のメニューの[File] → [Settings]を押すと，設定ファイルが開きます。それぞれの項目の意味は以下のとおりです。

項目 | デフォルト | 説明
--- | --- | ---
defaultUrl | `"https://marshmallow-qa.com/messages/personal"` | 開くマシュマロのサイトのURLです。受信箱以外をデフォルトで開きたい場合やサイト側の仕様変更でURLが変わった際に変更してください。
useMMView | `true` | マシュマロビュアーを使用するかどうかを設定できます。
mmviewBGColor | `"green"` | マシュマロビュアーのバックグラウンドカラーです。CSSプロパティの書き方を使用できます。
imagePath  | `""` | ダウンロード先のファイルパスです。空白だと"(exeがあるディレクトリ)/dl-marshmallow.png"の扱いになります。画像の置き場にこだわりがある場合は指定してください。絶対パスじゃないと動かないかもしれないです。
textPath | `""` | テキスト形式のダウンロード先のファイルパスです。`imagePath`と同様です。
baseDomain | `"https://marshmallow-qa.com"` | マシュマロのサイトのベースURLです。ドメインが変わった場合等に。
imageUrl | `"https://cdn.marshmallow-qa.com/system/images/{uuid}.png"` | マシュマロの画像ダウンロード先のURLです。

# その他
アイコンの画像は[こちら](https://www.stockio.com/free-icon/toasted-marshmallows)をお借りしました。
