import { useState } from "react";
import ImageUpload from './ImageUpload';
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";

const AddPackage = ({ setButton, categories }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [items, setItems] = useState('');

    const handleUpload = e => {
        setSelectedImage(e.target.files[0]);
    }

    const handleSubmit = async () => {
        try {
            const sepItems = items.split(',').map(item => item.trim());
            console.log({
                file: selectedImage,
                name,
                price,
                category,
                items: sepItems
            });
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('name', name);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('items', sepItems);

            const config = {
                method: "post",
                url: `${baseUrl}/admin/package/new`,
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
            };
            const res = await axios.request(config);
            if(res.data.success){
                alert(res.data.message);
                window.location.reload();
            }
            if(res.data.error){
                alert(res.data?.error?.message);
            }
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const renderCategories = categories.map((cat) => {
        return (
            <option value={cat._id} key={cat._id}>{cat.name}</option>
        );
    });
    
    return (
        <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex flex-col items-center">
            <div className="px-10 flex justify-between w-full">
                <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Packages</h1>
                <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={() => setButton('packages')}>View Packages</button>
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
            <p className="text-current text-lg mt-3 drop-shadow-sm">Package Logo</p>
            <div className="flex flex-col mt-10 w-full px-52 items-center">
                <div className="flex flex-col w-full">
                    <span className="text-current text-base drop-shadow-md">Package Name</span>
                    <input 
                        type="text"
                        name=""
                        id=""
                        className="text-current text-lg py-3 px-4 rounded-md shadow-md" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full mt-5">
                    <span className="text-current text-base drop-shadow-md">Package Price</span>
                    <input 
                        type="number"
                        name=""
                        id=""
                        className="text-current text-lg py-3 px-4 rounded-md shadow-md" 
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full mt-5">
                    <span className="text-current text-base drop-shadow-md">Package Category</span>
                    <select name="category" id="" value={category} onChange={e => setCategory(e.target.value)} className="text-current text-lg py-3 px-4 rounded-md shadow-md">
                        <option value={""} disabled>Select an option</option>
                        {renderCategories}
                    </select>
                </div>
                <div className="flex flex-col w-full mt-5">
                    <span className="text-current text-base drop-shadow-md">Package Items(Write like: Waxing, Hair Cut, Nail...)</span>
                    <input 
                        type="text"
                        name=""
                        id=""
                        className="text-current text-lg py-3 px-4 rounded-md shadow-md" 
                        value={items}
                        onChange={e => setItems(e.target.value)}
                    />
                </div>
                <button className='bg-current px-5 py-3 w-fit text-[#fff] rounded-md mt-10 shadow hover:bg-hover' onClick={handleSubmit}>Add Package</button>
            </div>
        </div>
    )
}

export default AddPackage;