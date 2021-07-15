$(function() {
    var datas = [
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
    
    $('#search-input').autocomplete({
        // autocompleteを表示し、選択されたvalueのmylinkを、$('#btn-submit')の
        source: datas,
        select: function(event, ui) {
            $('#btn-submit').attr("href", (ui.item.mylink));
            return true;
        }
    })
});