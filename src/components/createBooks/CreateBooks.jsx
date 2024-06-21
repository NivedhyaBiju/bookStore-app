// import React, { useState } from 'react'
// import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
// import { Link, useNavigate } from 'react-router-dom';
// import { addBookApi } from '../../services/allApis';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const CreateBooks = () => {

//     const [bookInputs, setBookInputs] = useState({
//         title:"",
//         coverImg:"",
//         author:"",
//         publishedIn:"",
//         preface:""
//     })

//     const navigate = useNavigate();


//     const setDatas = (e) => {
//         const {value, name} = e.target
//         setBookInputs({...bookInputs,[name]:value})
//     }
//     console.log(bookInputs);

//     const addBook = async() => {
//         const {title, coverImg, author, preface} = bookInputs
//         if(title=="" || coverImg=="" || author=="" || preface==""){
//             toast.error("please fill all details")
//         }
//         else{
//             const out =await addBookApi(bookInputs)
//             console.log(out);
//             if(out.status>=200 && out.status<300){
//                 toast.success("Book added successfully")
//                 navigate('/library')
//             }
//             else{
//                 toast.error("Book adding failed")
//             }
//         }
//     }

//     return (
//         <div
//             className="py-10 flex items-center justify-center min-h-screen"
//             style={{
//                 backgroundImage: 'url(https://i.postimg.cc/6q09H842/book.jpg)',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//             }}
//         >
//             <ToastContainer />
//             <div className="container py-10">
//                 <div className="grid grid-cols-1 lg:px-20 place-items-center lg:place-items-end lg:mr-20 py-8">
//                     <div className="rounded-3xl bg-gray-100 dark:bg-gray-500 relative shadow-xl duration-high group max-w-[500px] p-5 sm:p-10">
//                         <Link to={'/library'}>
//                             <button style={{ borderColor: 'black' }} className="border text-white px-4 py-2 rounded-3xl hover:bg-orange-400">
//                                 <TbArrowBigLeftLinesFilled style={{ color: 'black' }} />
//                             </button>
//                         </Link>
//                         <form className="space-y-4 mt-5">
//                             <input
//                             onChange={(e)=>setDatas(e)}
//                             name="title"
//                                 type="text"
//                                 placeholder="Title: Echoes of Eternity"
//                                 className="w-full p-2 rounded"
//                             />
//                             <input
//                             onChange={(e)=>setDatas(e)}
//                             name="coverImg"
//                                 type="text"
//                                 placeholder="Cover Image: Visual Symphony"
//                                 className="w-full p-2 rounded"
//                             />
//                             <input
//                             onChange={(e)=>setDatas(e)}
//                             name="author"
//                                 type="text"
//                                 placeholder="Author: Architect of Words"
//                                 className="w-full p-2 rounded"
//                             />
//                             <input
//                             onChange={(e)=>setDatas(e)}
//                             name="publishedIn"
//                                 type="text"
//                                 placeholder="Published In: Dawn of Discovery"
//                                 className="w-full p-2 rounded"
//                             />
//                             <textarea
//                             onChange={(e)=>setDatas(e)}
//                             name="preface"
//                                 placeholder="Preface: Unveil the Narrative"
//                                 className="w-full p-2 rounded"
//                             />
//                             <div className="flex justify-between">
//                                 <button
//                                     type="submit"
//                                     className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-700"
//                                 >
//                                     Close
//                                 </button>
//                                 <button
//                                 onClick={addBook}
//                                     type="button"
//                                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                                 >
//                                     Add
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default CreateBooks


import React, { useState } from 'react';
import { TbArrowBigLeftLinesFilled } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { addBookApi } from '../../services/allApis';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBooks = () => {
    const [bookInputs, setBookInputs] = useState({
        title: '',
        coverImg: '',
        author: '',
        publishedIn: '',
        preface: ''
    });

    const navigate = useNavigate();

    const setDatas = (e) => {
        const { value, name } = e.target;
        setBookInputs({ ...bookInputs, [name]: value });
    };

    const addBook = async () => {
        const { title, coverImg, author, preface } = bookInputs;
        if (title === '' || coverImg === '' || author === '' || preface === '') {
            toast.error('Please fill all details');
        } else {
            try {
                const result = await addBookApi(bookInputs);
                if (result.status >= 200 && result.status < 300) {
                    toast.success('Book added successfully');
                    navigate('/library');
                } else {
                    toast.error('Book adding failed');
                }
            } catch (error) {
                console.error('Error adding book:', error);
                toast.error('Book adding failed');
            }
        }
    };

    return (
        <div
            className="py-10 flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: 'url(https://i.postimg.cc/6q09H842/book.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <ToastContainer />
            <div className="container py-10">
                <div className="grid grid-cols-1 lg:px-20 place-items-center lg:place-items-end lg:mr-20 py-8">
                    <div className="rounded-3xl bg-gray-100 dark:bg-gray-500 relative shadow-xl duration-high group max-w-[500px] p-5 sm:p-10">
                        <Link to={'/library'}>
                            <button style={{ borderColor: 'black' }} className="border text-white px-4 py-2 rounded-3xl hover:bg-orange-400">
                                <TbArrowBigLeftLinesFilled style={{ color: 'black' }} />
                            </button>
                        </Link>
                        <form className="space-y-4 mt-5">
                            <input
                                onChange={(e) => setDatas(e)}
                                name="title"
                                type="text"
                                placeholder="Title: Echoes of Eternity"
                                className="w-full p-2 rounded"
                            />
                            <input
                                onChange={(e) => setDatas(e)}
                                name="coverImg"
                                type="text"
                                placeholder="Cover Image: Visual Symphony"
                                className="w-full p-2 rounded"
                            />
                            <input
                                onChange={(e) => setDatas(e)}
                                name="author"
                                type="text"
                                placeholder="Author: Architect of Words"
                                className="w-full p-2 rounded"
                            />
                            <input
                                onChange={(e) => setDatas(e)}
                                name="publishedIn"
                                type="text"
                                placeholder="Published In: Dawn of Discovery"
                                className="w-full p-2 rounded"
                            />
                            <textarea
                                onChange={(e) => setDatas(e)}
                                name="preface"
                                placeholder="Preface: Unveil the Narrative"
                                className="w-full p-2 rounded"
                            />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-700"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={addBook}
                                    type="button"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBooks;

