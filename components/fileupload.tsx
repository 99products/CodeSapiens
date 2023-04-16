import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes } from "firebase/storage";
import firebaseConfig from '../firebaseconfig.json';



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

interface FileUploadProps {
  storagePath: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ storagePath }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (file) {
      const storageRef = ref(storage);
      // const filesRef = ref(storageRef,'files')
      const fileRef = ref(storageRef,`${storagePath}/${file.name}`);  
   // 'file' comes from the Blob or File API
      uploadBytes(fileRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        setFile(null);
      });
     
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleFileUpload} className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Apply Now</button>
    </div>
  );
};

export default FileUpload;
