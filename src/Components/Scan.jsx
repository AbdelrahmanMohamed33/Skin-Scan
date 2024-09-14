


// import React, { useState, useEffect } from 'react';
// import img from '../assets/img/upload.jpg';
// import { isTokenExpired, getToken } from '../Helper/Tokens';
// import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios
// import { data } from 'autoprefixer';

// const Scan = () => {
//     const [uploadedImage, setUploadedImage] = useState(null);
//     const [errorMessage, setErrorMessage] = useState(null); 
//     const [WoundMap,SetWoundMap] = useState('');
//     const navigate = useNavigate(); 
//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onload = () => {
//             setUploadedImage(reader.result);
//         };

//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleUpload = async () => {
//         if (isTokenExpired(getToken('access'))) {
//             navigate('/login');
//             return;
//         }

//         try {
//             const response = await axios.post('https://gp-backendapi-production.up.railway.app/api/Wound/upload', {
//                 uploadedImage
//             });
//             // if (response.status === 200) {
//             //     // Navigate('/woundDetails');
//             //     SetWoundMap(response.body["data"]);
//             //     console.log(WoundMap);
//             // } else {
//             //     // ... (e.g., display an error message)
//             // }
//         } catch (error) {
//             setErrorMessage(error.response?.data?.data?.message || 'Upload failed. Please try again.');
//         }
//     };

//     useEffect(() => {
//         if (isTokenExpired(getToken('access'))) {
//             navigate('/login');
//         }
//     }, []);

//     return (
        // <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
        //     <div className="w-full lg:w-3/4 space-y-4">
        //         <h1 className="text-3xl font-semibold text-center lg:text-start mb-8">Scan Your Disease </h1>

        //         <div>
        //             <label htmlFor="file-upload" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-6">
        //                 Upload Image
        //             </label>
        //             <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
        //         </div>

        //         {uploadedImage && (
        //             <button onClick={handleUpload} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-6">
        //                 Upload
        //             </button>
        //         )}

        //         {errorMessage && (
        //             <div className="mt-4 text-red-500">
        //                 {errorMessage}
        //             </div>
        //         )}
        //     </div>
        //     <div className="w-full lg:w-3/4">
        //         {uploadedImage ? (
        //             <img className="rounded-lg" style={{ width: "500px", height: "500px" }} src={uploadedImage} alt="Uploaded" />
        //         ) : (
        //             <img className="rounded-lg" src={img} alt="Default" />
        //         )}
        //     </div>
        // </div>
//     );
// };

// export default Scan;
import React, { useState, useEffect } from 'react';
import img from '../assets/img/upload.jpg';
import { isTokenExpired, getToken } from '../Helper/Tokens';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Scan = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null); 
    const [WoundMap, setWoundMap] = useState(''); 
    const navigate = useNavigate(); 

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setUploadedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (isTokenExpired(getToken('access'))) {
            navigate('/login');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', uploadedImage, 'image.jpg'); 

            const response = await axios.post(import.meta.env.REACT_APP_API_URL+'/api/Wound/upload', formData, {
                headers: {
                    Authorization: `Bearer ${getToken('access')}`,
                    'Content-Type': 'multipart/form-data' 
                }
            });
           
            if (response.status === 200) {
                setWoundMap(response.data.data); 
                console.log(WoundMap);
            } else {
                console.log("skdf");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.data?.message || error);
        }
    };

    useEffect(() => {
        if (isTokenExpired(getToken('access'))) {
            navigate('/login');
        }
    }, []);

    return (
          <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <div className="w-full lg:w-3/4 space-y-4">
                <h1 className="text-3xl font-semibold text-center lg:text-start mb-8">Scan Your Disease </h1>

                <div>
                    <label htmlFor="file-upload" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-6">
                        Upload Image
                    </label>
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
                </div>

                {uploadedImage && (
                    <button onClick={handleUpload} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-6">
                        Upload
                    </button>
                )}

                {errorMessage && (
                    <div className="mt-4 text-red-500">
                        {errorMessage}
                    </div>
                )}
            </div>
            <div className="w-full lg:w-3/4">
                {uploadedImage ? (
                    <img className="rounded-lg" style={{ width: "500px", height: "500px" }} src={uploadedImage} alt="Uploaded" />
                ) : (
                    <img className="rounded-lg" src={img} alt="Default" />
                )}
            </div>
        </div>

    );
};

export default Scan;