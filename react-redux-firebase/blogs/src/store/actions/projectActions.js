// import { firestore } from "firebase";
import { firestore } from "../../config/fbConfig";

export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async calls here to the db
    const fireStore = getFirestore();
    firestore
      .collection("blogs")
      .add({
        ...blog,
      })
      .then(() => {
        dispatch({ type: "CREATE_BLOG", blog });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", err });
      });
    //make async calls here to the db
  };
};
