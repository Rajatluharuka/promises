let lastActivityTime = new Date();
const posts = [];

// Function to create a post
function createPost(postContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { content: postContent, timestamp: new Date() };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

// Function to update the last activity time
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Function to delete the last post
function deleteLastPost() {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      const deletedPost = posts.pop();
      resolve(deletedPost);
    } else {
      reject("No posts to delete");
    }
  });
}

async function main() {
    try {
      const [post, activityTime] = await Promise.all([createPost("First Post"), updateLastUserActivityTime()]);
      console.log("Created Post:", post);
      console.log("Last Activity Time Updated:", activityTime);
      console.log("All Posts:", posts);
  
      const deletedPost = await deleteLastPost();
      console.log("Deleted Post:", deletedPost);
      console.log("Remaining Posts:", posts);
    } catch (error) {
      console.error(error);
    }
  }
  
  main();