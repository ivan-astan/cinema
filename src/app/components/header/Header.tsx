import classes from './header.module.css'

export const Header = () => {
    return (
    <header className={classes.header}>
        <h1>Производственные параметры фильма</h1>
        <button className={classes.cancelButton}>Отменить заполнение
        </button>
    </header>
    )
}