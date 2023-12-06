import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalLikesPerTweet } from '../../redux/slices/tweets.slice';
import { setLikes, addLike, updateLike } from '../../redux/slices/likes.slice';

const Like = (props) => {
  const { tweet, id } = props;
  const [findLike, setFindLike] = useState(false);
  //const [redHeart, setRedHeart] = useState(false);
  const [redHeart, setRedHeart] = useState(tweet.redHeart || false);
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes.likes);
  const [likeCount, setLikeCount] = useState(tweet.like);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà liké ce tweet
    axios.get('https://promises-cb263f.appdrag.site/api/getLikes', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      },
    })
      .then(response => {
        const likedTweets = response.data.Table;

        const findTweetValue = likedTweets.find(tweets => (tweets.user_id === id && tweets.tweet_id === tweet.id));

        setFindLike(!!findTweetValue); // Convertir en booléen
        setRedHeart(findTweetValue?.liked == 1);
        setData(likedTweets);
        dispatch(setLikes(likedTweets));
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des likes :', error);
      });
  }, [dispatch]);

  const handleLikeClick = () => {
    const newLikeValue = redHeart ? 0 : 1;
    const updatedLikeCount = likeCount + (newLikeValue === 1 ? 1 : -1);

    // Mettre à jour l'état local
    setRedHeart(newLikeValue === 1);
    setLikeCount(updatedLikeCount);

    if (findLike) {
      axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
        params: {
          "tweet_id": tweet.id,
          "user_id": id,
          "liked": newLikeValue
        },
      }).then(response => {
        if (response.data.affectedRows > 0) {;
        dispatch(updateLike({
          "tweet_id": tweet.id,
          "user_id": id,
          "liked": newLikeValue,
          "redHeart": newLikeValue === 1
        }));
        updateTotalLikes(tweet.id, updatedLikeCount, newLikeValue);
      }}).catch(error => {
        console.error('Erreur lors de la mise à jour du like :', error);
      });
    } else {
      axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
        params: {
          "user_id": id,
          "tweet_id": tweet.id,
          "liked": 1,
          "redHeart": true,
        }
      }).then(response => {
        if (response.data.affectedRows > 0) {
        updateTotalLikes(tweet.id, updatedLikeCount,newLikeValue);
        dispatch(addLike({
          "user_id": id,
          "tweet_id": tweet.id,
          "liked": 1
        }));
        setFindLike(true); // Mise à jour de l'état local
      }}).catch(error => {
        console.error('Erreur lors de l\'ajout du like :', error);
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
        "redHeart": newLikeValue === 1
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
          <FontAwesomeIcon icon={faHeart} className={`mr-2 ${redHeart ? 'text-red-500' : 'text-black-500'}`} />
          {likeCount > 0 && <span>{likeCount}</span>}
        </button>
  
    </div>
  );
};

export default Like;
