import { useState } from 'react';
import axios from 'axios';
import { Navbar } from './home';

const NewPost = () => {
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
            console.log(reader.result.toString());
            preview.src = reader.result;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = new FormData();
        postData.append('name', formData.name);
        postData.append('message', formData.message);
        postData.append('image', formData.image);

        axios.post('http://localhost:8000/api/postUpload', postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log(response.data);
                // Handle success, if needed
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <>
            <Navbar />

            <section className="posts">
                <div className="postWrap">
                    <div className="textSection">
                        <div className="textWrapSec">
                            <form className='postForm' onSubmit={handleSubmit}>
                                    <input required id='name' type="text" name="name" placeholder="Type Your Name" value={formData.name} onChange={handleInputChange} />

                                    <textarea required name="message" rows={15} cols={50} placeholder="Type Your Message" value={formData.message} onChange={handleInputChange} />

                                    <input required id='image' type="file" name="image" onChange={handleFileChange} />

                                <button type="submit">Submit</button>
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
