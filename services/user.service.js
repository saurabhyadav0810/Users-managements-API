import { users } from "../data/users.js";
import User from "../models/user.js"
import post from "../models/post.js";
export const deleteUserService = (id) => {
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
};

export const getUsersService = async () => {
  const users = await User.find({ isActive: true });
  return users
}


export const createUserService = async (name, email, password, role) => {
  console.log("processsing data in service");

  //   const newUser = {
  //   id: Date.now().toString(),
  //   email:email,
  //   name:name,
  // };
  const newUser = await User.create({
    name,
    email,
    password,
    role
  });

  // users.push(newUser);
  console.log("users created", newUser);
  return newUser;
}


export const createPostService = async (title,content,user)=>{
  const PostData = await post.create({
    title:title,
    content:content,
    user:user
  })
  return PostData;
}

// export const getPost = async (req,res)=>{
//   const post = await getPostService();
//   if(!post){
//     return res.status(404).json({
//       success:false, 
//       message:"Post not found"
//     })
//   }
//   res.json({
//     success: true,
//     data: post
//   });
// }


export const getPostService = async()=>{
  const PostData = await post.find().populate("user","name email")
  return PostData;  
}