import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser({ payload }) {
  try {
    const { data } = yield call(api, `/users/${payload.username}`);

    const userIsDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (userIsDuplicated) {
      yield put(UserActions.addUserFailure('Usuário já existe na listagem'));
      toast.error('Usuário já existe na listagem', {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    }

    const repositoryData = {
      id: data.id,
      avatar: data.avatar_url,
      url: data.html_url,
      name: data.name,
      username: data.login,
      coordenates: payload.coordenates,
    };

    yield put(UserActions.addUserSuccess(repositoryData));
    toast.success('Usuário adicionado com sucesso!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    yield put(UserActions.addUserFailure(error));
    toast.error('Ocorreu algum erro ao adicionar Usuário!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
