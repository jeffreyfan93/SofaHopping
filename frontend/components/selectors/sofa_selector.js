export const selectCurrentUserSofas = (sofas, currentUser) => {
  let currentUserSofas = [];
  Object.keys(sofas).map(id => {
    if (currentUser && (sofas[id].user_id === currentUser.id)) {
      currentUserSofas.push(sofas[id]);
    }
  });
  return (currentUserSofas);
};

export const selectNotMySofas = (sofas, currentUser) => {
  let notMySofas = [];
  Object.keys(sofas).map(id => {
    if(sofas[id].user_id && (sofas[id].user_id !== currentUser.id)) {
      notMySofas.push(sofas[id]);
    }
  });
  return (notMySofas);
};
