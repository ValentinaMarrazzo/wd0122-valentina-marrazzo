import { Post } from "../interface/post"

let posts = [
  {
    id:1,
    body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
    active:true,
    type: 'politic'
},
  {
    id:2,
    body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
    active:true,
    type: 'news'
},
  {
    id:3,
    body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
    active:true,
    type: 'education'
},
  {
    id:4,
    body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title: "Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
    active:false,
    type: 'politic'
},
  {
    id:5,
    body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
    active:false,
    type: 'news'
},
  {
    id:6,
    body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
    title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
    active:false,
    type: 'education'
}
]

export function getPosts():Post[]{
  return posts
}

export function setPost(id:number, data:Partial<Post>){
  posts = posts.map(p=>p.id==id?{...p, ...data}:p)

}

export function updatePost(id:number){

posts = posts.map((p)=>{
  if(p.id == id){
    let tempP = p
    tempP.active = !tempP.active
    return tempP
  }
  return p
})

posts.forEach((e,i) =>{
  if(e.id == id){
    e.active = !e.active
  }
})
}
