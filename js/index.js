fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        return res;
    })
    .then((res) => {
        let body = '';
        for (let i = 0; i < res.length; i++) {
        body += `<div><h2>${res[i].title}</h2><p>${res[i].body}</p></div>`;
        document.body.innerHTML = body;
        }
    })
    .catch((err) => {
        throw Error('YYYPS!!!')
    })



    // Вариант с помощью async/await:

// const getPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await response.json();
//     let body = '';
//     for (let i = 0; i < result.length; i++) {
//     body += `<div><h2>${result[i].title}</h2><p>${result[i].body}</p></div>`;
//     document.body.innerHTML = body;
//     }
// }
// getPosts()