import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setLikes, updateLike } from '../../redux/slices/likes.slice';
import { updateTotalLikesPerTweet } from '../../redux/slices/tweets.slice';
import axios from 'axios'

const Like = (props) => {
  const { tweet,id } = props;

  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes.likes);
  const [redHeart, setRedHeart] = useState(tweet.redHeart || false);
  const [likeCount, setLikeCount] = useState(tweet.like);

  useEffect(() => {
    axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      },
    })
    .then(response => {
      dispatch(setLikes(response.data.Table));
  
      // Move the logic that depends on likes inside this block
      const existingLike = response.data.Table.find((like) => like.tweet_id === tweet.id && like.user_id === id);
      console.log(existingLike);
      if (existingLike && existingLike.liked === 1) {
        setRedHeart(true);
      }
    })
    .catch(error => {
      console.error('Error fetching likes:', error);
    });
  }, [dispatch, id, tweet.id]);
  


  const handleLikeClick = () => {
    const tweetedId = tweet.id;
  
    // Vérifiez si le like existe déjà pour cet utilisateur et ce tweet
    const existingLike = likes.find((like) => like.tweet_id === tweetedId && like.user_id === id);
  
    if (existingLike) {
      // Cas 1: Like existant
      const liked = existingLike.liked === 1 ? 0 : 1;
      const redHeartValue = existingLike.liked === 1 ? 0 : 1;
  setRedHeart(redHeartValue)
  
      // Mettez à jour le like existant dans le Redux
      dispatch(updateLike({ tweet_id: tweetedId, user_id: id, liked, redHeart: redHeartValue }));
  
      // Mettez à jour le nombre total de likes par tweet
      const likeChange = liked === 1 ? 1 : -1;
      
        setLikeCount(likeCount+ likeChange);
        updateTotalLikes(tweet.id, likeCount, redHeartValue);
      dispatch(updateTotalLikesPerTweet({ tweetedId, likeChange, redHeart: redHeartValue }));
  
      // Effectuez la requête pour mettre à jour le like côté serveur
      axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
        params: {
          "user_id": id,
          "tweet_id": tweetedId,
          "liked": liked,
          "redHeart": redHeartValue,
        }
      }).then(function (response) {
        console.log(response.data);

        console.log(redHeartValue);
      });
  
    } else {
      // Cas 2: Aucun like existant, créez un nouveau like
      const newLike = {
        tweet_id: tweetedId,
        user_id: id,
        liked: 1,
        redHeart: 1,
      };
      setRedHeart(1)
      // Ajoutez le nouveau like dans le Redux
      dispatch(updateLike(newLike));
      setLikeCount(likeCount+ 1);
      updateTotalLikes(tweet.id, likeCount, 1);
      // Mettez à jour le nombre total de likes par tweet
      dispatch(updateTotalLikesPerTweet({ tweetedId, likeChange: 1, redHeart: 1 }));
  
      // Effectuez la requête pour ajouter un nouveau like côté serveur
      axios.get('https://promises-cb263f.appdrag.site/api/addLike', {
        params: {
          "like": tweetedId,  // Vous devez spécifier la valeur du like ici
          "id": id,      // Vous devez spécifier la valeur de l'id ici
        }
      }).then(function (response) {
        console.log(response.data);
      });
    }
  };
  const updateTotalLikes = (tweetId, likeChange,newLikeValue) => {
    axios.get('https://promises-cb263f.appdrag.site/api/updateTweetLike', {
      params: {
        "id": tweetId,
        "like": likeChange,
      }
    })
    .then(response => {
      if (response.data.affectedRows > 0) {
      setLikeCount(likeChange);
      console.log(likeChange,tweetId);
      dispatch(updateTotalLikesPerTweet({
        "tweetId": tweetId,  // Utilisez la même clé que dans votre reducer
        "likeChange": likeChange,
        "redHeart": newLikeValue 
      }));
    }})
    .catch(error => {
      console.error('Erreur lors de la mise à jour du nombre total de likes :', error);
    });
  };
  

  return (
    <div>
      <button
        className={`p-2 flex items-center text-black-500`}
        type="button"
        onClick={()=>handleLikeClick()}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className={`mr-2 ${redHeart ? 'text-red-500' : 'text-black-500'}`}
        />
        {likeCount > 0 && <span>{likeCount}</span>}
      </button>
    </div>
  );
};

export default Like;
