import React, { useState } from "react";
import useReactRouter from "use-react-router"
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions/posts";

function AddPostForm() {

        const dispatch = useDispatch();

        const [post, setPost] = useState("");
        const [image, setImage] = useState("");
        const [error, setError] = useState("");

        const inputData = {
            post,
            image
        }

        const { history } = useReactRouter();

        function handleSubmit(e) {
            e.preventDefault();
            if (image !== "" || post !== "") {
                dispatch(addPost(inputData));
                setPost("");
                setImage("");
                history.push("/posts");
            } else {
                setError("image/post must fill one of them")
                setTimeout(() => {
                    setError("")
                }, 5000)
            }

        }

        return (
            <div className="container">
                {error.length > 0 && (
                    <div className="alert alert-danger my-4 text-center lead">{error}</div>
                )}
                <form onSubmit={handleSubmit} className="form-group my-4">
                    <textarea
                        name=""
                        cols="10"
                        rows="5"
                        placeholder="Enter your post"
                        className="form-control"
                        value={post}
                        onChange={e => setPost(e.target.value)}
                    >
                    </textarea>
                    <input
                        type="text"
                        className="form-control my-2"
                        name="image"
                        placeholder="Enter your image"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />

                    <button className="btn btn-primary btn-block">Add Post</button>
                </form>
            </div>
        )
    }

export default AddPostForm;