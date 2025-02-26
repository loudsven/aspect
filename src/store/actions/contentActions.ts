import { ContentItem } from '../types/content';

export const updateContent = (
    path: string,
    newValue: string | ContentItem,
) => ({
    type: 'UPDATE_CONTENT',
    payload: {
        path,
        newValue,
    },
});
