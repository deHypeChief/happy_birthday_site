import { useEffect, useState } from 'react';
import axios from 'axios';

import {Link, useNavigate} from 'react-router-dom'

const NewPost = () => {
    const navTo = useNavigate()
    const [fileString, setFileString] = useState()
    
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        const preview = document.getElementById('imagePre');
        const reader = new FileReader();
    
        reader.onloadend = function () {
            setFileString(reader.result.toString('base64'));
            setFormData({ ...formData, image: reader.result.toString('base64') });

            preview.src = reader.result;
        };
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = '';
        }
    };

    // console.log(fileString);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        

        // https://hbs-api.vercel.app/api/postUpload
        axios.post('https://hbs-api.vercel.app/api/postUpload', formData)
            .then(() => {
                console.log(fileString,'done');

                alert('Your goodwill message has been sent')
                navTo('/')
            })
            .catch((error) => {
                console.log(formData);

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

                                    <input required id='image' accept="image/*" type="file"  name="image" onChange={handleFileChange} />

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
