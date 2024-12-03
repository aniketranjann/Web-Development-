function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Fetched!!");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data Fetched!!!");
    }, 4000);
  });
}

function fetchLikesData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Like data Fetched!!");
    }, 6000);
  });
}
fetchPostData();
fetchCommentData();
fetchLikesData();

async function getBlogData() {
  try {
    console.log("Fetching Blog data...");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    // const likeData = await fetchLikesData();
    // console.log("Here is your blog data: ",  blogData );
    // console.log("Here is your comment data: ", commentData);
    // console.log("Here is your likes data: ", likeData);
    // console.log("Fetched Blog Data!!");
    const [postData, commentData, likeData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
      fetchLikesData(),
      console.log("Fetched Blog Data!!")
    ]);
    console.log(postData);
    console.log(commentData);
    console.log(likeData);
  } catch (error) {
    console.log("Failed to get blog data", error);
  }
}
getBlogData();
