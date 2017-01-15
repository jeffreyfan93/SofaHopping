import * as APIUtil from '../util/sofa_api_util';

export const RECEIVE_SOFAS = 'RECEIVE_SOFAS';
export const RECEIVE_SOFA = 'RECEIVE_SOFA';
export const REMOVE_SOFA = 'REMOVE_SOFA';

const receiveSofas = (sofas) => ({
  type: RECEIVE_SOFAS,
  sofas
});

const receiveSofa = (sofa) => ({
  type: RECEIVE_SOFA,
  sofa
});

const removeSofa = id => ({
  type: REMOVE_SOFA,
  id
});

export const fetchSofas = () => dispatch => (
  APIUtil.fetchSofas()
    .then(sofas => dispatch(receiveSofas(sofas)))
);

export const addSofa = sofa => dispatch => (
  APIUtil.addSofa(sofa)
    .then(sofa1 => dispatch(receiveSofa(sofa1)))
);

export const updateSofa = sofa => dispatch => (
  APIUtil.updateSofa(sofa)
    .then(sofa1 => dispatch(receiveSofa(sofa1)))
);

export const deleteSofa = id => dispatch => (
  APIUtil.deleteSofa(id)
    .then(sofa => dispatch(removeSofa(sofa.id)))
);
