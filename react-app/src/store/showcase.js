const LOAD = 'showcases/LOAD'
const ONE = 'showcases/ONE'

const load = list => ({
    type: LOAD,
    list
});

const one = showcase => ({
    type: ONE,
    showcase
});

export const listshowcases = () => async dispatch => {
    const response = await fetch('/api/showcases/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const list = await response.json();
    dispatch(load(list))
};

export const getOneshowcase = (id) => async dispatch => {
    const response = await fetch(`/api/showcases/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const showcase = await response.json()
    dispatch(one(showcase))
};

export const getCategories = (id) => async dispatch => {
    const response = await fetch(`/api/categories/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}

const initialState = {
    list: []
};

const showcaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const showcaseList = {};
            action.list.showcases.forEach(showcase => {
                showcaseList[showcase.id] = showcase
            });
            return {
                ...showcaseList,
                ...state,
                list: action.list
            }
        }
        case ONE: {
            if (!state[action.showcase.id]) {
                const newState = {
                    ...state,
                    [action.showcase.id]: action.showcase
                }
                const showcaseList = newState.list.map(id => newState[id])
                showcaseList.push(action.showcase)
                newState.list = showcaseList
                return newState
            }
        }
        default:
            return state;
    }

};

export default showcaseReducer;
