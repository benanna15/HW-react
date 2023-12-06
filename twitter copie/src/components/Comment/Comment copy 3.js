import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { Dialog,DialogHeader,DialogBody,DialogFooter,} from "@material-tailwind/react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComment, faRetweet, faShare, faTimes, faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Like from "../Like/Like";
import CommentModify from "./CommentModify"

function App() {
  return <Picker />;
}

const Comment = (props) => {
  const { id , tweetedId , pseudo , tweetGeneral} = props;
  const [tweet, setTweet] = useState({})
  const [dataComment, setDataComment] = useState();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [pseudoById, setPseudoById] = useState();
  const [imageById, setImageById] = useState();
  const [myComment, setMyComment] = useState(false);
  const [editCommentID, setEditCommentID] = useState(0);
  const [commentContentEdit, setCommentContentEdit] = useState("");
console.log(pseudoById,imageById);
  
  const handleSubmit = () => {
    console.log(commentText,id);
    if (commentText.trim() === "") {
      toast.error("Tweet content cannot be empty.");
      setError(true);
      return;
    } else {
      axios.get('https://promises-cb263f.appdrag.site/api/AddTweetComment', {
  params: {
    UserID : id,
    date :moment().format(),
    CommentContent  : commentText,
    TweetID : tweetedId,
    name : pseudoById,
    image : imageById
  }
        })
        .then(function (response) {
          console.log(response.data);
          setCommentCount((commentCount) => commentCount + 1);
          if (response.data.affectedRows > 0) {
            setCommentText("");
            setCommentCount(commentCount + 1);
          }
        })
        .catch(function (error) {
          console.error("Error submitting tweet:", error);
          // Gérer l'erreur ici selon les besoins
        });
    }
  };

  const handleEmojiClick = (emoji) => {
    const updatedCommentText = commentText + emoji.native;
    setSelectedEmoji(emoji);
    setShowEmojiPicker(false);
    setCommentText(updatedCommentText);
  };

  const handleModify = (comment) => {
    console.log("ds le handleModify");
    setMyComment(true)
    setEditCommentID(comment.id)
    setCommentContentEdit(tweet.TweetContent)
   }


  useEffect(() => {
    axios.get('https://promises-cb263f.appdrag.site/api/getTweetById', {
      params: {
        id: tweetedId,
        AD_PageNbr: "1",
        AD_PageSize: "500"
      }
    })
      .then(function (response) {
        console.log(response.data);
        setTweet(response.data.Table[0])
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, [tweetedId]);
  useEffect(() => {
    axios.get('https://promises-cb263f.appdrag.site/api/getUserById', {
  params: {
    "id" : id,
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  console.log(response.data.Table[0].pseudo);
  console.log(response.data.Table[0].image);

        setPseudoById(response.data.Table[0].pseudo)
        setImageById(response.data.Table[0].image)
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, [tweetedId]);

  useEffect(() => {
    console.log("Fetching comments for TweetID:", tweet.id);
    const currentTimestamp = moment().unix();
    axios
      .get("https://promises-cb263f.appdrag.site/api/getAllComment", {
        params: {
          TweetID: tweetedId,
          AD_PageNbr: "1",
          AD_PageSize: "500",
          timestamp: currentTimestamp,
        },
      })
      .then(function (response) {
        response.data.Table.sort((a, b) => new Date(a.date) - new Date(b.date));
  
        const filteredComments = response.data.Table.filter(comment => comment.TweetID == tweetedId);
        console.log("Filtered Comments:", filteredComments);
  
        // Mise à jour de l'état dataComment avec les commentaires filtrés
        setDataComment(filteredComments);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, [ tweetedId,commentCount]);
  
 

  return (
    <div className="w-full overflow-scroll">
    <DialogHeader className="pl-10 pt-12   w-full ">
      {tweet && (
        <div className="flex w-full ">
          {console.log(tweet)}

          <div className="rounded-full  h-12 w-12 bg-gray-300 flex items-center justify-center">
            <img src={tweet.image}  alt="Profile" className="h-10 w-10 rounded-full" />
          </div>

          <div className="w-full pr-8">
            <p className="font-semibold text-base ml-4">{tweet.Name}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 ml-4 text-xs">
                {moment(tweet.date).format("LLL")}
              </p>
            </div>
            <div className="mt-4 border rounded bg-blue-50 p-2 w-full w-96  text-base">
              <p className="my-3 ">{tweet.TweetContent}</p>
            </div>
            <div className="flex justify-end text-lg">
            {/*   <Like tweet={tweetGeneral} id={tweet.id} /> */}
            </div>
          </div>
        </div>
      )}
    </DialogHeader>

    <DialogBody className="comment-container max-h-[400px] overflow-y-auto" >
        <div>
        {dataComment && dataComment.length > 0 ? (
  dataComment.map(comment => (
    <div key={comment.id} className="mb-4 mx-8  text-xs">
      {tweetedId && comment.UserID === id && (
               
               <Menu  className="">
               <MenuHandler >
                 <FontAwesomeIcon icon={faEllipsis}
                   variant="circular"
                   alt="tania andrew"
                   className="cursor-pointer text-xl text-gray-600 absolute right-12"/>
               </MenuHandler>
               <MenuList >
                 <MenuItem className="flex items-center gap-3"  onClick={() => handleModify(comment)} >
                   <FontAwesomeIcon icon={faRetweet}  variant="small" className="font-medium text-black-500 mr-2"/>Modify
                 </MenuItem>
                 <MenuItem className="flex items-center gap-4" /* onClick={() => handleDelete(tweet)} */>
                   <FontAwesomeIcon icon={faTrash} className="text-black-500 mr-2 font-medium text-red-500" />Delete 
                 </MenuItem>
               </MenuList>
             </Menu>
           
            )}
      <div className="flex ">
        <div className="rounded-full h-11 w-12 bg-gray-300 flex items-center justify-center">
          <img src={comment.image} alt="Profile" className="h-10 w-10 rounded-full" />
        </div>

        <div className="ml-4 w-full ">
          <p className="font-semibold">{comment.name}</p>
          <p className="text-gray-500">{moment(comment.date).format("LLL")}</p>
          <div className="mt-2 border rounded bg-gray-200 p-1">
          {myComment && editCommentID == comment.id ? <CommentModify comment={comment} commentContentEdit={commentContentEdit} editCommentID={editCommentID}/> :
            <p className="my-3">{comment.CommentContent}</p>
      }
          </div>
        </div>
      </div>
      
    </div>
    
  ))
) : (
  <div className="flex justify-center">No comments</div>
)}
</div>
  
  </DialogBody>
<DialogFooter className="ml-4 mr-6">
        <div className="flex ml-2 w-full  flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
          <div className="flex">
            <IconButton variant="text" className="rounded-full" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </IconButton>
          </div>

          <Textarea 
            value={commentText} 
            onChange={(e) => setCommentText(e.target.value)}
            rows={1}
            resize={true}
            placeholder="Your Message"
            className="min-h-full !border-0 focus:border-transparent"
            containerProps={{ className: "grid h-full" }}
            labelProps={{ className: "before:content-none after:content-none" }}
          />

          <div>
            <IconButton variant="text" className="rounded-full" onClick={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </IconButton>
          </div>
        </div>
      </DialogFooter>

      {showEmojiPicker && <Picker data={data} onEmojiSelect={handleEmojiClick} />}
  </div>
);
};

export default Comment;
