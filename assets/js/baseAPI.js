var baserURL = 'http://ajax.frontend.itheima.net'
$.ajaxPrefilter(function(options) {
    options.url = baserURL + options.url
})