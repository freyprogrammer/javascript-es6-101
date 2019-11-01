const posts = [
    {title: "Post One",body: "This is post one"},
    {title: "Post Two",body: "This is post two"}
    ];
    
    function getPosts(){
        //Callback setTimeOut
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
               output += `<li>${post.title}: ${post.body}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }
    
    function createPosts(post){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                const error = false;
                if(!error){
                    resolve();
                }else {
                    reject("Error");
                }
            }, 3000);    
        });
        
    }

    // createPosts({title:"Post Three", body:"This is post three"}).then(getPosts).catch(err => console.log("error something went wrong"));

    //promise.all
    const promise1 = Promise.resolve('Promise One');
    const promise2 = "Promise Two";
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'Promise Three')
    });

    Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
    