const push = {
    registered: Notification.permission !== 'denied' && Notification.permission !== 'default'
}

function display(text) {
  document.getElementById('display').insertAdjacentHTML('<p>${text}</p>')
}

document.getElementById('register').addEventListener('click', () => {
    Notification.requestPermission()
})

document.getElementById('not1').addEventListener('click', () => {
    try {
    new Notification('Notification 1', {
        // tag: 'not1',
        body: 'body am',
        // badge: 'https://determined-turing-7306bf.netlify.app/mi.svg',
        icon: 'https://join.misskey.page/files/images/imports/2019/03/forTwitter_ico_1231.webp?v=1.0.0',
        // image: 'https://determined-turing-7306bf.netlify.app/haranomachi.webp',
        silent: false
    })
    } catch (e) {
        display(e)
    }
})

