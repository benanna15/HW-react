// tweets.slice.js

import { createSlice } from '@reduxjs/toolkit';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    tweets: [],
  },
  reducers: {
    setTweets: (state, action) => {
      state.tweets = action.payload;
      console.log("set sate tweets", JSON.parse(JSON.stringify(state)));
    },
    addTweet: (state, action) => {
      const newTweet = action.payload;
      state.tweets.push(newTweet);
      // Triez le tableau après l'ajout du nouveau tweet
      state.tweets.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    updateTweet: (state, action) => {
      const updatedTweet = action.payload;

      // Recherchez l'index du tweet à mettre à jour
      const tweetIndex = state.tweets.findIndex(tweet => tweet.id === updatedTweet.id);

      if (tweetIndex !== -1) {
        // Créez une copie du tweet à mettre à jour
        const updatedTweetCopy = {
          ...state.tweets[tweetIndex],
          TweetContent: updatedTweet.TweetContent,
          date: updatedTweet.date
          // Ajoutez d'autres propriétés si nécessaire
        };

        // Créez une nouvelle copie du tableau avec le tweet mis à jour
        state.tweets = [
          ...state.tweets.slice(0, tweetIndex),
          updatedTweetCopy,
          ...state.tweets.slice(tweetIndex + 1)
        ];

        // Triez le tableau après la mise à jour du tweet
        state.tweets.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    },
    deleteTheTweet: (state, action) => {
      const deletedTweetId = action.payload;
      state.tweets = state.tweets.filter((tweet) => tweet.id !== deletedTweetId);
    },
    // Ajoutez d'autres reducers si nécessaire
  
    updateTotalLikesPerTweet: (state, action) => {
      const { tweetId, likeChange, redHeart } = action.payload;
    
      // Utilisez une copie du tableau pour éviter de modifier le state directement
      const updatedTweets = state.tweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, like: likeChange, redHeart:redHeart} : tweet
      );
    
      // Ajoutez des console.log pour vérifier les valeurs
      console.log("Tweet ID in reducer:", tweetId);
      console.log("Like Change in reducer:", likeChange);
      console.log("Red Heart in reducer:", redHeart);
      console.log("Updated Tweets in reducer:", JSON.parse(JSON.stringify(updatedTweets)));
    
      // Retournez une nouvelle copie de l'état
      return {
        ...state,
        tweets: updatedTweets,
      };
    },

    updateTotalCommentPerTweet: (state, action) => {
      const { tweetId, commentChange, } = action.payload;
    
      // Utilisez une copie du tableau pour éviter de modifier le state directement
      const updatedCommentsTweets = state.tweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, comment: commentChange } : tweet
      );
    

      // Ajoutez des console.log pour vérifier les valeurs
      console.log("Tweet ID in reducer:", tweetId);
      console.log("Comment Change in reducer:", commentChange); 
    
      // Retournez une nouvelle copie de l'état
      return {
        ...state,
        tweets: updatedCommentsTweets,
      };
    },
  },

});

export const { setTweets, addTweet, updateTweet, deleteTheTweet, updateTotalLikesPerTweet, updateTotalCommentPerTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;