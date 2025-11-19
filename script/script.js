const loadPosts = async () => {
    const postContainer = document.querySelector(".post");

    try {
        const response = await fetch("posts.json");
        const posts = await response.json();

        let html = "";

        for (let post of posts) {
            // Fetch the post's HTML file
            const postResponse = await fetch(post.file);
            const postHTML = await postResponse.text();

            html += `
                <div class="post-preview">
                    <h2 id="post-title">#${post.id}_${post.title}</h2>
                    <span class="date">${post.date} — ${post.time}</span>
                    <div class="post-body">${postHTML}</div>
                </div>
            `;
        }

        postContainer.innerHTML = html;
    } catch (err) {
        console.error("Error:", err);
    }
};
loadPosts();

const loadQuotes = async () => {
    const quotesContainer = document.querySelector(".quotes");

    try {
        const response = await fetch("quotes.json");
        const quotes = await response.json();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        const html = `
            <div class="quotes">
                <div id="quote">${randomQuote.quote}</div>
                <div class="quote-author">~ ${randomQuote.by}</div>
            </div>
        `;

        quotesContainer.innerHTML = html;
    } catch (err) {
        console.error("Error:", err);
    }
};
loadQuotes();


// function toggleDarkMode() {
//     var element = document.body;
//    element.classList.toggle("dark-mode");
// }