import { Path } from '../types/content';

export const parsePath = (path: string): Path => {
    return (path
        .match(/([a-zA-Z0-9_]+|\[\d+\])/g)
        ?.map((segment) => segment.replace(/\[|\]/g, '')) || []) as Path;
};

export const parseValue = (value: string) => {
    try {
        return JSON.parse(value);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
        return value;
    }
};
