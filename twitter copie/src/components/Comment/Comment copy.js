import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { Textarea, Button, IconButton } from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Like from "../Like/Like";

function App() {
  return <Picker />;
}

const Comment = (props) => {
  const { tweet, id , commentClick } = props;
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [commentContentAdd, setCommentContentAdd] = useState("");
  const [commentContentEdit, setCommentContentEdit] = useState("");
  const [error, setError] = useState(false);

  const [dataComment, setDataComment] = useState();
  const [commentCount, setCommentCount] = useState(0);
  
  const handleSubmit = () => {
    if (commentText.trim() === "") {
      toast.error("Tweet content cannot be empty.");
      setError(true);
      return;
    } else {
      axios
        .get("https://promises-cb263f.appdrag.site/api/AddCommentTweet", {
          params: {
            TweetContent: commentText,
            UserID: id,
            Name: tweet.pseudo,
            date: moment().format(),
            image: tweet.image,
          },
        })
        .then(function (response) {
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

    // Faites quelque chose avec l'emoji sélectionné, par exemple, le stocker dans l'état ou effectuer une action
    setSelectedEmoji(emoji);
    // Masquer le sélecteur d'emoji
    setShowEmojiPicker(false);
    setCommentText(updatedCommentText);
  };

  useEffect(() => {
    const currentTimestamp = moment().unix();
    axios
      .get("https://promises-cb263f.appdrag.site/api/getAllComment", {
        params: {
          AD_PageNbr: "1",
          AD_PageSize: "500",
          timestamp: currentTimestamp,
        },
      })
      .then(function (response) {
        response.data.Table.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDataComment(response.data.Table);
        console.log("je suis ds le ueffect de comment");
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, [commentCount]);
 

  return (
    <div>
      <DialogHeader className=" pl-10 pt-12 ">
        <div className="flex ">
          <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center">
            <img src={tweet.image} alt="Profile" className="rounded-full"  />
          </div>

          <div className=" ">
            <p className="font-semibold text-base ml-4">{tweet.Name}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 ml-4 text-xs">{moment(tweet.date).format("LLL")}</p>
            </div>
            <div className="mt-4  border  rounded bg-blue-50 p-2 w-full text-base ">
              <p className="my-3   ">{tweet.TweetContent}</p>
            </div>
           <div className=" flex  justify-end	 text-lg  "><Like tweet={tweet} id={id}/></div> 
          </div>
        </div>
        
      </DialogHeader>

      <DialogBody>
  {dataComment && (
    <div>
      {dataComment
        .filter(comment => tweet.id == comment.TweetID)
        .map(comment => (
          <div key={comment.id} className="mb-4 mx-8 overflow-scroll text-xs">
            <div className="flex items-center">
              <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center">
                <img src={comment.image} alt="Profile" className="rounded-full" />
              </div>

              <div className="ml-4 w-full border rounded bg-gray-100">
                <p className="font-semibold">{comment.name}</p>
                <div className="mt-2 border rounded bg-gray-200 p-1">
                  <p className="my-3">{comment.CommentContent}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">{moment(comment.date).format("LLL")}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      {dataComment.some(comment => tweet.id == comment.TweetID) ? null : (
        <div className="mb-4 mx-8 overflow-scroll text-xs">
          <div>aucun commentaire</div>
        </div>
      )}
    </div>
  )}
</DialogBody>


      <DialogFooter>
        <div className="flex ml-2 flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
          <div className="flex">
            <IconButton variant="text" className="rounded-full" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </IconButton>
          </div>

          <Textarea
            value={commentText}
            onClick={handleSubmit}
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
