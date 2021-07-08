$(function() {
    var data = [
        'accepts',
        'action_name',
        'add',
        'add_column',
        'add_index',
        'add_timestamps',
        'after_create',
        'after_destroy',
        'after_filter',
        'all',
    ];
    
    $('.search-input').autocomplete({
        source: data,
        autoFocus: true,
        delay: 300,
        minLength: 1,
    });
});