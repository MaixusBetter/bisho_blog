//Reads HTML Elements
const formEl = $('#postCreation');
const userEl = $('input[name="userName"]');
const titleEl = $('input[name="userTitle"]');
const ideaEl = $('input[name="userIdea"]');

//Form Submision Function
function handleFormSubmit(event) {
    // Prevent the default behavior of input deletion
    event.preventDefault();
  
    //input tester
    console.log('Username:', userEl.val());
    console.log('Title:', titleEl.val());
    console.log('Idea:', ideaEl.val());

    // Object to store post meta data
    let posts ={Topic:[], Post:[], User:[]};

    //Checks if post meta data fields are complete
    if(!userEl.val()||!titleEl.val()||!ideaEl.val()){
      alert("All Fields Must Be Full!");
    }else{
    
    //Reads any prior posts
    const postscheckJSON = localStorage.getItem("posts_data")
    if(postscheckJSON){
      //Converts post meta data string back into an object
      const pageHistory = JSON.parse(postscheckJSON);

      //pushes post history back in, to prevent being over written
      posts.User.push(pageHistory.User);
      posts.Topic.push(pageHistory.Topic);
      posts.Post.push(pageHistory.Post);

    }
      //pushed the new post onto he post list
      posts.User.push($ (userEl).val());
      posts.Topic.push($ (titleEl).val());
      posts.Post.push($ (ideaEl).val());
    

  //Storage of posts check
  console.log(posts.User);

  console.log(posts.Topic);

  console.log(posts.Post);



//Assigns a unique Identifier and loads it into the local storage
const timestamp =Date.now();
const postsJSON = JSON.stringify(posts);
localStorage.setItem(`posts_data_${timestamp}`, postsJSON);
  }




// Clear input fields
$('input[type="text"]').val('');
$('input[type="checkbox"]').prop('checked', false);
}

//Registers the submit button from html
formEl.on('submit', handleFormSubmit);
