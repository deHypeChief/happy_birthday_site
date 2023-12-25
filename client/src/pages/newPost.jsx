import { useEffect, useState } from 'react';
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom'

const NewPost = () => {
    const navTo = useNavigate()
    const [fileString, setFileString] = useState()
    
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = e.target.files[0];
        // create a connection
        
        setFormData({ ...formData, image: files });
        var preview = document.getElementById('imagePre');
        var file = document.getElementById('image').files[0];
        var reader = new FileReader();

        
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
        reader.onloadend = function () {

            setFileString(reader.result.toString('base64'))
            console.log(reader.result.toString('base64'));
            preview.src = reader.result;
        }
    };

    console.log(fileString);

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            name: formData.name,
            message: formData.message,
            image: fileString
        }
        console.log(formData);
        
        

        // https://hbs-api.vercel.app/api/postUpload
        axios.post('http://localhost:8000/api/postUpload', postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(() => {
                console.log(fileString,'done');

                alert('Your goodwill message has been sent')
                navTo('/')
            })
            .catch((error) => {
                console.log(error);
                alert('Error sending your message. Try a different Image')

            });
    };

    return (
        <>

            <section className="posts">
                <div className="postWrap">
                    <div className="textSection">
                        <div className="textWrapSec">
                            <form className='postForm' onSubmit={handleSubmit}>
                                    <input required id='name' type="text" name="name" placeholder="Type Your Name" value={formData.name} onChange={handleInputChange} />

                                    <textarea required name="message" rows={15} cols={50} placeholder="Type Your Message" value={formData.message} onChange={handleInputChange} />

                                    <input required id='image' type="file" name="image" onChange={handleFileChange} />

                                <button type="submit">Submit</button>
                                <Link to="/">
                                <button type="button">Cancel</button>

                                </Link>
                            
                            </form>
                        </div>

                    </div>
                    <div className="Image">
                        <div className="imageTall">
                            <img id='imagePre' src='' alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};




export default NewPost;
