const { ipcRenderer } = require('electron');

window.addEventListener('load', () => {
  const $ = require('jquery');

  ipcRenderer.on('reply-getGBColor', (event, arg) => {
    $('body').css({ 'background-color': arg });
  });
  ipcRenderer.on('changeMM', (event, arg) => {
    $('.message-card__text > div').html(arg);
    $('.message-card-wrapper').css({ 'display': 'block' });
    const mesCard = $('.message-card-wrapper').detach();
    $('body').append(mesCard);
    $(window).scrollTop(0);
  });
  ipcRenderer.on('hideMM', (event, arg) => {
    $('.message-card-wrapper').css({ 'display': 'none' });
  });
  $('head').append('<style type="text/css">::-webkit-scrollbar{width: 0px;}</style>');//スクロールバーを消す
  $(function () {
    if (!$('.message-card-wrapper')) return;
    const mesCard = $('.message-card-wrapper').detach();
    $('body').empty();
    $('body').removeClass();
    ipcRenderer.send('getGBColor');
    $('body').append(mesCard);

    const text = mesCard.find('.message-card__text');
    const textDiv = mesCard.find('.message-card__text > div[data-obscene-word-target]').detach();
    text.empty();
    text.append(textDiv);
  });
});