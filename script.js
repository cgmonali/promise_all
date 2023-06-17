// Simulated user object
const user = {
    name: 'monal',
    lastActivityTime:  new Date(),
    posts: [],
  };
  
  // Function to create a post
  function createPost(rpost) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = { rpost };
        user.posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to update lastActivityTime
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  // Function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.posts.length > 0) {
          const deletedPost = user.posts.pop();
          resolve(deletedPost);
        } else {
          reject('ERROR: No posts to delete');
        }
      }, 1000);
    });
  }


  console.log('Before creating the posts, user lastActivityTime:', user.lastActivityTime);


  const postPromises = Promise.all([
    createPost('Post 1'),
    createPost('Post 2'),
    createPost('Post 3'),
    
  ]);

  const activityUpdatePromise = updateLastUserActivityTime();


  // Promise.all to handle the asynchronous operations
  Promise.all([postPromises, activityUpdatePromise])
    .then(([createdPost]) => {
      console.log('After creating the posts lastActivityTime:', user.lastActivityTime);
      console.log('Posts:',user.posts);
      
      
      return deleteLastPost();
    })
    .then((deletedPost) => {
      console.log('Deleted Post:', deletedPost);
      console.log('New Posts:', user.posts);
    })
    .catch((error) => {
      console.log(error);
    }).then(()=>console.log('USER last activity time',user.lastActivityTime));
  