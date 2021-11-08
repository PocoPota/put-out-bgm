//今日の日付を取得
var today = new Date();
var day = today.getDate(); //dayに今日の日付が入ってる

//各日付によってBGMのデータを定義
//今回はswitch文を使用
switch(day){
    case 1:
        var bgmIframe = '<iframe src="https://www.youtube.com/embed/q-tTJlz79_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
    case 2:
        var bgmIframe = '';
        break;
    case 3:
        var bgmIframe = '';
        break;
    case 4:
        var bgmIframe = '';
        break;
    case 5:
        var bgmIframe = '';
        break;
    case 6:
        var bgmIframe = '';
        break;
    case 7:
        var bgmIframe = '';
        break;
    case 8:
        var bgmIframe = '<iframe src="https://www.youtube.com/embed/7bIBZ6M0-tU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
    case 9:
        var bgmIframe = '<iframe src="https://www.youtube.com/embed/yqElaTjhCL0?list=OLAK5uy_kijEuZ8AFDesrdXTgLEhiDRBk6EBtgpz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
    case 10:
        var bgmIframe = '';
        break;
    case 11:
        var bgmIframe = '';
        break;
    case 12:
        var bgmIframe = '';
        break;
    case 13:
        var bgmIframe = '';
        break;
    case 14:
        var bgmIframe = '';
        break;
    case 15:
        var bgmIframe = '';
        break;
    case 16:
        var bgmIframe = '';
        break;
    case 17:
        var bgmIframe = '';
        break;
    case 18:
        var bgmIframe = '';
        break;
    case 19:
        var bgmIframe = '';
        break;
    case 20:
        var bgmIframe = '';
        break;
    case 21:
        var bgmIframe = '';
        break;
    case 22:
        var bgmIframe = '';
        break;
    case 23:
        var bgmIframe = '';
        break;
    case 24:
        var bgmIframe = '';
        break;
    case 25:
        var bgmIframe = '';
        break;
    case 26:
        var bgmIframe = '';
        break;
    case 27:
        var bgmIframe = '';
        break;
    case 28:
        var bgmIframe = '';
        break;
    case 29:
        var bgmIframe = '';
        break;
    case 30:
        var bgmIframe = '';
        break;
    case 31:
        var bgmIframe = '';
        break;
}

//ランダムに生成したBGMを表示する部分のdivを定義
var todayBgmDiv = document.getElementById('today-bgm');

//上で定義したdivに生成したiframeを埋め込む
todayBgmDiv.innerHTML = bgmIframe;