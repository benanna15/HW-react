// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const Like = (props) => {
//   const { tweet, id } = props;
//   const [redHeart, setRedHeart] = useState(false);
//   const [likeCount, setLikeCount] = useState(tweet.like);
//   const [tweetIdLike, setTweetIdLike] = useState();
//   useEffect(() => {
//     // Vérifier si l'utilisateur a déjà liké ce tweet
//     axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
//       params: {
//         "AD_PageNbr": "1",
//         "AD_PageSize": "500"
//       },
//     })
//     .then(response => {
//       const likedTweets = response.data.Table;
//       const findTweetValue = likedTweets.find(tweets => (tweets.user_id == id && tweets.tweet_id == tweet.id));
//       if (findTweetValue) {
//         setRedHeart(findTweetValue.like_id === 1);
//       }
//     })
//     .catch(error => {
//       console.error('Erreur lors de la récupération des likes :', error);
//     });
//   }, [id, tweet.id]);

//   const handleLikeClick = () => {
//     if (redHeart) {
//       console.log("i am in the update");
//       console.log(redHeart);

//       axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
//         params: {
//           tweet_id: tweet.id,
//           user_id: id,
//           like_id: 0
//         },
//       }).then(response => {
//         console.log(response.data);
//         setRedHeart(false);
//         updateTotalLikes(tweet.id, likeCount - 1);
//       }).catch(error => {
//         console.error('Erreur lors de la suppression du like :', error);
//       });
//     } else {
//       console.log("i am in the add");
//       console.log(redHeart);

//       axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
//         params: {
//           user_id: id,
//           tweet_id: tweet.id,
//           like_id: 1,
//         }
//       }).then(function(response){
//         console.log(response.data);
//         console.log("avant" + (likeCount + 1));
//         setRedHeart(true);
//         updateTotalLikes(tweet.id, likeCount + 1);
//         setTweetIdLike({ user_id: id, tweet_id: tweet.id, like_id: 1 });
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
//     .then(response => {
//       console.log(response.data);
//       setLikeCount(likeChange);
//     })
//     .catch(error => {
//       console.error('Erreur lors de la mise à jour du nombre total de likes :', error);
//     });
//   };

//   return (
//     <button
//       className={`p-2 flex items-center ${redHeart ? 'text-red-500' : 'text-black-500'}`}
//       type="button"
//       onClick={handleLikeClick}
//     >
//       <FontAwesomeIcon icon={faHeart} className={`mr-2 ${redHeart ? 'text-red-500' : 'text-black-500'}`} />
//       {likeCount}
//     </button>
//   );
// };

// export default Like;
