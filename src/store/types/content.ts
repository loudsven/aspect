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

export type Part = 'content' | 'props' | `${number}`;
