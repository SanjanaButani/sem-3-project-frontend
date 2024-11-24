import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";

const Categories = ({ setButton }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    
    const handleUpload = e => {
        setSelectedImage(e.target.files[0]);
    }
    
    const handleSubmit = async () => {
        try {
            console.log({
                file: selectedImage,
                name,
            });
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('name', name);

            const token = sessionStorage.getItem('b-token');
            
            const config = {
                method: "post",
                url: `${baseUrl}/admin/category/new`,
                headers: { 
                    "authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            };
            const res = await axios.request(config);
            if(res.data.success){
                alert(res.data.message);
                window.location.reload();
            }
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex flex-col items-center">
            <div className="px-10 flex justify-between w-full">
                <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Categories</h1>
                <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={() => setButton('categories')}>View Categories</button>
            </div>
            <div>
                {selectedImage ?
                    <>
                        <img
                            alt="not found"
                            src={URL.createObjectURL(selectedImage)}
                            className="shadow-lg rounded-full w-32 h-32 mt-4 object-cover"
                        />
                        <button className="text-current text-center w-full" onClick={() => setSelectedImage(null)}>Remove</button>
                    </>
                    :
                    <ImageUpload
                        onChange={handleUpload}
                        accept="image/*"
                    >
                        <p className='z-10'>Select Image</p>
                    </ImageUpload>
                }
            </div>
            <p className="text-current text-lg mt-3 drop-shadow-sm">Category Logo</p>
            <div className="flex flex-col mt-10 w-full px-52 items-center">
                <div className="flex flex-col w-full">
                    <span className="text-current text-base drop-shadow-md">Category Name</span>
                    <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <button className='bg-current px-5 py-3 w-fit text-[#fff] rounded-md mt-10 shadow hover:bg-hover' onClick={handleSubmit}>Add Category</button>
            </div>
        </div>
    )
}

export default Categories;