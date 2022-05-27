async function call(){
    const url = 'https://628f5a210e69410599dadd89.mockapi.io/api/v1/users'
    let response = await fetch(url)//viene eseguita in maniera asincrona ma deve aspettare il fetch

    let json = await response.json() //anche il metodo json è asincrono
    
    let {avatar,name} = json[0]

    console.log(avatar, name)
}

call()