let genres = []
let shelves = []

const shelfHTML = document.querySelector(".shelves");
function render_books() {
    let bookTemplate = shelves.map((b) =>
        `
        <div class = "section" style = "background-color: ${b.color};">
            <h2> ${b.name} </h2>
            <a href = ${b.link}> <img src = ${b.image}></img></a>
            <h3> by ${b.author} </h3>
            <h3> ${genres[b.genre]} </h3>
            <h3> ${b.publish} </h3>
        </div>
        `  
    );

    shelfHTML.innerHTML = bookTemplate;
}

const endpoint = 'https://randumbguy1.github.io/data.json'
fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
        genres = json.genres;
        shelves = json.books;
        render_books();
    })

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var genre = document.getElementById('genre').value;
    var author = document.getElementById('author').value;
    var publish = document.getElementById('publish').value;
    var image = document.getElementById('image').value;
    var link = document.getElementById('link').value;
    var color = document.getElementById('color').value;

    shelves.push(
        {
            "name": name,
            "genre": genre,
            "author": author,
            "publish": publish,
            "image": image,
            "link": link,
            "color": color
        }
    )

    render_books()
});