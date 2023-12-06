import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComment, faRetweet, faShare, faTimes, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { json } from 'react-router-dom';
import Like from '../Like/Like';
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../../redux/slices/tweets.slice';



const Home = (props) => {

  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const { pseudo, id, image } = props;;
  const [tweetCount, setTweetCount] = useState(0);
  const [myTweet, setMyTweet] = useState(false);
  const [editTweetId, setEditTweetId] = useState(id);
  const [tweetContentAdd, setTweetContentAdd] = useState("");
  const [tweetContentEdit, setTweetContentEdit] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  

console.log({tweetCount});
 
  

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
        console.log(response.data);
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
            console.log(response.data);
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
    setMyTweet(true)
    setEditTweetId(tweet.id)
    setTweetContentEdit(tweet.TweetContent)
  }

  //modify tweet
  const handleModifyTweet = () => {

    console.log("bouton de partage clique");
    console.log(tweetContentEdit);
    console.log(editTweetId);

    if (tweetContentEdit.trim() === '') {
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
          axios.get('https://promises-cb263f.appdrag.site/api/updateTweet', {
            params: {
              "TweetContent": tweetContentEdit,
              "id": editTweetId,
              "date": moment().format()
            }
          }).then(function (response) {
            console.log(tweetContentEdit);
            console.log("la reponse " + JSON.stringify(response.data));
            setTweetCount((tweetCount) => tweetCount + 1);
            if (response.data.affectedRows > 0) {
              setMyTweet(false);
            }
            else {
              console.log("erreur pas de modif");
            }
          })

        }
      });
    } setError(false);
  };

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
        console.log(response.data.Table);
  
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite :', error);
      });
  }, [tweetCount]);

  // menu
  const handleMenu = () => {
    
  }
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

            <div key={tweet.id} className="p-4 mb-4">
              
              <div className="flex items-center ">
                <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center">
                  <img src={tweet.image} alt="Profile" className="h-10 w-10 rounded-full" />
                </div>

                <div className="ml-4 w-full">
                  <p className="font-semibold">{tweet.Name}</p>
                  <div className="flex items-center justify-between  ">
                  <p className="text-gray-500">{moment(tweet.date).format('LLL')}</p>
                {/*   Menu contextuel */}
                  { tweet.id && tweet.UserID === id && (
                  <button className='mr-1' onClick={handleMenu}> 
                    <FontAwesomeIcon icon={faEllipsis} className='text-xl'/>
                  </button>
                 )}
                  </div>
                </div>

              </div>

              {myTweet && editTweetId === tweet.id ? (

              
                <div className="mt-4 ml-16 px-4 border rounded bg-slate-100 relative">
                  <button
                    className="absolute top-1 right-3 text-gray-500 p-2 cursor-pointer"
                    onClick={() => setMyTweet(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                  </button>
                  <textarea
                    className="my-3 w-full h-28 p-4 resize-y overflow-auto"
                    value={tweetContentEdit}
                    onChange={(e) => setTweetContentEdit(e.target.value)}
                  />
                  <div className="h-6" />
                  <button
                    type="submit"
                    onClick={handleModifyTweet}
                    className="absolute bottom-0 right-2 bg-transparent text-blue-500 px-3 py-3 rounded"
                  >
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                </div>
              ) : (
                <div className="mt-4 ml-16 px-4 border rounded bg-slate-100">
                  <p className="my-3">{tweet.TweetContent}</p>
                </div>
              )}

              <div className="flex justify-between mt-4 ml-16">
               {console.log(tweet)} 
               
                  <Like tweet={tweet} id={id}/>
                 {console.log('Value of tweet.id in Home:', tweet.id)} 

                {tweet.UserID === id && (
                  <button className="p-2 flex items-center" type="submit" onClick={() => handleModify(tweet)}>
                    <FontAwesomeIcon icon={faRetweet} className="text-black-500 mr-2" />
                    Modify
                  </button>
                )}

                <div className="p-2 flex items-center">
                  <FontAwesomeIcon icon={faComment} className="text-blue-500 mr-2" />
                  Comment
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;