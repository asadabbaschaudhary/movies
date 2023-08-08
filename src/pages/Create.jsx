
import axios from 'axios'
import React, { useState } from 'react'

function Create() {
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [about,setAbout] = useState("");
    const [genre,setGenre] = useState("");
    const [rating,setRating] = useState("");
    const [feature,setFeature] = useState("");
    const [trailor,setTrailor] = useState("");

    const handleSubmit = () => {
        if(name && image && about && genre && rating && feature && trailor){
            const movieData ={
                name:name, image:image, about:about, genre:genre,rating:rating,feature:feature,trailor:trailor
            } 
            axios.post("http://localhost:3001/create-movies",movieData,{
                headers:{
                    "Content-Type":'multipart/form-data'
                }
            }
            ).then((response)=>{
                if(response.data.status == true){
                    alert("movie add successfully")
                } else {
                    alert("Something went wrong");
                }
            }) 
        }
      
    }
    return (
        <div className='container d-flex justify-content-center'>
            <div style={{ width: "50%" }}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ width: "600px" }} className='mx-auto'>
                    <div className="mb-3">
                        <label htmlFor="formFile" class="form-label">Image</label>
                        <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="about" className="form-label">About</label>
                        <input onChange={(e) => { setAbout(e.target.value) }} type="text" className="form-control" id="about" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input type='text' onChange={(e) => { setGenre(e.target.value) }} className="form-control" id="genre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="feature" className="form-label">Feature</label>
                        <input onChange={(e) => { setFeature(e.target.value) }} type="text" className="form-control" id="feature" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <input onChange={(e) => { setRating(e.target.value) }} type="text" className="form-control" id="rating" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="trailor" className="form-label">Trailor</label>
                        <input onChange={(e) => { setTrailor(e.target.value) }} type="text" className="form-control" id="trailor" />
                    </div>
                    <button onClick={handleSubmit} className='btn btn-dark outline-white'>Add Movie</button>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Create