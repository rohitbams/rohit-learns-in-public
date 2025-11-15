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
                    <h2 id="post-title">#${post.id} ${post.title}</h2>
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
