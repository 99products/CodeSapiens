import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "../firebaseconfig.json";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({ subsets: ["latin"] });
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedFile(fileList[0]);
      setUploadMessage("Uploading..");
      handleFileUpload();
    }
  };

  const handleFileUpload = async () => {
    setLoading(true);
    try {
      const storageRef = ref(storage);
      // const filesRef = ref(storageRef,'files')
      const fileRef = ref(storageRef, `${selectedFile?.name}`);
      uploadBytes(fileRef, selectedFile!).then((snapshot) => {
        setUploadMessage(`Success`);
        setSelectedFile(null);
      });
    } catch (error) {
      setUploadMessage(`File upload failed: ${error}`);
    }
    setLoading(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: 35,
          width: "auto",
          backgroundColor: "gray",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          padding: "10px 20px",
          borderRadius: 10,
          gap: 10,
        }}
      >
        <label
          style={{ color: "white" }}
          htmlFor="file-upload"
          className={`${inter.className}`}
        >
          {loading ? "Uploading..." : "Apply Now"}
        </label>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            backgroundColor: "black",
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="../assets/upload.svg"
            style={{ objectFit: "cover", width: 20, height: 20 }}
          />
        </div>
      </div>
      <span style={{ paddingTop: 10 }}>{uploadMessage}</span>
    </>
  );
};

export default FileUpload;
