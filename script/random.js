//ランダムな整数を4つ（0~3）を生成
var random = Math.floor(Math.random()*4);

//ランダムに生成した整数に基づきBGMを選択
//各場合に基づきYouTubeのiframeを定義
//今回はif文を使用
if(random == 0){
　var bgmIframe = '<iframe src="https://www.youtube.com/embed/q-tTJlz79_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}else if(random == 1){
    　var bgmIframe = '<iframe src="https://www.youtube.com/embed/9wsByyGJI14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}else if(random == 2){
    　var bgmIframe = '<iframe src="https://www.youtube.com/embed/djl6znXfyMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}else{ //3だった場合
    　var bgmIframe = '<iframe src="https://www.youtube.com/embed/FbZoJpRm0H4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

//ランダムに生成したBGMを表示する部分のdivを定義
var randomDiv = document.getElementById('random');

//上で定義したdivに生成したiframeを埋め込む
randomDiv.innerHTML = bgmIframe;