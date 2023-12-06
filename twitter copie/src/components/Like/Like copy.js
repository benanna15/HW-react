// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const Like = (props) => {
//   const { tweet, id } = props;
//   const [likeCount, setLikeCount] = useState(tweet.like);
//   const [findTweet, setFindTweet] = useState(null);
//   const [findZero, setFindZero] = useState(null); // Initialisez setFindZero à null
//   const [redHeart, setRedHeart] = useState(false);
//   const [idLike, setIdLike] = useState(null);
//   const [countLike , setCountLike] = useState();
//   const [likedTweets, setlikedTweets] = useState();


// console.log(likeCount);
// useEffect(() => {
//     // Vérifier si l'utilisateur a déjà liké ce tweet
//     axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
//       params: {
//         "AD_PageNbr" : "1",
//         "AD_PageSize" : "500"
//       },
//     })
//     .then(response => {
//       const likedTweets = response.data.Table;
//       const findTweetValue = likedTweets.find(tweets => (tweets.user_id == id && tweets.tweet_id == tweet.id && tweets.like_id == 1 ));
//       const findZeroValue = likedTweets.find(tweets => (tweets.user_id == id && tweets.tweet_id == tweet.id && (tweets.like_id == 0 || tweets.like_id == null)));

//       setFindTweet(findTweetValue);
//       if (findTweetValue) {
//         const tweetId = findTweetValue.tweet_id; // Accédez à l'ID du tweet
//         setlikedTweets(tweetId)
//         console.log("L'ID du tweet find est :", tweetId);
//       } 
//       setFindZero(findZeroValue);
//       if (findZero) {
//         const tweetId = findZeroValue.tweet_id; // Accédez à l'ID du tweet
//         setlikedTweets(tweetId)
//         console.log("L'ID du tweet zero est :", tweetId);
//       }  

//     setIdLike(likedTweets.id)

//     })
//     .catch(error => {
//       console.error('Erreur lors de la récupération des likes :', error);
//     });
//   }, [id, tweet.id]);
  
//   useEffect(() => {
//     // Mettre à jour l'état "redHeart" en fonction de "findZero" et "findTweet"
//     if (findTweet) {
//       setRedHeart(true);
//     } else {
//       setRedHeart(false);
//     }
//   }, [findTweet, findZero]); 

//   const handleLikeClick = () => {
//     console.log({findZero});
//     // if (findTweet) {
//     //     console.log(findTweet);
//     //     console.log(tweet.id);
//     //     console.log("i am in the delete");
//     //     setRedHeart(false);
//     //     axios.get('https://promises-cb263f.appdrag.site/api/updateDeleteLike', {
//     //     params: {
//     //       user_id : id ,
//     //       tweet_id : tweet.id,
//     //       like_id : 0
//     //     }
//     //   })
//     //   .then(response => {
//     //     console.log(response.data);
//     //     const newLikeCount = likeCount - 1;
//     //     console.log(newLikeCount);
//     //     updateTotalLikes(tweet.id, newLikeCount);
//     //     setLikeCount(newLikeCount)
//     //     console.log(findTweet);
//     //     console.log(findZero);
        
//     //   })
//     //   .catch(error => {
//     //     console.error('Erreur lors de la suppression du like :', error);
//     //   });
//     // } else 
//     if (likedTweets) {
//         console.log("i am in the update");
        
//       axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
//         params: {
//           tweet_id: tweet.id,
//           user_id: id,
//           like_id: countLike == 1 ? 0:1,
//           id:likedTweets
//         },
//       })
//       .then(response => {
//         console.log(response.data);

//         const newLikeCount = (likeCount !== null && likeCount !== 0) ? likeCount + 1 : 1;

//     console.log(newLikeCount);
   
//     console.log(likeCount);
//     updateTotalLikes(tweet.id,likeCount );
//     setLikeCount(likeCount)
    
        
//       })
//       .catch(error => {
//         console.error('Erreur lors de l\'ajout du like :', error);
//       });
//     } else {
//         console.log("i am in the add");
//         setRedHeart(true);
//       axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
//         params: {
//           user_id: id,
//           tweet_id: tweet.id,
//           like_id: 1,
//         }
//       }).then(function(response){
//        console.log(response.data);
       
//        console.log("avant" + likeCount);
//        const newLikeCount = likeCount !== null ? likeCount + 1 : 1;
//        console.log(newLikeCount);
//        updateTotalLikes(tweet.id, newLikeCount);
//        setLikeCount(newLikeCount)
      
        
//       });
//     }
//   };

//   const updateTotalLikes = (tweetId, likeChange) => {
//     console.log( likeChange);
//     axios.get('https://promises-cb263f.appdrag.site/api/updateTweetLike', {
//       params: {
//         "id": tweetId,
//         "like": likeChange,
//       }
//     })
//     .then (response => {
//        console.log(response.data);
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
