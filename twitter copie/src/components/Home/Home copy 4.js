import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComment, faRetweet, faShare, faTimes, faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { json } from 'react-router-dom';
import Like from '../Like/Like';
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './Home.css'
import Comment from '../Comment/Comment';
import "./Home.css"
import CommentDialog from '../Comment/CommentDialog';

const Home = (props) => {

  const { pseudo, id, image } = props;;
  const [tweetCount, setTweetCount] = useState(0);
  const [myTweet, setMyTweet] = useState(false);
  const [editTweetId, setEditTweetId] = useState(id);
  const [tweetContentAdd, setTweetContentAdd] = useState("");
 
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [deleteTweet, setDeleteTweet] = useState(false);
  const [tweetToDelete, setTweetToDelete] = useState(null);
  const [commentClick, setCommentClick] = useState(false);
  const [commentedTweetId, setCommentedTweetId] = useState(null);
  
const deleteCommentClick = () => {
  setCommentClick(false)
}
  //ecrire tweets
  const handleSubmit = () => {
    if (tweetContentAdd.trim() === '') {
      toast.error('Tweet content cannot be empty.');
      setError(true);
      return;
    }
    else {
      axios.get('https://promises-cb263f.appdrag.site/api/checkToken', {
        params: {
          "token": localStorage.getItem("tokenBlog"),
          "AD_PageNbr": "1",
          "AD_PageSize": "500"
        }
      }).then(function (response) {
        if (response.data.Table.length > 0) {
          axios.get('https://promises-cb263f.appdrag.site/api/AddTweet', {
            params: {
              "TweetContent": tweetContentAdd,
              "UserID": id,
              "Name": pseudo,
              "date": moment().format(),
              "image": image
            }
          }).then(function (response) {
            setTweetCount((tweetCount) => tweetCount + 1);
            if (response.data.affectedRows > 0) {
              setTweetContentAdd("");
              setTweetCount(tweetCount + 1);
            }
          });
        }
      });
    } setError(false);
  };
  
//bouton modifier
 const handleModify = (tweet) => {
  console.log("ds le handleModify");
  setMyTweet(true)
  setEditTweetId(tweet.id)
  setTweetContentEdit(tweet.TweetContent)
 }
 
  // delete
  const handleDelete = (tweet) => {
    setTweetToDelete(tweet); // Mémorisez le tweet à supprimer.
    setDeleteTweet(true); // Affichez la boîte de dialogue de confirmation.
   
  };
  const confirmDelete = () => {
    if (tweetToDelete) {
      console.log(tweetToDelete.id);
      axios.get("https://promises-cb263f.appdrag.site/api/deleteTweet", {
        params: {
          id: tweetToDelete.id,
        },
      }).then(function (response) {
        console.log(response.data);
        if (response.data.affectedRows > 0) {
          // Effectuez des actions supplémentaires en cas de suppression réussie.
        }
      });
      setDeleteTweet(false); // Fermez la boîte de dialogue après la suppression.
    }
  };
  
  const cancelDelete = () => {
    setDeleteTweet(false); // Annulez la suppression et fermez la boîte de dialogue.
  };  
  //bouton comment
  const handleCommentClick = (tweetId) => {
    setCommentClick(!commentClick)
    setCommentedTweetId(tweetId);
    }
  //lire les tweets

  useEffect(() => {
    const currentTimestamp = moment().unix();
    axios
      .get('https://promises-cb263f.appdrag.site/api/getAllTweets', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500',
          timestamp: currentTimestamp,
        },
      })
      .then(function (response) {
        response.data.Table.sort((a, b) => new Date(b.date) - new Date(a.date));
        setData(response.data.Table);
       
  
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite :', error);
      });
  }, [tweetCount,deleteTweet]);


  
 
  
  return (
    <div className="flex">
      <div className="flex-grow p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Welcome, {pseudo} !</h1>
        </div>

        <div className="mb-4 flex flex-col">
          <textarea
            placeholder="What's happening?"
            className={`w-full border rounded p-2 mb-2 ${error ? 'border-red-500' : ''}`}
            rows="4"
            value={tweetContentAdd}
            onChange={(e) => setTweetContentAdd(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded self-end">
            Tweet
          </button>
          <ToastContainer position="top-right" className="" autoClose={3000} />
        </div>

        {data &&
          data.map((tweet) => (

            <div key={tweet.id} className="p-4 mb-4 ">
              
              <div className="flex items-center ">
                <div className="rounded-full   h-12 w-12 bg-gray-300 flex items-center justify-center">
                  <img src={tweet.image} alt="Profile" className="h-10 w-10 rounded-full" />
                </div>

                <div className="ml-4 w-full">
                  <p className="font-semibold">{tweet.Name}</p>
                  <div className="flex items-center justify-between  ">
                  <p className="text-gray-500">{moment(tweet.date).format('LLL')}</p>
                {/*   Menu contextuel */}
                {tweet.id && tweet.UserID === id && (
               
                  <Menu  >
                  <MenuHandler >
                    <FontAwesomeIcon icon={faEllipsis}
                      variant="circular"
                      alt="tania andrew"
                      className="cursor-pointer text-xl text-gray-600"/>
                  </MenuHandler>
                  <MenuList >
                    <MenuItem className="flex items-center gap-3" onClick={() => handleModify(tweet)}>
                      <FontAwesomeIcon icon={faRetweet}  variant="small" className="font-medium text-black-500 mr-2"/>Modify
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4" onClick={() => handleDelete(tweet)}>
                      <FontAwesomeIcon icon={faTrash} className="text-black-500 mr-2 font-medium text-red-500" />Delete 
                    </MenuItem>
                  </MenuList>
                </Menu>
              
               )}
               
                  </div>
                </div>
                
                <ConfirmationModal
                isOpen={deleteTweet}
                onCancel={cancelDelete}
                onConfirm={confirmDelete}
                className="max-w-screen-md"
               
              />
              
             
              </div>

              {myTweet && editTweetId === tweet.id ? (

              
               <Modify editTweetId={editTweetId} tweetCount={tweetCount}/>
              ) : (
                <div className="mt-4 ml-16 px-4 border rounded bg-blue-50">
                  <p className="my-3">{tweet.TweetContent}</p>
                </div>
              )}

              <div className="flex flex-row justify-between mt-4 ml-16">
              
               
                  <Like tweet={tweet} id={id}/>
<div onClick={() => handleCommentClick(tweet.id)}>
                
                  <button className="p-2 flex items-center" >
        <FontAwesomeIcon icon={faComment} className="text-blue-500 mr-2" />Comment
    </button>
    </div>       
              </div>
              {commentClick && (
                <CommentDialog  id={id}  isOpen={commentClick} onClose={deleteCommentClick} tweetedId={commentedTweetId} pseudo={pseudo} tweetGeneral={tweet}  />)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;