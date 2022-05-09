document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    console.log(blogObj)
    if(!blogObj.title && !blogObj.body){
        alert('please input some content')
        return;
    }else {
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("sorry something wrong")
        }
    })
}
})
const btn = document.querySelectorAll('.del');

btn.forEach(del =>{
    del.addEventListener('click',e=>{
        
        e.preventDefault()
        const deleteId = e.target.dataset.blog
        
        fetch(`/api/blogs/${deleteId}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
                location.reload()
            } else {
                alert("sorry something is wrong")
            }

        })
    })
})
