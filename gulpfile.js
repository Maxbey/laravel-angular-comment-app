var elixir = require('laravel-elixir');


elixir(function(mix) {
    mix.scripts([
        'app.js',
        'services/*.js',
        'filters/*.js',
        'controllers/*.js'
    ]);
});
