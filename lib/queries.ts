export const allVideosQuery = () => {
  const query = `*[_type == "videoPost"] | order(_createdAt desc)
  {

    thumbnail{
      asset->{
        _id,
        url
             }
      
    },
    _id,
    description,
    video{
      asset->{
      _id,
      url
      
              }
    },
   
    
  userId,
  uploadedBy->{
    _id,
    userName,
    image
    
  },
  likes,
  _createdAt,
  title,
  comments[]{
    _id,
    comment,
    uploadedBy,
    uploadedBy->{
      _id,
      userName,
      image
      
    }
  }
  
  
 

  
  
}`;

  return query;
};

export const videoDetailQuery = (videoId: string | string[]) => {
  const query = `*[_type == "videoPost" && _id == '${videoId}']{
     

        thumbnail{
          asset->{
            _id,
            url
                 }
          
        },
        _id,
        description,
        video{
          asset->{
          _id,
          url
          
                  }
        },
       
        
      userId,
      uploadedBy->{
        _id,
        userName,
        image
        
      },
      likes,
      _createdAt,
      title,
      comments[]{
        _id,
        comment,
        uploadedBy,
        uploadedBy->{
          _id,
          userName,
          image
          
        }
      }
      
      
     
    
      
      
    }`;
  return query;
};

// export const searchPostsQuery = (searchTerm: string | string[]) => {
//   const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
//       _id,
//        caption,
//          video{
//           asset->{
//             _id,
//             url
//           }
//         },
//         userId,
//       postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//   likes,
//       comments[]{
//         comment,
//         _key,
//         postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//       }
//     }`;
//   return query;
// };

// export const singleUserQuery = (userId: string | string[]) => {
//   const query = `*[_type == "user" && _id == '${userId}']`;

//   return query;
// };

// export const allUsersQuery = () => {
//   const query = `*[_type == "user"]`;

//   return query;
// };

// export const userCreatedPostsQuery = (userId: string | string[]) => {
//   const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
//       _id,
//        caption,
//          video{
//           asset->{
//             _id,
//             url
//           }
//         },
//         userId,
//       postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//    likes,

//       comments[]{
//         comment,
//         _key,
//         postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//       }
//     }`;

//   return query;
// };

// export const userLikedPostsQuery = (userId: string | string[]) => {
//   const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
//       _id,
//        caption,
//          video{
//           asset->{
//             _id,
//             url
//           }
//         },
//         userId,
//       postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//    likes,

//       comments[]{
//         comment,
//         _key,
//         postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//       }
//     }`;

//   return query;
// };

// export const topicPostsQuery = (topic: string | string[]) => {
//   const query = `*[_type == "post" && topic match '${topic}*'] {
//       _id,
//        caption,
//          video{
//           asset->{
//             _id,
//             url
//           }
//         },
//         userId,
//       postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//    likes,

//       comments[]{
//         comment,
//         _key,
//         postedBy->{
//         _id,
//         userName,
//         image,
//         verified
//       },
//       }
//     }`;

//   return query;
// };
