//loads the post strings from local storage.
const postContainer = document.getElementById("posts");

//Gathers all posts
function getPostsData() {
    //Array to store the posts
    const allPosts = [];
  
    // Loop through all localStorage keys that might contain post data
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
  
      // Check if the key starts with "posts_data_" key
      if (key.startsWith("posts_data_")) { 
          const postDataJSON = localStorage.getItem(key);
          const postData = JSON.parse(postDataJSON);
          allPosts.push(postData);
      }
      }
      return allPosts;
    }
  
  
  // Call the function to get all posts
  const allPosts = getPostsData();

allPosts.forEach(post => {
    const username = post.User[post.User.length - 1]; // Get latest username
    const title = post.Topic[post.Topic.length - 1]; // Get latest title
    const idea = post.Post[post.Post.length - 1]; // Get latest idea
  
    // Create HTML elements for each post
    const postDiv = document.createElement("div");
    postDiv.classList.add("post"); // Add CSS class for styling
  
    const titleEl = document.createElement("h2");
    titleEl.textContent = title;

    const usernameEl = document.createElement("h3");
    usernameEl.textContent = "Idea from: "+username;
  
    const ideaEl = document.createElement("p");
    ideaEl.textContent = idea;
  
    // Append elements to the container
    postDiv.appendChild(usernameEl);
    postDiv.appendChild(titleEl);
    postDiv.appendChild(ideaEl);
    postContainer.appendChild(postDiv);
  });
