const controller = async file => {
    const request = await fetch(file);
    const response = await request.json();

    return response;
}

controller('json/user.json')
    .then(data => console.log(data));