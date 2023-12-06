// // Like.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateTotalLikesPerTweet } from '../../redux/slices/tweets.slice';
// import { setLikes, addLike, updateLike } from '../../redux/slices/likes.slice';

// const Like = (props) => {
//   const { tweet, id } = props;
//   const dispatch = useDispatch();
//   const likes = useSelector((state) => state.likes.likes);
//   const [isLiked, setIsLiked] = useState(false);
//   const tweets = useSelector((state) => state.tweets.tweets);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
//           params: {
//             AD_PageNbr: "1",
//             AD_PageSize: "500"
//           },
//         });

//         // Stocker les likes dans le Redux store
//         dispatch(setLikes(response.data.Table));
//       } catch (error) {
//         console.error('Erreur lors de la récupération des likes :', error);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   useEffect(() => {
//     // Utiliser likes pour déterminer si le tweet est aimé
//     const tweetLikes = likes.filter(like => like.tweet_id === tweet.id && like.user_id === id);
//     setIsLiked(tweetLikes.length > 0);
//   }, [likes, tweet.id, id]);

//   const handleLikeClick = () => {
//     const existingLikeIndex = likes.findIndex(like => like.tweet_id === tweet.id && like.user_id === id);

//     if (existingLikeIndex !== -1) {
//       // Si la ligne existe déjà, mettez à jour le like (inversion de la valeur actuelle)
//       const newLikeValue = likes[existingLikeIndex].liked === 1 ? 0 : 1;

//       axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
//         params: {
//           tweet_id: tweet.id,
//           user_id: id,
//           liked: newLikeValue
//         },
//       }).then(response => {
//         console.log(response.data);
//         setIsLiked(newLikeValue === 1);
//         updateTotalLikes(tweet.id, newLikeValue === 1 ? 1 : -1);
//         dispatch(updateLike({
//           tweet_id: tweet.id,
//           user_id: id,
//           liked: newLikeValue
//         }));
//       }).catch(error => {
//         console.error('Erreur lors de la mise à jour du like :', error);
//       });
//     } else {
//       // Si non aimé, ajoutez un nouveau like (à 1)
//       axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
//         params: {
//           tweet_id: tweet.id,
//           user_id: id,
//           liked: 1
//         },
//       }).then(response => {
//         console.log(response.data);
//         setIsLiked(true);
//         updateTotalLikes(tweet.id, 1);
//         dispatch(addLike({
//           tweet_id: tweet.id,
//           user_id: id,
//           liked: 1
//         }));
//       }).catch(error => {
//         console.error('Erreur lors de l\'ajout du like :', error);
//       });
//     }
//   };

//   const updateTotalLikes = (tweetId, likeChange) => {
//     axios.get('https://promises-cb263f.appdrag.site/api/updateTweetLike', {
//       params: {
//         id: tweetId,
//         like: likeChange,
//       }
//     })
//     .then(response => {
//       console.log(response.data);
//       dispatch(updateTotalLikesPerTweet({
//         id: tweetId,
//         like: likeChange
//       }));
//     })
//     .catch(error => {
//       console.error('Erreur lors de la mise à jour du nombre total de likes :', error);
//     });
//   };
//   const totalLikes = tweets.find(t => t.id === tweet.id)?.like || 0;


//   return (
//     <button
//       className={`p-2 flex items-center text-black-500`}
//       type="button"
//       onClick={handleLikeClick}
//     >
//       <FontAwesomeIcon icon={faHeart} className={`mr-2 ${isLiked ? 'text-red-500' : 'text-black-500'}`} />
//       {totalLikes > 0 && <span className="ml-1">{totalLikes}</span>}

//       {/* Vous pouvez ajouter une icône de cœur rouge ici en fonction de l'état du like */}
//     </button>
//   );
// };

// export default Like;
