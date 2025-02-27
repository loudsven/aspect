import { initialState } from '../initialState';
import {
    ContentActionTypes,
    UPDATE_CONTENT,
    UpdateContentAction,
} from '../types/actions';
import {
    ContentItem,
    ContentState,
    LastPart,
    Parent,
    Part,
    Path,
} from '../types/content';
import { parsePath, parseValue } from '../utils/utils';

const contentReducer = (state = initialState, action: ContentActionTypes) => {
    switch (action.type) {
        case UPDATE_CONTENT:
            return updateContent(state, action.payload);
        default:
            return state;
    }
};

const updateContent = (
    prevState: ContentState,
    payload: UpdateContentAction['payload'],
): ContentState => {
    const { path, newValue } = payload;

    return setValueAtPath(prevState, parsePath(path), parseValue(newValue));
};

const setValueAtPath = (
    prevState: ContentState,
    path: Path,
    newValue: string | ContentItem,
): ContentState => {
    const stack: Path = [...path];
    const state = { ...prevState };

    let parent: Parent = state;

    while (stack.length > 1) {
        const part: Part = stack.shift() as Part;

        parent[part] = Array.isArray(parent[part])
            ? [...parent[part]]
            : { ...parent[part] };

        parent = parent[part];
    }

    const lastPart: LastPart = stack.shift() as LastPart;

    if (lastPart) {
        parent[lastPart] = newValue;
    }

    return state;
};

export default contentReducer;
