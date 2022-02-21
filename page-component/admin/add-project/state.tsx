import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import { IProject } from '../../../collection';

interface IState {
	loading: boolean;
	project: IProject | Object;
}

interface IAction {
	type: string;
	payload?: any;
}

const initialState: IState = {
	loading: true,
	project: {},
};

const types = {
	LOADING: 'add-project/loading',
	LOAD_DONE: 'add-project/load-done',
	UPDATE: 'add-project/update',
};

const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case types.LOADING:
			return {
				...state,
				loading: true,
			};

		case types.LOAD_DONE:
			console.log(action.payload);
			return {
				...state,
				loading: false,
				project: action.payload,
			};

		case types.UPDATE:
			return {
				...state,
				project: {
					...state.project,
					...action.payload,
				},
			};
		default:
			return state;
	}
};

interface IContext {
	state: IState;
	dispatch: React.Dispatch<any>;
}

const intialContext: IContext = {
	state: initialState,
	dispatch: () => { },
};

const ContextFormProject = createContext<IContext>(intialContext);

interface Props {
	children: ReactNode;
	projectId?: string;
}

export const ProviderFormProject = ({ children, projectId }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchProject(id: string) {
			try {
				const response = await fetch(`/api/project/${id}`);

				const { data } = await response.json();

				dispatch({
					type: types.LOAD_DONE,
					payload: data,
				});
			} catch (error) {
				dispatch({ type: types.LOAD_DONE, payload: null });
			}
		}

		if (projectId) {
			fetchProject(projectId);
		} else {
			dispatch({ type: types.LOAD_DONE, payload: null });
		}
	}, [projectId]);

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	if (state.loading) {
		return <div>Loading...</div>;
	}

	return (
		<ContextFormProject.Provider value={value}>
			{children}
		</ContextFormProject.Provider>
	);
};

export const useFormProject = () => {
	const { state, dispatch } = useContext(ContextFormProject);

	const updateFieldProject = (value: any) => {
		dispatch({
			type: types.UPDATE,
			payload: value,
		});
	};

	return {
		...state,
		updateFieldProject,
	};
};
