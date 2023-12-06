import React, { useEffect, useState, useRef } from 'react';
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
  const [redHeart, setRedHeart] = useState( false);
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
      console.log("id " + id + "tweet.id " + tweet.id);
      console.log(likedTweets);
      

      const findTweet=likedTweets.find(tweets => (tweets.user_id === id && tweets.tweet_id === tweet.id && tweets.liked === 0));
      // Vérifier si le tweet actuel a été liké
      console.log(findTweet);
      const isLiked = likedTweets.some(liked => liked.user_id === id && liked.tweet_id === tweet.id && liked.liked === 1);
      console.log(isLiked );
      // Si le tweet a été liké, définir setRedHeart(true)
      if (isLiked) {
        setRedHeart(true);
      }
      if(findTweet){
        setFindLike(true)
      }
  
      // Mettre à jour les données et déclencher le dispatch après la vérification
      setData(likedTweets);
      dispatch(setLikes(likedTweets));
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des likes :', error);
    });
  }, [dispatch,tweet.id,id]);
  

  const handleLikeClick = () => {
 
 

    console.log("Before update - redHeart:", redHeart, "likeCount:", likeCount);
    // Mettre à jour l'état local
 if (redHeart ) {
  console.log("ds le update -"); 
      axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
     
        params: {
          "tweet_id": tweet.id,
          "user_id": id,
          "liked": 0,
          "redHeart" : 0
        },
      }).then(response => {
        if (response.data.affectedRows > 0) {;

        dispatch(updateLike({
          "tweet_id": tweet.id,
          "user_id": id,
          "liked": 0,
          "redHeart": 0
        }));
        const updatedLikeCount = likeCount -1
        updateTotalLikes(tweet.id, updatedLikeCount);
        setLikeCount(updatedLikeCount);
       
        setRedHeart( false);
     
       
      
      }}).catch(error => {
        console.error('Erreur lors de la mise à jour du like :', error);
      });
    } if (findLike) {
        console.log("ds le update +");
      axios.get('https://promises-cb263f.appdrag.site/api/updateLike', {
        params: {
          "tweet_id": tweet.id,
          "user_id": id,
          "liked": 1,
          "redHeart" : 1
        },
      }).then(response => {
        if (response.data.affectedRows > 0) {;

        dispatch(updateLike({
          "tweet_id": tweet.id,
          "user_id": id,
          "liked": 1,
          "redHeart": 1
        }));
        const updatedLikeCount = likeCount + 1
        updateTotalLikes(tweet.id, updatedLikeCount);
        setLikeCount(updatedLikeCount);
       
        setRedHeart(true);
     
       
      
      }}).catch(error => {
        console.error('Erreur lors de la mise à jour du like :', error);
      });
    } else {
      axios.get('https://promises-cb263f.appdrag.site/api/addEachLike', {
        params: {
          "user_id": id,
          "tweet_id": tweet.id,
          "liked": 1,
          "redHeart":1
         
        }
      }).then(response => {
        if (response.data.affectedRows > 0) {
          console.log("ds le add +");
          const updatedLikeCount = likeCount + 1
        updateTotalLikes(tweet.id, updatedLikeCount );
        dispatch(addLike({
          "user_id": id,
          "tweet_id": tweet.id,
          "liked": 1,
          "redHeart": 1
        }));
        setFindLike(true); // Mise à jour de l'état local
      }}).catch(error => {
        console.error('Erreur lors de l\'ajout du like :', error);
      });
    }
  };

  const updateTotalLikes = (tweetId, likeChange) => {
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
        "likeChange": likeChange
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
