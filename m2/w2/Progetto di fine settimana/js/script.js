fetch('../json/users.json')
.then(res => res.json())
.then((res) => {
    let comments = document.querySelector('#comments')
    for(user of res){
        let div = document.createElement('div')
        div.classList.add('container', 'm-3', 'border-bottom', 'border-secondary')
        let avatar = document.createElement('img')
        avatar.classList.add('avatar')
        avatar.src = user.profileURL
        let name = document.createElement('h3')
        name.classList.add('username')
        name.innerHTML = user.username + ' ' + user.email
        let p = document.createElement('p')
        p.classList.add('comment')
        p.innerHTML = 'Nice!'
        div.append(avatar, name, p)
        comments.append(div)

    }
})