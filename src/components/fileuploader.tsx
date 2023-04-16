import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from '../firebaseconfig.json';


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadMessage, setUploadMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            setSelectedFile(fileList[0]);
            setUploadMessage("Uploading..");
            handleFileUpload(fileList[0]);
        }
    };

    const handleFileUpload = async (file:File) => {
        setLoading(true);
        try {
            const storageRef = ref(storage);
            // const filesRef = ref(storageRef,'files')
            const fileRef = ref(storageRef, `${file.name}`);
            uploadBytes(fileRef, file).then((snapshot) => {
                setUploadMessage(`Success`);
                setSelectedFile(null);
            });

        } catch (error) {
            setUploadMessage(`File upload failed: ${error}`);
        }
        setLoading(false);
    };

    return (
        <div className="items-center justify-center">
            <label htmlFor="file-upload" className="justify-center bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                {loading ? "Uploading..." : "Apply Now"}
            </label>
            <input type="file" id="file-upload" onChange={handleFileInputChange} className="hidden" />

            {uploadMessage && <p className="mt-4 text-center text-green-500">{uploadMessage}</p>}
        </div>
    );
};

export default FileUpload;
