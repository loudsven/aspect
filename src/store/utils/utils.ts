export const parsePath = (path: string): string[] => {
    return (
        path
            .match(/([a-zA-Z0-9_]+|\[\d+\])/g)
            ?.map((segment) => segment.replace(/\[|\]/g, '')) || []
    );
};
