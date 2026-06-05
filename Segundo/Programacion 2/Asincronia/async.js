const URL = "https://jsonplaceholder.typicode.com/";

async function obtenerUsuarios(url) {
    try {
        const response = await fetch(url + "users");
        if (!response.ok) {
            throw new Error(`Respuesta: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.forEach((e) => console.log(e.name)));
        console.log("=".repeat(24));
    } catch (error) {
        console.error(error.message);
    }
}

obtenerUsuarios(URL);

async function obtenerPublicaciones(index, url) {
    var mail = "";
    var name = "";
    var posts = 0;

    try {
        const response = await fetch(`${url}/users/${index}`);
        if (!response.ok) {
            throw new Error(`Respuesta: ${response.status}`);
        }

        const result = await response.json();

        mail = result.email;
        name = result.name;
    } catch (error) {
        console.error(error.message);
    }

    try {
        const response = await fetch(`${url}/posts?userId=${index}`);
        if (!response.ok) {
            throw new Error(`Respuesta: ${response.status}`);
        }

        const result = await response.json();
        posts = result.length;
    } catch (error) {
        console.error(error.message);
    }

    const string = `El usuario ${name} (Email: ${mail}) ha realizado ${posts} publicaciones.`;
    console.log(string);
    console.log("=".repeat(string.length));
}

obtenerPublicaciones(3, URL);

async function obtenerDatosSimultaneos(url) {
    try {
        const [todosRes, postsRes] = await Promise.all([
            fetch(url + "todos"),
            fetch(url + "posts"),
        ]);

        if (!todosRes.ok)
            throw new Error(`Respuesta TODOs: ${todosRes.status}`);
        if (!postsRes.ok)
            throw new Error(`Respuesta posts: ${postsRes.status}`);

        const [resultTodos, resultPosts] = await Promise.all([
            todosRes.json(),
            postsRes.json(),
        ]);

        console.log(`${resultTodos.length} ${resultPosts.length}`);
    } catch (error) {
        console.error(error.message);
    }
}

obtenerDatosSimultaneos(URL);
