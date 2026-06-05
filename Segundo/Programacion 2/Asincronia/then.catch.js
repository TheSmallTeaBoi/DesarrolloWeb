const URL = "https://jsonplaceholder.typicode.com/";

function obtenerUsuarios(url) {
    fetch(url + "users")
        .then((response) => {
            if (!response.ok) throw new Error(`Respuesta: ${response.status}`);
            return response.json();
        })
        .then((result) => {
            result.forEach((e) => console.log(e.name));
            console.log("=".repeat(24));
        })
        .catch((error) => console.error(error.message));
}

obtenerUsuarios(URL);

function obtenerPublicaciones(index, url) {
    var mail = "";
    var name = "";
    var posts = 0;

    fetch(`${url}/users/${index}`)
        .then((response) => {
            if (!response.ok) throw new Error(`Respuesta: ${response.status}`);
            return response.json();
        })
        .then((result) => {
            mail = result.email;
            name = result.name;

            return fetch(`${url}/posts?userId=${index}`);
        })
        .then((response) => {
            if (!response.ok) throw new Error(`Respuesta: ${response.status}`);
            return response.json();
        })
        .then((result) => {
            posts = result.length;
            const string = `El usuario ${name} (Email: ${mail}) ha realizado ${posts} publicaciones.`;
            console.log(string);
            console.log("=".repeat(string.length));
        })
        .catch((error) => console.error(error.message));
}

obtenerPublicaciones(3, URL);

function obtenerDatosSimultaneos(url) {
    Promise.all([fetch(url + "todos"), fetch(url + "posts")])
        .then(([todosRes, postsRes]) => {
            if (!todosRes.ok)
                throw new Error(`Respuesta TODOs: ${todosRes.status}`);
            if (!postsRes.ok)
                throw new Error(`Respuesta posts: ${postsRes.status}`);
            return Promise.all([todosRes.json(), postsRes.json()]);
        })
        .then(([resultTodos, resultPosts]) => {
            console.log(`${resultTodos.length} ${resultPosts.length}`);
        })
        .catch((error) => console.error(error.message));
}

obtenerDatosSimultaneos(URL);
