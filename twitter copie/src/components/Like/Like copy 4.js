// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateTotalLikesPerTweet } from '../../redux/slices/tweets.slice';

// const Like = (props) => {
//   const { tweet, id , } = props;
//   const [redHeart, setRedHeart] = useState(false);
//   const [tweetIdLike, setTweetIdLike] = useState(null);
//   const dispatch = useDispatch();
//   const [likeCount, setLikeCount] = useState(tweet.like);



//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
//           params: {
//             AD_PageNbr: "1",
//             AD_PageSize: "500"
//           },
//         });
  
//         console.log("Je suis dans le useEffect");
        
//         const likedTweets = response.data.Table;
//         console.log('Liked Tweets:', likedTweets);
  
//         const findTweetValue = likedTweets.find(tweets => (tweets.user_id === id && tweets.tweet_id === tweet.id));
//         console.log('Find Tweet Value:', findTweetValue);
  
//         setTweetIdLike(() => findTweetValue);
  
//         if (findTweetValue) {
//           setRedHeart(findTweetValue.liked === 1);
//         }
//       } catch (error) {
//         console.error('Erreur lors de la récupération des likes :', error);
//       }
//     };
  
//     fetchData();
//   }, [id, tweet.id]);
  

//   const handleLikeClick = () => {
//     if (tweetIdLike) {
//       const newLikeValue = redHeart ? 0 : 1;

//       axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
//         params: {
//           "tweet_id": tweet.id,
//           "user_id": id,
//           "liked": newLikeValue
//         },
//       }).then(response => {
//         console.log(response.data);
//         setRedHeart(newLikeValue === 1);
//         updateTotalLikes(tweet.id, likeCount+ (newLikeValue === 1 ? 1 : -1));
//       }).catch(error => {
//         console.error('Erreur lors de la mise à jour du like :', error);
//       });
//     } else {
//       axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
//         params: {
//           "user_id": id,
//           "tweet_id": tweet.id,
//           "liked": 1
//         }
//       }).then(response => {
//         console.log(response.data);
//         setRedHeart(true);
//         updateTotalLikes(tweet.id, likeCount + 1);
//         console.log(likeCount);
//         setTweetIdLike({  user_id: id, tweet_id: tweet.id, like_id: 1 });
//       }).catch(error => {
//         console.error('Erreur lors de l\'ajout du like :', error);
//       });
//     }
//   };

//   const updateTotalLikes = (tweetId, likeChange) => {
//     console.log(tweetId, likeChange);
//     axios.get('https://promises-cb263f.appdrag.site/api/updateTweetLike', {
//       params: {
//         "id": tweetId,
//         "like": likeChange,
//       }
//     })
//     .then(response => {
//       console.log(response.data);
//       setLikeCount(likeChange);
//       dispatch(updateTotalLikesPerTweet({
//         "id": tweetId,
//         "like": likeChange
//       }));
//     })
//     .catch(error => {
//       console.error('Erreur lors de la mise à jour du nombre total de likes :', error);
//     });
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
