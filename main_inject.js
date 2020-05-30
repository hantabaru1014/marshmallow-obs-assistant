// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {ipcRenderer} = require('electron');

window.addEventListener('load', () => {
    const $ = require('jquery');

    $(function(){
        //https://marshmallow-qa.com/messages/personalのページ
        $('li[data-message-uuid]').each((index, elm) => {
            let messageRoot = $(elm);
            let messageA = messageRoot.find('a[data-target="message.content obscene-word.content"]');
            messageRoot.find('a[download] > span').text('食べる ');

            messageRoot.find('a[download]').on('click', (e) => {
                e.preventDefault();
                const sendJson = JSON.stringify({
                    uuid: messageRoot.data('message-uuid'),
                    text: messageA.text()
                });
                ipcRenderer.send('showMM', sendJson);
                ipcRenderer.send('dlImage', sendJson);
            });
        });
        //https://marshmallow-qa.com/messages/{uuid}のページ
        $('ul[data-controller="message"]').each((index, elm) => {
            let root = $(elm);
            root.find('a[download]').on('click', (e) => {
                e.preventDefault();
                const sendJson = JSON.stringify({
                    uuid: root.data('message-uuid'),
                    text: $('.message-card__text > div').text()
                });
                ipcRenderer.send('showMM', sendJson);
                ipcRenderer.send('dlImage', sendJson);
            });
        });
    });
});