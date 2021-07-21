// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { ipcRenderer } = require('electron');

window.addEventListener('load', () => {
  const $ = require('jquery');
  const applyScript = () => {
    //https://marshmallow-qa.com/messages/personalのページ
    $('ul.messages li.message').each((index, elm) => {
      let messageRoot = $(elm);
      if (messageRoot.attr('mma-mod')) return;
      messageRoot.attr('mma-mod', 'true');
      let messageA = messageRoot.find('a[data-target="obscene-word.content"]');
      messageRoot.find('a[download] > span').text('食べる ');

      messageRoot.find('a[download]').on('click', (e) => {
        e.preventDefault();
        const sendJson = JSON.stringify({
          uuid: messageRoot.attr('id').replace("message_", ""),
          text: messageA.html()
        });
        ipcRenderer.send('showMM', sendJson);
        ipcRenderer.send('dlImage', sendJson);
      });
    });
    //https://marshmallow-qa.com/messages/{uuid}のページ
    $('.card-body').each((index, elm) => {
      let root = $(elm);
      root.find('a[download]').on('click', function (e) {
        e.preventDefault();
        const sendJson = JSON.stringify({
          uuid: $(this).data('gtm').substr($(this).data('gtm').indexOf(":") + 1),
          text: root.parent().find('[data-target="obscene-word.content"]').html()
        });
        ipcRenderer.send('showMM', sendJson);
        ipcRenderer.send('dlImage', sendJson);
      });
      root.find('a[download] > span').text('食べる ');
    });
  }
  const genButtons = () => {
    let btnPain = $('<div></div>').css({ 'position': 'fixed', 'top': '10px', 'left': '10px' });
    let btnTemplate = $('<button></button>').css({ 'border-radius': '6px', 'padding': '8px 5px', 'margin': '3px', 'background-color': '#F3969A', 'color': '#fff' });
    let reloadBtn = btnTemplate.clone();
    reloadBtn.html('R');
    reloadBtn.on({
      'click': (e) => {
        console.log('reload');
        ipcRenderer.send('reloadMain');
      },
      'mouseenter': function (e) {
        $(this).html('ページを再読み込みする');
      },
      'mouseleave': function (e) {
        $(this).html('R');
      }
    });
    btnPain.append(reloadBtn);
    btnPain.append($('<br>'));

    let clearMMViewBtn = btnTemplate.clone();
    clearMMViewBtn.html('CM');
    clearMMViewBtn.on({
      'click': (e) => {
        ipcRenderer.send('clearMM');
      },
      'mouseenter': function (e) {
        $(this).html('ビュワーに表示しているマシュマロを消す');
      },
      'mouseleave': function (e) {
        $(this).html('CM');
      }
    });
    btnPain.append(clearMMViewBtn);

    $('body').append(btnPain);
  }

  applyScript();
  genButtons();

  const observer = new MutationObserver((mutations) => {
    applyScript();
  });
  observer.observe($('ul.list-group')[0], { childList: true, attributes: true, subtree: true });
});