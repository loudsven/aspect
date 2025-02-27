import { useState } from 'react';
import styles from './UpdateContentForm.module.css';

interface UpdateContentFormProps {
    onApply: (path: string, newValue: string) => void;
}

function UpdateContentForm(props: UpdateContentFormProps) {
    const { onApply } = props;
    const [path, newPath] = useState('content[0].content[2].content[1]');
    const [newValue, setNewValue] = useState(
        '{"type": "label", "props": {"caption": "New Label", "visible": true}}',
    );

    const handleApply = (formEvent: React.FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        onApply(path, newValue);
    };

    const handlePathChange = (
        inputEvent: React.ChangeEvent<HTMLInputElement>,
    ) => {
        newPath(inputEvent.target.value);
    };

    const handleValueChange = (
        inputEvent: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setNewValue(inputEvent.target.value);
    };

    return (
        <form
            className={styles.form}
            onSubmit={(formEvent: React.FormEvent<HTMLFormElement>) =>
                handleApply(formEvent)
            }
        >
            <label className={styles.label}>
                <span>Путь</span>
                <input
                    required
                    className={styles.input}
                    type='text'
                    value={path}
                    onChange={handlePathChange}
                />
            </label>
            <label className={styles.label}>
                <span>Новое Значение</span>
                <input
                    required
                    className={styles.input}
                    type='text'
                    value={newValue}
                    onChange={handleValueChange}
                />
            </label>
            <button type='submit'>Применить</button>
        </form>
    );
}

export default UpdateContentForm;
