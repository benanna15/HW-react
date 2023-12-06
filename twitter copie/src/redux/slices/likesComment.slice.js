// likesComment.slice.js

import { createSlice } from '@reduxjs/toolkit';

const likesCommentSlice = createSlice({
  name: 'likesComment',
  initialState: {
    likes: [],
  },
  reducers: {
    setLikesComment: (state, action) => {
        state.likes = action.payload.map(like => ({
          id: like.id,
          user_id: like.user_id,
          comment_id: like.comment_id,
          liked: like.liked,
          redHeart: like.redHeart,
          tweetedId:like.tweetedId
        }))
      
     // state.likes = action.payload;
     console.log("set sate likes", JSON.parse(JSON.stringify(state)));
    },
    addLikeComment: (state, action) => {
      state.likes.push(action.payload);
      console.log("like", JSON.parse(JSON.stringify(state)));
    },
    updateLike: (state, action) => {
      const { tweet_id, user_id, liked, redHeart } = action.payload;
    
      // Trouvez l'objet like correspondant dans le tableau state.likes
      const existingLike = state.likes.find(
        (like) => like.tweet_id === tweet_id && like.user_id === user_id
      );
    
      // Si l'objet like existe, mettez à jour ses propriétés, sinon ajoutez le nouvel objet like au tableau
      if (existingLike) {
        existingLike.liked = liked;
        existingLike.redHeart = redHeart;
      } else {
        // Si le like n'existe pas, ajoutez-le au tableau
        state.likes.push({
          tweet_id,
          user_id,
          liked,
          redHeart,
        });
      }
    
      // Ajoutez des console.log pour vérifier les valeurs
      console.log("Tweet ID in reducer:", tweet_id);
      console.log("Like Change in reducer:", liked);
      console.log("Red Heart in reducer:", redHeart);
      console.log("Updated Tweets in reducer:", JSON.parse(JSON.stringify(state.likes)));
    },
  //   updateLikeComment: (state, action) => {

  //     const { comment_id, user_id, liked, redHeart, tweetedId } = action.payload;
  //     const existingLike = state.likes.find(
  //       (like) => like.comment_id === comment_id && like.user_id === user_id && like.tweetedId === tweetedId
  //     );

  //     if (existingLike) {
  //       existingLike.liked = liked;
  //       existingLike.redHeart = redHeart;
  //     } else {
  //       state.likes.push(action.payload);
  //     }

  //     // Ajoutez des console.log pour vérifier les valeurs
  //     console.log("Tweet ID in reducer:", comment_id);
  //     console.log("Like Change in reducer:", liked);
  //     console.log("Red Heart in reducer:", redHeart);
  //     console.log("Updated Tweets in reducer:", JSON.parse(JSON.stringify(existingLike)));
  //   },
    
    
      
      
  
   },
});

export const { setLikesComment, addLikeComment, updateLikeComment } = likesCommentSlice.actions;
export default likesCommentSlice.reducer;
