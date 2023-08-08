import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UpdateMovie() {
    const id = useParams().id;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [about, setAbout] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [feature, setFeature] = useState("");
    const [trailor, setTrailor] = useState("");

    const handleSubmit = () => {
        const movieData = {
            name: name, image: image, about: about, genre: genre, rating: rating, feature: feature, trailor: trailor
        }
        axios.put("http://localhost:3001/update-movies/" + id, movieData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then((res) => {
            console.log(res.data)
            if (res.data.status == true) {
                alert("movies update successfully");
            } else {
                if (res.data.status == false) {
                    alert("something went wrong");
                }
            }
        })
    }


    useEffect(() => {
        axios.get("http://localhost:3001/movies/" + id).then((res) => {
            console.log(res.data.movies);

            if (res.data.status == true) {
                setImage(res.data.movies?.image);
                setName(res.data.movies?.name);
                setAbout(res.data.movies?.about);
                setGenre(res.data.movies?.genre);
                setFeature(res.data.movies?.feature);
                setRating(res.data.movies?.rating);
                setTrailor(res.data.movies?.trailor);


            }
        })
    }, []);


    return (
        <>

            <div className='container d-flex justify-content-center'>
                <div style={{ width: "50%" }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ width: "600px" }} className='mx-auto'>
                            <div className="mb-3">
                                <label htmlFor="formFile" class="form-label">Image</label>
                                <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" accept='image/*' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="about" className="form-label">About</label>
                                <input value={about} onChange={(e) => { setAbout(e.target.value) }} type="text" className="form-control" id="about" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="genre" className="form-label">Genre</label>
                                <input value={genre} type='text' onChange={(e) => { setGenre(e.target.value) }} className="form-control" id="genre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="feature" className="form-label">Feature</label>
                                <input value={feature} onChange={(e) => { setFeature(e.target.value) }} type="text" className="form-control" id="feature" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <input value={rating} onChange={(e) => { setRating(e.target.value) }} type="text" className="form-control" id="rating" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="trailor" className="form-label">Trailor</label>
                                <input value={trailor} onChange={(e) => { setTrailor(e.target.value) }} type="text" className="form-control" id="trailor" />
                            </div>
                            <button onClick={handleSubmit} className='btn btn-dark border-white' >Update Movie</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default UpdateMovie