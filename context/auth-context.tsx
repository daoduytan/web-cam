import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

const types = {
  loading: 'auth/loading',
  load_auth_done: 'auth/load_auth_done',
};

export interface IUser {
  _id: string;
  username: string;
  token: string;
}

interface IAuthState {
  isAuth: boolean;
  loading: boolean;
  user?: IUser;
}

interface IAuthAction {
  type: string;
  payload?: any;
}

const initialState: IAuthState = {
  isAuth: false,
  loading: true,
  user: undefined,
};

const reducerAuth = (state: IAuthState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case types.loading:
      return {
        ...state,
        loading: true,
      };
    case types.load_auth_done:
      console.log('dasd', action.payload)
      return {
        ...state,
        isAuth: !!action.payload,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

interface IAuthContext {
  state: IAuthState;
  dispatch: React.Dispatch<any>;
}

const initialContext = {
  state: initialState,
  dispatch: () => { },
};

const AuthContext = createContext<IAuthContext>(initialContext);

interface Props {
  children: ReactNode;
}

export const ProviderAuth = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducerAuth, initialState);

  useEffect(() => {
    async function progressAuth() {
      try {
        const token = window.sessionStorage.getItem('token');

        if (!token) {
          dispatch({ type: types.load_auth_done, payload: null });
          return;
        }

        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('response', response)

        const data = await response.json();

        dispatch({
          type: types.load_auth_done,
          payload: data.user,
        });
      } catch (error) {
        console.log('error auth', error)
        dispatch({ type: types.load_auth_done, payload: null });
      }
    }
    progressAuth();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  console.log('stsate', state)

  if (state.loading) {

    return <div>Loading ...</div>
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const setAuth = (user: IUser) => {
    dispatch({
      type: types.load_auth_done,
      payload: user,
    });
  };

  return {
    ...state,
    setAuth,
  };
};
