import React, {FC} from 'react';
import Select from 'react-select';
import classes from './../form/form.module.css';
import {Option} from "@/app/components/form/form";

interface  Props {
    id: string,
    label: string,
    value: Option | null,
    options: Option[],
    onChange: (option: any) => void,
    error: string | null
}
const SelectField: FC<Props> = ({ id, label, options, value, onChange, error }) => {
    return (
        <div className={classes.formGroup}>
            <div className={classes.inputContainer}>
                <label htmlFor={id}>{label}</label>
                <Select
                    id={id}
                    options={options}
                    value={value}
                    onChange={onChange}
                />
                {error && <span className={classes.errorMessage}>{error}</span>}
            </div>
        </div>
    );
};

export default SelectField;
