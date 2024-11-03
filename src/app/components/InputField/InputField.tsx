import React, {FC} from 'react';
import classes from './../form/form.module.css';

interface  Props {
    id: string,
    label: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: string | null
    type: string
}
const InputField: FC<Props> = ({ id, label, value, placeholder, onChange, error, type }) => {
    return (
        <div className={classes.formGroup}>
            <div className={classes.inputContainer}>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {error && <span className={classes.errorMessage}>{error}</span>}
            </div>
        </div>
    );
};

export default InputField;
