import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser({ payload }) {
  try {
    const { data } = yield call(api, `/users/${payload.username}`);

    const repositoryData = {
      id: data.id,
      avatar: data.avatar_url,
      url: data.url,
      name: data.name,
      coordenates: payload.coordenates,
    };

    yield put(UserActions.addUserSuccess(repositoryData));
  } catch (error) {
    yield put(UserActions.addUserFailure(error));
  }
}
