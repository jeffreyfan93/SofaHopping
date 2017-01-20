export const selectReviews = (reviews, sofaId) => {
  let ownReviews = [];
  Object.keys(reviews).map(id => {
    if(reviews[id].sofa_id === sofaId) {
      ownReviews.push(reviews[id]);
    }
  });
  return ownReviews;
};
