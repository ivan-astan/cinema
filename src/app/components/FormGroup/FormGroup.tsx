import React, {FC} from 'react';
import classes from './../form/form.module.css';

interface Props {
    children: React.ReactNode

}
const FormGroup: FC<Props> = ({ children }) => {
    return (
        <div className={classes.formGroupCont}>
            {children}
        </div>
    );
};

export default FormGroup;
