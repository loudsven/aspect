export type ContentItem = Panel | Label | Button;
export interface ContentState {
    content: ContentItem[];
}
export interface Panel {
    type: 'panel';
    props: {
        width: number;
        height: number;
        visible: boolean;
    };
    content?: ContentItem[];
}

export interface Label {
    type: 'label';
    props: {
        caption: string;
        visible: boolean;
    };
}

export interface Button {
    type: 'button';
    props: {
        caption?: string;
        width: number;
        height: number;
        visible: boolean;
    };
}

export type Path = ['content', `${number}`, ...Part[], LastPart];

export type Part = 'content' | 'props' | `${number}`;

export type LastPart =
    | Part
    | 'type'
    | 'width'
    | 'height'
    | 'caption'
    | 'visible';

export const isPanel = (item: ContentItem): item is Panel => {
    return item.type === 'panel';
};

export const isLabel = (item: ContentItem): item is Label => {
    return item.type === 'label';
};

export const isButton = (item: ContentItem): item is Button => {
    return item.type === 'button';
};

export type Parent = ContentState | ContentItem | ContentItem[];
