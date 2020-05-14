const push = {
    registered: Notification.permission !== 'denied' && Notification.permission !== 'default'
}

document.getElementById('register').addEventListener('click', () => {
    Notification.requestPermission()
})

document.getElementById('not1').addEventListener('click', () => {
    new Notification('Notification 1', {
        tag: 'not1',
        body: 'body',
        badge: 'https://raw.githubusercontent.com/joinmisskey/mk-assets/master/icons/mi.svg',
        icon: 'https://join.misskey.page/files/images/imports/2019/03/forTwitter_ico_1231.webp?v=1.0.0',
        image: 'https://join.misskey.page/files/images/imports/2020/05/DIAGONAL_0001_BURST20200317114730908_COVER.jpg?v=1.0.0',
        silent: false
    })
})

