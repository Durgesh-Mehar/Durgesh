const posts = [

   {title:"post one",body : "this is post one"},
   {title:"post two",body : "this is post two"}
];

function getPost(){

  setTimeout(()=>{

      let output = ""

      posts.forEach((post)=>{

        output += `<li>${post.title}</li>`

      })

      document.body.innerHTML = output;

  },3000)

}

function createPost(post){

  return new Promise((resolve,reject)=>{

      setTimeout(()=>{

         posts.push(post);

      const error = false;

      if(!error){

          resolve();

      }else{

          reject(`error: something went wrong`);

      }

      },1000)

  })

 }

 function deletePost(){

  return new Promise((resolve,reject)=>{

      setTimeout(()=>{

          posts.pop();

          if(posts.length > 0){

              resolve();

          }else{

              reject("Array is empty now")

          }

      },1000)

  })

}



async function data(){
  try{
      await createPost({title:"post three",body:"this is post three"});
     await getPost();
    await deletePost();
  }
  catch(err){
   console.log(err)
  }
  
  }
  
data();

