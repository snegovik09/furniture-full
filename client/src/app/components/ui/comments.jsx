import { orderBy } from "lodash";
import React, { useEffect } from "react";
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment
} from "../../store/comments";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddCommentForm from "../common/comments/addCommentForm";
import CommentsList from "../common/comments/commentsList";
import { getFurnitureByName } from "../../store/furniture";

const Comments = () => {
    const { currentElement } = useParams();
    const furnitureByName = useSelector(getFurnitureByName(currentElement));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCommentsList(currentElement));
    }, []);
    const isLoading = useSelector(getCommentsLoadingStatus());
    const comments = useSelector(getComments());
    const handleSubmit = (data) => {
        dispatch(
            createComment({
                ...data,
                currentElement: furnitureByName.product_name
            })
        );
    };
    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    {/* {!userId ? ("Для написания комментариев необходимо авторизоваться!") : ( */}
                    <AddCommentForm onSubmit={handleSubmit} />
                    {/* )} */}
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
                            "loading..."
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
