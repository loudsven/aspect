export const UPDATE_CONTENT = 'UPDATE_CONTENT';

export type ContentActionTypes = UpdateContentAction;

export interface UpdateContentAction {
    type: typeof UPDATE_CONTENT;
    payload: {
        path: string;
        newValue: string;
    };
}
