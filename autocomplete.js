$(function() {
    var data = [
        // 'java',
        // 'ruby',
        // 'add',
        // 'python',
        // 'javascript',
        // 'php',
        // 'laravel',
        // '',
        // 'after_filter',
        // 'all',
        {label: 'youtube', value: 'youtube', mylink: 'https://www.youtube.com/'},
        {label: 'jojo', value: 'jojo', mylink: 'http://jojo-animation.com/'},
    ];
    
    $('.search-input').autocomplete({
        source: data,
        autoFocus: true,
        delay: 300,
        minLength: 1,
    });

    $(".btn-submit").click(function(){
        // ここにインスタンスオブジェクトを取得し表示する処理
        alert("クリックされました");
    }); 
});