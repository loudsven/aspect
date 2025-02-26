import { useDispatch } from 'react-redux';
import UpdateContentForm from './components/UpdateContentForm';
import { updateContent } from './store/actions/contentActions';
import styles from './App.module.css';
import { parseValue } from './store/utils/utils';
import Content from './components/Content';
function App() {
    const dispatch = useDispatch();

    const applyHandler = (path: string, newValue: string) => {
        dispatch(updateContent(path, parseValue(newValue)));
    };

    return (
        <div className={styles.app}>
            <UpdateContentForm onApply={applyHandler} />
            <Content />
        </div>
    );
}

export default App;
