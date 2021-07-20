$(function() {
    var data = [
        {
            label: 'apple', 
            value: 'apple', 
            mylink: 'https://www.apple.com/jp/',
        },
        {
            label: 'biz-play', 
            value: 'biz-play', 
            mylink: 'https://biz-play.com/',
        },
        {
            label: 'bts', 
            value: 'bts', 
            mylink: 'https://bts-official.jp/',
        },
        {
            label: 'chrome', 
            value: 'chrome', 
            mylink: 'https://www.google.com/intl/ja_jp/chrome/',
        },
        {
            label: 'disney', 
            value: 'disney', 
            mylink: 'https://www.disney.co.jp/',
        },
        {
            label: 'euro 2020', 
            value: 'euro 2020', 
            mylink: 'https://www.uefa.com/uefaeuro-2020/e-euro-2021/',
        },
        {
            label: 'usj', 
            value: 'usj', 
            mylink: 'https://www.usj.co.jp/web/ja/jp/',
        },
        {
            label: 'super sonic', 
            value: 'super sonic', 
            mylink: 'https://supersonic2020.com/',
        },
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
            label: 'innovation', 
            value: 'innovation', 
            mylink: 'https://www.innovation.co.jp//',
        },
    ];
    
    $('#search-form__input').autocomplete({
        // autocompleteを表示し、選択されたvalueのmylinkを、$('#btn-submit')のhrefリンクに置き換える
        source: data,
        select: function(event, ui) {
            $('#search-form__submit').attr("href", (ui.item.mylink));
            return true;
        }
    })
});