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
        // font awesome
        badge: 'data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJyYWRpYXRpb24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1yYWRpYXRpb24gZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zMjguMiAyNTUuOGgxNTEuNmM5LjEgMCAxNi44LTcuNyAxNi4yLTE2LjgtNS4xLTc1LjgtNDQuNC0xNDIuMi0xMDIuNS0xODQuMi03LjQtNS4zLTE3LjktMi45LTIyLjcgNC44TDI5MC40IDE4OGMyMi42IDE0LjMgMzcuOCAzOS4yIDM3LjggNjcuOHptLTM3LjggNjcuN2MtMTIuMyA3LjctMjYuOCAxMi40LTQyLjQgMTIuNC0xNS42IDAtMzAtNC43LTQyLjQtMTIuNEwxMjUuMiA0NTJjLTQuOCA3LjctMi40IDE4LjEgNS42IDIyLjRDMTY1LjcgNDkzLjIgMjA1LjYgNTA0IDI0OCA1MDRzODIuMy0xMC44IDExNy4yLTI5LjZjOC00LjMgMTAuNC0xNC44IDUuNi0yMi40bC04MC40LTEyOC41ek0yNDggMzAzLjhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDgtNDggMjEuNS00OCA0OCAyMS41IDQ4IDQ4IDQ4em0tMjMxLjgtNDhoMTUxLjZjMC0yOC42IDE1LjItNTMuNSAzNy44LTY3LjdMMTI1LjIgNTkuN2MtNC44LTcuNy0xNS4zLTEwLjItMjIuNy00LjhDNDQuNCA5Ni45IDUuMSAxNjMuMyAwIDIzOS4xYy0uNiA5IDcuMSAxNi43IDE2LjIgMTYuN3oiPjwvcGF0aD48L3N2Zz4=',
        icon: 'https://join.misskey.page/files/images/imports/2019/03/forTwitter_ico_1231.webp?v=1.0.0',
        image: 'https://join.misskey.page/files/images/imports/2020/05/DIAGONAL_0001_BURST20200317114730908_COVER.webp?v=1.0.0',
        silent: false
    })
})

