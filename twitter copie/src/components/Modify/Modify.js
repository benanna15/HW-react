import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShare } from '@fortawesome/free-solid-svg-icons';

const Modify = (props) => {

const { editTweetId, tweetCount } = props
const [open, setOpen] = useState(true);
const [tweetContentEdit, setTweetContentEdit] = useState("");

 //modify tweet
 const handleModifyTweet = () => {


    if (tweetContentEdit.trim() === '') {
      toast.error('Tweet content cannot be empty.');
      setError(true);
      return;
    }
    else {
          axios.get('https://promises-cb263f.appdrag.site/api/updateTweet', {
            params: {
              "TweetContent": tweetContentEdit,
              "id": editTweetId,
              "date": moment().format()
            }
          }).then(function (response) {
            setTweetCount((tweetCount) => tweetCount + 1);
            if (response.data.affectedRows > 0) {
              setMyTweet(false);
            }
            else {
              console.log("erreur pas de modif");
            }
          })

        }
  
  };


  return (
    <div>
        {open && (
       <div className="mt-4 ml-16 px-4 border rounded bg-slate-100 relative">
                  <button
                    className="absolute top-1 right-3 text-gray-500 p-2 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                  </button>
                  
                  <textarea
                    className="my-3 w-full p-4 resize-y overflow-auto"
                    value={tweetContentEdit}
                    rows={2}
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
                )}
    </div>
  )
}

export default Modify
