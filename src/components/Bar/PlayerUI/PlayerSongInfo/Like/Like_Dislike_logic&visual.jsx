import React, { useState, useEffect } from 'react';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from '../../../../../services/favorites';

const Like_Dislike_logic_visual = ({
  likeDislike,
  setLikeDislike,
  hover,
  setHover,
}) => {
  const [count, setCount] = useState(true);

  const [
    addToFav,
    {
      error: addToFavError,
      isLoading: isAddToFavLoading,
      isSuccess: isAddToFavSuccess,
    },
  ] = useAddFavoriteMutation();

  const [
    deleteFromFav,
    {
      error: deleteFromFavError,
      isLoading: isDeleteFromFavLoading,
      isSuccess: isDeleteFromFavSuccess,
    },
  ] = useDeleteFavoriteMutation();

  const handleLikeDislike = () => {
    setCount(!count);
    if (count) {
      setLikeDislike('#696969');
      addToFav(15);
    }
    if (!count) {
      setLikeDislike('transparent');
      deleteFromFav(15);
    }
  };

  const setToBright = () => {
    setHover('white');
  };

  const setToDim = () => {
    setHover('#ACACAC');
  };

  return (
    <svg
      style={{ cursor: 'pointer' }}
      onMouseEnter={setToBright}
      onMouseLeave={setToDim}
      onClick={handleLikeDislike}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
        fill={likeDislike}
      />
      <path
        d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
        stroke={hover}
      />
    </svg>
  );
};

export default Like_Dislike_logic_visual;
