import * as APIUtil from '../util/sofa_api_util';

export const RECEIVE_SOFAS = 'RECEIVE_SOFAS';
export const RECEIVE_SOFA = 'RECEIVE_SOFA';
export const REMOVE_SOFA = 'REMOVE_SOFA';
export const RECEIVE_SOFA_ERRORS = 'RECEIVE_SOFA_ERRORS';
export const REMOVE_SOFA_ERRORS = 'REMOVE_SOFA_ERRORS';

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

const receiveSofaErrors = errors => ({
  type: RECEIVE_SOFA_ERRORS,
  errors
});

export const removeSofaErrors = () => ({
  type: REMOVE_SOFA_ERRORS
});

export const fetchSofas = () => dispatch => (
  APIUtil.fetchSofas()
    .then(sofas => dispatch(receiveSofas(sofas)))
);

export const addSofa = sofa => dispatch => (
  APIUtil.addSofa(sofa)
    .then(sofa1 => dispatch(receiveSofa(sofa1)),
      error => dispatch(receiveSofaErrors(error.responseJSON)))
    .then(() => dispatch(removeSofaErrors()))
);

export const updateSofa = sofa => dispatch => (
  APIUtil.updateSofa(sofa)
    .then(sofa1 => dispatch(receiveSofa(sofa1)),
      error => dispatch(receiveSofaErrors(error.responseJSON)))
    .then(() => dispatch(removeSofaErrors()))
);

export const deleteSofa = id => dispatch => (
  APIUtil.deleteSofa(id)
    .then(sofa => dispatch(removeSofa(sofa.id)))
);

export const fetchSearchSofas = (city, guests) => dispatch => (
  APIUtil.fetchSearchSofas(city, guests)
    .then(sofas => dispatch(receiveSofas(sofas)))
);
