import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalLikesPerComment } from '../../redux/slices/comments.slice';
import {  addLikeComment, updateLikeComment } from '../../redux/slices/likesComment.slice';

const LikeComment = (props) => {
  const { comment, id ,likes ,tweetedId } = props;
  console.log("id " + id);
  console.log(likes);
  const dispatch = useDispatch();
  //const likes = useSelector((state) => state.likes.likes);
  const [redHeart, setRedHeart] = useState(comment.redHeart || false);
  const [findLike, setFindLike] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.like);


  useEffect(() => {
    if (likes) {
      const findCommentValue = likes.find(
        (comments) => comments.user_id === id && comments.comment_id === comment.id && comments.tweetedId === tweetedId 
      );
      // console.log("Current User ID:", id);
      // console.log("Comment ID:", comment.id);
      // console.log("Tweeted ID:", tweetedId);
      console.log("Found Comment Value:", findCommentValue);
      setFindLike(!!findCommentValue); // Convertir en booléen
      setRedHeart(findCommentValue?.liked === 1)
   //   console.log( findTweetValue?.liked == 1);
    //  console.log("redHeart" + redHeart);
    
    }
  }, [dispatch]);

  const handleLikeClick = async () => {
    console.log(likeCount);
    const newLikeValue = redHeart ? 0 : 1;
    const updatedLikeCount = likeCount + (newLikeValue === 1 ? 1 : -1);
  
    try {
      if (findLike) {
        await axios.get('https://promises-cb263f.appdrag.site/api/updateLikeComment', {
          params: {
            comment_id: comment.id,
            user_id: id,
            liked: newLikeValue,
            redHeart: newLikeValue,
            tweetedId :tweetedId 
          },
        })
        .then(function(response){
          console.log(response);
        });
        dispatch(
          updateLikeComment({
            comment_id: comment.id,
            user_id: id,
            liked: newLikeValue,
            redHeart: newLikeValue,
            tweetedId :tweetedId 
          })
        );
       setLikeCount(updatedLikeCount);
       console.log(updatedLikeCount);
        updateTotalLikes(comment.id, updatedLikeCount , newLikeValue);
       setRedHeart(newLikeValue);
        console.log(newLikeValue);
      } else {
        await axios.get('https://promises-cb263f.appdrag.site/api/AddLikeComment', {
          params: {
            user_id: id,
            comment_id: comment.id,
            liked: 1,
            redHeart: 1,
            tweetedId :tweetedId 
          },
        })
        .then(function(response){
          console.log(response);
        });
     
        dispatch(
          addLikeComment({
            user_id: id,
            comment_id: comment.id,
            liked: 1,
            redHeart: 1,
            tweetedId :tweetedId 
          })
        );
        setLikeCount(updatedLikeCount);
        updateTotalLikes( comment.id  , updatedLikeCount, newLikeValue);
        setFindLike(true);
        setRedHeart(newLikeValue);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du like :', error);
    }
  };
  const updateTotalLikes = (commentId, likeChange, newLikeValue) => {
    console.log("ds le update General comment like : " + commentId, likeChange, newLikeValue);
    axios
      .get('https://promises-cb263f.appdrag.site/api/updateCommentLikeGeneral', {
        params: {
          "id": commentId,
          "like": likeChange
        },
      })
      .then((response) => {
        if (response.data.affectedRows > 0) {
          setLikeCount(likeChange);
          dispatch(
            updateTotalLikesPerComment({
              "commentId": commentId,
              "likeChange": likeChange,
              "redHeart": newLikeValue,
            })
          );
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour du nombre total de likes :', error);
      });
  };

  return (
    <div>
      <button
        className={`p-2 flex items-center text-black-500 font-semibold`}
        type="button"
        onClick={handleLikeClick}
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

export default LikeComment;
