import React, {useState, useEffect} from "react";
import useReactRouter from "use-react-router";
import {useSelector, useDispatch} from "react-redux";
import {updatePost} from "../../store/actions/posts";

function UpdatePost() {
    const { match, history } = useReactRouter()
    const { post_id } = match.params;
    const dispatch = useDispatch();

    const [post, setPost] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");

    const inputData = {
        post, 
        image
    }


    const posts = useSelector(state => state.posts.posts);

    function handleSubmit(e) {
        e.preventDefault();
        if (image !== "" || post !== "") {
            dispatch(updatePost(inputData, post_id));
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

    useEffect(() => {
        posts.map(p => {
            if(post_id === p._id){
                setPost(p.post);
                setImage(p.image)
            }
            return p
        })
    }, [setPost, setImage, post_id, posts])

    return (
        <div className="container">
            {error.length > 0 && (
                <div className="alert alert-danger text-center lead">{error}</div>
            )}
            <form className="form-group my-5" onSubmit={handleSubmit}>
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

                <button className="btn btn-warning btn-block">Update Post</button>
            </form>
        </div>
    )
}


export default UpdatePost;