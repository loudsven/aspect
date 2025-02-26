import { initialState } from '../initialState';
import {
    ContentActionTypes,
    UPDATE_CONTENT,
    UpdateContentAction,
} from '../types/actions';
import { ContentItem, ContentState, Part } from '../types/content';
import { parsePath } from '../utils/utils';

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

    return setValueAtPath(prevState, parsePath(path), newValue);
};

const setValueAtPath = (
    prevState: ContentState,
    path: string[],
    newValue: string | ContentItem,
): ContentState => {
    const stack = [...path];

    const state = Array.isArray(prevState) ? [...prevState] : { ...prevState };

    let parent = state;

    while (stack.length > 1) {
        const part: Part = stack.shift() as Part;

        if (parent[part] === undefined) {
            parent[part] = Array.isArray(parent) ? [] : {};
        }

        parent[part] = Array.isArray(parent[part])
            ? [...parent[part]]
            : { ...parent[part] };

        parent = parent[part];
    }

    const lastPart = stack.shift();

    if (lastPart) {
        parent[lastPart] = newValue;
    }

    return state as ContentState;
};

export default contentReducer;
