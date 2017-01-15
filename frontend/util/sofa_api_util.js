export const fetchSofas = () => (
  $.ajax({
    method: 'GET',
    url: 'api/sofas'
  })
);

export const addSofa = sofa => (
  $.ajax({
    method: 'POST',
    url: 'api/sofas',
    data: { sofa }
  })
);

export const updateSofa = sofa => (
  $.ajax({
    method: 'PATCH',
    url: `api/sofas/${sofa.id}`,
    data: { sofa }
  })
);

export const deleteSofa = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/sofas/${id}`
  })
);
