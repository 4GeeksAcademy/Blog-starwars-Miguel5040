const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: []
		},
		actions: {
			asignCharacters: (arrayCharacters) => {
				setStore({ characters: arrayCharacters });
			},

			asignPlanets: (arrayPlanets) => {
				setStore({ planets: arrayPlanets });
			}
		}
	};
};

export default getState;
