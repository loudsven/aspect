import { useSelector } from 'react-redux';
import {
    Button,
    ContentItem,
    ContentState,
    isButton,
    isLabel,
    isPanel,
    Label,
    Panel,
} from '../store/types/content';
import styles from './Content.module.css';

function Content() {
    const content = useSelector((state: ContentState) => state.content);

    const renderPanel = (panel: Panel) => {
        const { props, content } = panel;
        const { visible, width, height } = props;

        if (!visible) return null;

        return (
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    border: '1px solid black',
                    padding: '10px',
                    margin: '10px 0',
                }}
            >
                {content?.map((subItem, index) => (
                    <div key={index}>{renderContentItem(subItem)}</div>
                ))}
            </div>
        );
    };

    const renderLabel = (label: Label) => {
        const { caption, visible } = label.props;
        if (!visible) return null;
        return <span>{caption}</span>;
    };

    const renderButton = (button: Button) => {
        const { caption, width, height, visible } = button.props;
        if (!visible) return null;
        return (
            <button style={{ width: `${width}px`, height: `${height}px` }}>
                {caption}
            </button>
        );
    };

    const renderContentItem = (item: ContentItem) => {
        if (isPanel(item)) {
            return renderPanel(item);
        }

        if (isLabel(item)) {
            return renderLabel(item);
        }

        if (isButton(item)) {
            return renderButton(item);
        }

        return null;
    };

    return (
        <div className={styles.content}>
            {content.map((item, index) => (
                <div key={index}>{renderContentItem(item)}</div>
            ))}{' '}
        </div>
    );
}

export default Content;
