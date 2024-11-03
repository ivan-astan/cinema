import classes from './pagination.module.css'
import {FC, useState} from "react";

type Props = {
    isValid: boolean
}
export const Pagination: FC<Props> = ({isValid}) => {
    const [active, setActive] = useState(1)
    return (
    <div className={classes.paginationContainer}>
        <span className={classes.pagination}>
            <a href="#" className={active === 1 ? classes.active : ''} onClick={() => setActive(1)}>1</a>
            <a href="#" className={active === 2 ? classes.active : ''} onClick={() => setActive(2)}>2</a>
            <span className={classes.dots}>...</span>
            <a href="#" className={active === 4 ? classes.active : ''} onClick={() => setActive(4)}>4</a>
            <span className={classes.arrow}></span>
        </span>

        <button disabled={!isValid} className={classes.nextButton}>Следующий шаг <i className={classes.arrow}></i></button>
    </div>
    )
}