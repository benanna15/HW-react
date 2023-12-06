import  { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faShare, faTimes, faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { Menu, MenuHandler, MenuList, MenuItem, IconButton, Avatar, Typography,} from "@material-tailwind/react";


import React from 'react'

const MenuTweet = (props) => {

    const { tweet, id } = props;
    const [myTweet, setMyTweet] = useState(false);
    const [editTweetId, setEditTweetId] = useState(id);


   //bouton modifier
//    const handleModify = (tweet) => {
//     setMyTweet(true)
//     setEditTweetId(tweet.id)
//     setTweetContentEdit(tweet.TweetContent)
//   }
// menu
const handleMenu = (tweet) => {
    // setIsContextMenuOpen(true)
    // setEditTweetId(tweet.id)
    // setTweetContentEdit(tweet.TweetContent)
   
    
  }
  return (
    <Menu>
      <MenuHandler>
        <FontAwesomeIcon icon={faEllipsis}
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer text-xl text-gray-600"/>
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-3">
          <FontAwesomeIcon icon={faRetweet}  variant="small" className="font-medium text-black-500 mr-2"/>Modify
        </MenuItem>
        <MenuItem className="flex items-center gap-4">
          <FontAwesomeIcon icon={faTrash} className="text-black-500 mr-2 font-medium text-red-500" />Delete 
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuTweet


