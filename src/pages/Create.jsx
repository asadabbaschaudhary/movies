
import React from 'react'

function Create() {
    return (
        <div className='container d-flex justify-content-center'>
            <div style={{ width: "50%" }}>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputName1" />
                    </div>

                </form>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div class="mb-3">
                        <label for="exampleInputImage1" class="form-label">Image</label>
                        <input type="text" class="form-control" id="exampleInputGenre1" />
                    </div>

                </form>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" />
                    </div>

                </form>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                </form>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                </form>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" class="btn btn-dark border-white d-flex mb-4 mx-auto">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Create