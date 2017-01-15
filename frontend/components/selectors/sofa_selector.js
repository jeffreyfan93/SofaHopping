export const selectCurrentUserSofas = (sofas, currentUser) => {
  let currentUserSofas = [];
  Object.keys(sofas).map(id => {
    if (currentUser && (sofas[id].user_id === currentUser.id)) {
      currentUserSofas.push(sofas[id]);
    }
  });
  return (currentUserSofas);
};
