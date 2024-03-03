import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import './View.css';
import { PostContext } from '../../store/PostContext';

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetails;

    if (userId) {
      firebase
        .firestore()
        .collection('users')
        .where('id', '==', userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && postDetails.url && <img src={postDetails.url} alt="" />}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>

        {userDetails ? (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default View;
