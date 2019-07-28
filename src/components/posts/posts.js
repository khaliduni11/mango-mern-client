import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/posts";
import PostItem from "./postsItem";
import { Link } from "react-router-dom"


function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const userProfile = useSelector(state => state.authentication.user);
    const defaultImage = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";
    var postsItem

    if (posts) {
        postsItem = posts.map(p => (
            <PostItem
                key={p._id}
                id={p._id}
                post={p.post}
                image={p.image}
                userId={p.user._id}
                userFirstName={p.user.firstName}
                userLastName={p.user.lastName}
                userImage={p.user.image}
                date={p.createdAt}
            />
        ))
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <div className="container">
            <div className="row">
                {/* current user profile and add button post*/}
                <div className="col-md-3 my-2">
                    <div className="card card-border-primary" style={{ background: "#dfe4ea" }}>
                        <img style={{ height: '270px' }} src={userProfile.image || defaultImage} alt="" />
                        <div className="card-footer bg-transparent border-success text-center">
                            {userProfile.firstName} {userProfile.lastName}
                        </div>
                    </div>
                    <Link to="/newpost" className="btn btn-primary btn-block my-2">Add New Post</Link>
                </div>

                {/* posts */}
                <div className="col-md-8 my-2">
                    {postsItem}
                </div>
            </div>
        </div>
    )
}

export default Posts;