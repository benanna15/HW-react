// // Like.js

// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLikes, addLike, updateLike } from '../../redux/slices/like.slice';
// import axios from 'axios';

// const Like = (props) => {
//   const { tweet, id } = props;
//   const [redHeart, setRedHeart] = useState(false);
//   const [likeCount, setLikeCount] = useState(tweet.like);
//   const [tweetIdLike, setTweetIdLike] = useState();

//   const dispatch = useDispatch();
//   const likes = useSelector((state) => state.likes.likes);

//   useEffect(() => {
//     axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
//       params: {
//         AD_PageNbr: "1",
//         AD_PageSize: "500"
//       },
//     })
//       .then(response => {
//         (console.log("je suis ds le useEffect"))
//         const likedTweets = response.data.Table;
//         console.log('Liked Tweets:', likedTweets); // Ajoutez cette ligne pour vérifier le contenu de likedTweets
//         dispatch(setLikes(likedTweets));
//         const findTweetValue = likedTweets.find(tweets => (tweets.user_id == id && tweets.tweet_id == tweet.id));
//         console.log('Find Tweet Value:', findTweetValue); // Ajoutez cette ligne pour vérifier le contenu de findTweetValue
//         setTweetIdLike(findTweetValue);
//         if (findTweetValue) {
//           setRedHeart(findTweetValue.like_id === 1);
//         }
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des likes :', error);
//       });
//   }, [id, tweet.id,dispatch]);

//   const handleLikeClick = () => {
//     if (tweetIdLike) {
//       const newLikeValue = redHeart ? 0 : 1;

//       axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
//         params: {
//           "tweet_id": tweet.id,
//           "user_id": id,
//           "like_id": newLikeValue
//         },
//       }).then(response => {
//         console.log(response.data);
//         dispatch(updateLike({
//           "tweet_id": tweet.id,
//           "user_id": id,
//           "like_id": newLikeValue
//         }));
//         setRedHeart(newLikeValue === 1);
//         updateTotalLikes(tweet.id, likeCount + (newLikeValue === 1 ? 1 : -1));
//       }).catch(error => {
//         console.error('Erreur lors de la mise à jour du like :', error);
//       });
//     } else {
//       axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
//         params: {
//           "user_id": id,
//           "tweet_id": tweet.id,
//           "like_id": 1
//         }
//       }).then(response => {
//         console.log(response.data);
//         dispatch(addLike({
//           "user_id": id,
//           "tweet_id": tweet.id,
//           "like_id": 1
//         }));
//         setRedHeart(true);
//         updateTotalLikes(tweet.id, likeCount + 1);
//         setTweetIdLike({ id: response.data.id, user_id: id, tweet_id: tweet.id, like_id: 1 });
//       }).catch(error => {
//         console.error('Erreur lors de l\'ajout du like :', error);
//       });
//     }
//   };

//   const updateTotalLikes = (tweetId, likeChange) => {
//     axios.get('https://promises-cb263f.appdrag.site/api/updateTweetLike', {
//       params: {
//         "id": tweetId,
//         "like": likeChange,
//       }
//     })
//       .then(response => {
//         console.log(response.data);
//         setLikeCount(likeChange);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la mise à jour du nombre total de likes :', error);
//       });
//   };

//   return (
//     <button
//       className={`p-2 flex items-center text-black-500`}
//       type="button"
//       onClick={handleLikeClick}
//     >
//       <FontAwesomeIcon icon={faHeart} className={`mr-2 ${redHeart ? 'text-red-500' : 'text-black-500'}`} />
//       {likeCount > 0 && <span>{likeCount}</span>}
//     </button>
//   );
// };

// export default Like;
