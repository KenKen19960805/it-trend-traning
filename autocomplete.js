$(function() {
    var data = [
        {
            label: 'youtube', 
            value: 'youtube', 
            mylink: 'https://www.youtube.com/',
        },
        {
            label: 'jojo', 
            value: 'jojo', 
            mylink: 'http://jojo-animation.com/',
        },
        {
            label: 'it-trend', 
            value: 'it-trend', 
            mylink: 'https://it-trend.jp/',
        },
        {
            label: 'list-finder', 
            value: 'list-finder', 
            mylink: 'https://promote.list-finder.jp/',
        },
        {
            label: 'sales-doc', 
            value: 'sales-doc',
            mylink: 'https://promote.sales-doc.com/lp/01/',
        },
        {
            label: 'biz-play', 
            value: 'biz-play', 
            mylink: 'https://biz-play.com/',
        },
        {
            label: 'innovation', 
            value: 'innovation', 
            mylink: 'https://www.innovation.co.jp//',
        },
    ];
    
    $('.search-input').autocomplete({
        source: data,
        select: function(event, ui) {
            location.href = ui.item.mylink;
            return false;
        }
    });

    $(".btn-submit").click(function(){
        // ここにインスタンスオブジェクトを取得し表示する処理
    });
});