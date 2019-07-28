import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {deletePost} from "../../store/actions/posts";
import Moment from "react-moment";

function PostItem({ id, post, image, userFirstName, userLastName, userImage, date, userId }) {
    const defaultImage = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.authentication.user);
    const posts = useSelector(state => state.posts.posts);

    function deletedPost() {
        dispatch(deletePost(id))
        posts.forEach((curr, index) => {
            if(curr._id === id){
                posts.splice(index, 1)
            }
        })
        
    };
    return (
        <div className="card my-2" style={{ background: "#7efff5" }}>

            <div className="row ml-2 my-2">
                <div className="col-md-2 col-3">
                    <img className="rounded-circle" style={{ width: "60px" }} src={userImage || defaultImage} alt="" />
                </div>

                <div className="col-md-9 col-7 my-auto">
                    <div className="font-weight-bold"> {userFirstName} {userLastName}</div>
                    <Moment format="hh:mm:ss a MMMM-D-YYYY" className="text-muted text-sm">{date}</Moment>
                    
                </div>
            </div>


            {image.length > 0 && (
                <img src={image} className="card-img" alt="" />
            )}

            <div className="card-body">
                <div className="card-text ml-3 mb-3">
                    {post}
                    {currentUser.id === userId && (
                        <div className="d-flex justify-content-end">
                            <Link to={`${id}/post`} className="btn warning btn-sm"><i className="fa fa-pencil"></i></Link>
                            <button onClick={deletedPost} className="btn btn-danger btn-sm"><i className="fa fa-remove"></i></button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default PostItem;