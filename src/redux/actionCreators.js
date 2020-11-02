import {
  SAVE_COMMENT,
  FETCH_ALL_COMMENTS_REQUESTED,
  FETCH_ALL_COMMENTS,
} from "./actionTypes";

export const fetchAllCommentsRequested = () => {
  return { type: FETCH_ALL_COMMENTS_REQUESTED };
};

export const fetchAllComments = (comments) => {
  return { type: FETCH_ALL_COMMENTS, payload: comments };
};

export const saveComment = (comment) => {
  return { type: SAVE_COMMENT, payload: comment };
};
