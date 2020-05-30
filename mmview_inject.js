const {ipcRenderer} = require('electron');

window.addEventListener('load', () => {
    const $ = require('jquery');

    console.log('mmview: window.onload');
    ipcRenderer.send('console', 'window.onload');
    ipcRenderer.on('reply-getGBColor', (event, arg) => {
        $('body').css({'background-color': arg});
    });
    ipcRenderer.on('changeMM', (event, arg) => {
        $('.message-card__text > div').text(arg);
        let mesCard = $('.message-card-wrapper').detach();
        $('body').append(mesCard);
    });
    $('head').append('<style type="text/css">::-webkit-scrollbar{width: 0px;}</style>');//スクロールバーを消す
    $(function(){
        if (!$('.message-card-wrapper')) return;
        let mesCard = $('.message-card-wrapper').detach();
        $('body').empty();
        $('body').removeClass();
        ipcRenderer.send('getGBColor');
        $('body').append(mesCard);
        $('-webkit-scrollbar').css({'display': 'none'});
        // $('.message-card').css({
        //     'position': 'fixed',
        //     'box-sizing': 'content-box',
        //     'top': '0',
        //     'left': '0',
        //     // 'width': '100vw',
        //     // 'height': 'auto',
        //     // 'min-height': '100vh'
        // });
    });
});