// import React, { useEffect, useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faComment, faRetweet, faShare, faTimes, faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import moment from 'moment';




// const CommentModify = (props) => {

//     const {comment, commentContentEdit, editCommentID} = props
//     const [error, setError] = useState(false);

//     const handleModifyTweet = () => {
//         if (commentContentEdit.trim() === '') {
//           toast.error('Le contenu du tweet ne peut pas être vide.');
//           setError(true);
//           return;
//         } else {
//           axios
//             .get('https://promises-cb263f.appdrag.site/api/updateTweet', {
//               params: {
//                 TweetContent: tweetContentEdit,
//                 id: editTweetId,
//                 date: moment().format(),
//               },
//             })
//             .then(function (response) {
//               setTweetCount((tweetCount) => tweetCount + 1);
//               if (response.data.affectedRows > 0) {
//                 setMyTweet(false);
//               } else {
//                 console.log("Erreur : aucune modification n'a été apportée");
//               }
//             })
//             .catch(function (error) {
//               console.error('Erreur lors de la requête API :', error);
//             })
//             .finally(() => {
//               setError(false);
//             });
//         }
//       }; 

//   return (
//     <div className="mt-4 ml-16 px-4 border rounded bg-slate-100 relative">
//     <button
//       className="absolute top-1 right-3 text-gray-500 p-2 cursor-pointer"
//       onClick={() => setMyTweet(false)}
//     >
//       <FontAwesomeIcon icon={faTimes} className="text-xl" />
//     </button>
    
//     <textarea
//       className="my-3 w-full p-4 resize-y overflow-auto"
//       value={tweetContentEdit || ''}
//       rows={2}
//       onChange={(e) => setTweetContentEdit(e.target.value)}
//     />
//     <div className="h-6" />
//     <button
//       type="submit"
//       onClick={()=>handleModifyTweet(tweet.id)}
//       className="absolute bottom-0 right-2 bg-transparent text-blue-500 px-3 py-3 rounded"
//     >
//       <FontAwesomeIcon icon={faShare} />
//     </button>
//   </div>
//   )
// }

// export default CommentModify
