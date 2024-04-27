import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
const { v4: uuidv4 } = require("uuid");
export const uploadFileToFirebase =async (file:File,fileDirectory:string,setUrl:(url:string)=>void)=>{
    const fileName = `${fileDirectory}/${file.name + uuidv4()}`;
    const imageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(imageRef, file);
    // set up an event listener to track upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log(error);
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url:string) => {
        //   toast.success("uploaded successfully!");
          console.log("work somehow and url:::"+url);
          
         setUrl(url)
        });
      }
    );
  
}