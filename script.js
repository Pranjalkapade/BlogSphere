function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title === "" || content === "") {
    alert("Please enter both title and content.");
    return;
  }

  const postSection = document.getElementById("posts");

  const post = document.createElement("div");
  post.classList.add("post");

  const postTitle = document.createElement("h3");
  postTitle.textContent = title;

  const postContent = document.createElement("p");
  postContent.textContent = content;

  post.appendChild(postTitle);
  post.appendChild(postContent);

  postSection.prepend(post); // नवीन पोस्ट वरती येईल

  // Reset form
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
