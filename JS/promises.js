const pages = {
    '/users'        : [
        { id: 1, username: 'Bilbo' },
        { id: 5, username: 'Esmerelda' }
    ],
    '/users/1'      : {
        id        : 1,
        username  : 'Bilbo',
        upvotes   : 360,
        city      : 'Lisbon',
        topPostId : 454321
    },
    '/users/5'      : {
        id       : 5,
        username : 'Esmerelda',
        upvotes  : 571,
        city     : 'Honolulu'
    },
    '/posts/454321' : {
        id    : 454321,
        title :
            'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
    },
    '/about'        : 'This is the about page!'
};


const newRequest = function(url) {
    return new Promise((resolve, reject) => {
        (url == '/users') ? resolve(pages) : reject()
    })
}


newRequest('/users')
.then((res) => {
    const id = res['/users'][0].id
    console.log(`Hello ${res['/users'][0].username}`)
    return {fullResponse: res, id}
})
.then((res) => {
    console.log(`Hello ${res.fullResponse[`/users/${res.id}`].username} ${res.fullResponse[`/users/${res.id}`].city}`)
})
.catch((err) => {
    console.log("Invalid URL")
})
