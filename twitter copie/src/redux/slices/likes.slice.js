// likes.slice.js

import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
  },
  reducers: {
    setLikes: (state, action) => {
        state.likes = action.payload.map(like => ({
          id: like.id,
          user_id: like.user_id,
          tweet_id: like.tweet_id,
          liked: like.liked,
          redHeart: like.redHeart
        }))
      
     // state.likes = action.payload;
     console.log("set sate likes", JSON.parse(JSON.stringify(state)));
    },
    addLike: (state, action) => {
      state.likes.push(action.payload);
      console.log("like", JSON.parse(JSON.stringify(state)));
    },
    updateLike: (state, action) => {

      const { tweet_id, user_id, liked, redHeart } = action.payload;
    
      // Utilisez une copie du tableau pour éviter de modifier le state directement
      const updatedLikes = state.likes.map((like) =>
        like.tweet_id === tweet_id && like.user_id === user_id ? { ...like, liked: liked, redHeart:redHeart} : like
      );
    
      // Ajoutez des console.log pour vérifier les valeurs
      console.log("Tweet ID in reducer:", tweet_id);
      console.log("Like Change in reducer:", liked);
      console.log("Red Heart in reducer:", redHeart);
      console.log("Updated Tweets in reducer:", JSON.parse(JSON.stringify(updatedLikes)));
    
      // Retournez une nouvelle copie de l'état
      return {
        ...state,
        likes: updatedLikes,
      


      // const updatedLike = action.payload;
    
      // console.log("Before update - state.likes:", JSON.parse(JSON.stringify(state.likes)));
    
      // // Utilisez une copie du tableau pour éviter de modifier le state directement
      // const updatedLikes = state.likes.map((like) =>
      //   like.id === updatedLike.id ? { ...like, ...updatedLike } : like
      // );
    
      // console.log("After update - state.likes:", JSON.parse(JSON.stringify(updatedLikes)));
    
      // // Retournez une nouvelle copie de l'état
      // return {
      //   ...state,
      //   likes: updatedLikes,
      };
    },
  },
});

export const { setLikes, addLike, updateLike } = likesSlice.actions;
export default likesSlice.reducer;
