import { ContentState } from './types/content';

export const initialState: ContentState = {
    content: [
        {
            type: 'panel',
            props: { width: 500, height: 200, visible: true },
            content: [
                {
                    type: 'label',
                    props: { caption: 'Panel Label 1', visible: true },
                },
                {
                    type: 'button',
                    props: {
                        caption: 'Button 1',
                        width: 100,
                        height: 40,
                        visible: true,
                    },
                },
                {
                    type: 'panel',
                    props: { width: 400, height: 100, visible: true },
                    content: [
                        {
                            type: 'label',
                            props: {
                                caption: 'Nested Panel Label',
                                visible: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: 'label',
            props: { caption: 'Main Label', visible: true },
        },
        {
            type: 'button',
            props: {
                caption: 'Main Button',
                width: 150,
                height: 50,
                visible: false,
            },
        },
    ],
};
