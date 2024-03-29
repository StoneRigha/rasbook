/**eslint-disable @next/next/no-img-element */

import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import * as firebase from "firebase";


function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const { imageToPost, setImageToPost } = useState(null);

  /**
   * send post to Firebase
   * @param {*} e
   * @returns
   */
  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.Fieldvalue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              //when the upload completes
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set({
                    postImage: url
                  }, {merge: true})
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  // add image to post function
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  //remove image
  const removeImage =() =>{
    setImageToPost(null);
}
  // constremoveImage =(()=>{
  //   setImageToPost(null)
  // });
  
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="image"
        />
        <form action="" className="flex flex-1 ">
          <input
            type="text"
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Post
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            {/* to check */}
            <Image className="h-10 image-contain" src={imageToPost} alt="image" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t ">
        <div className="inputIcon">
          {/* live video */}
          <VideoCameraIcon className="h-7 text-red-500 " />
          <p className="text-xs sm:text-sm xl:text-base"> Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          {/* photo/video */}
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Camera/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          {/* feelinf/activity */}
          <EmojiHappyIcon className="h-7 text-yellow-300 " />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
