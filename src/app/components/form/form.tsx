'use client';

import classes from './form.module.css';
import { Pagination } from "@/app/components/pagination/pagination";
import { useEffect, useState } from "react";
import FormGroup from "@/app/components/FormGroup/FormGroup";
import InputField from "@/app/components/InputField/InputField";
import SelectField from "@/app/components/SelectField/SelectField";

export interface Option {
    value: string;
    label: string;
}

interface Errors {
    name: boolean;
    unif: boolean;
    format: boolean;
    genre: boolean;
    country: boolean;
}

export const Form: React.FC = () => {
    const [name, changeName] = useState<string>(localStorage.getItem('name') ?? '');
    const [genre, changeGenre] = useState<string>(localStorage.getItem('genre') ?? '');
    const [format, changeFormat] = useState<string>(localStorage.getItem('format') ?? '');
    const [unif, changeUnif] = useState<string>(localStorage.getItem('unif') ?? '');
    const [cost, changeCost] = useState<string>(localStorage.getItem('cost') ?? '');
    const [country, changeCountry] = useState<string>(localStorage.getItem('country') ?? '');
    const [sinopsis, changeSinopsis] = useState<string>(localStorage.getItem('sinopsis') ?? '');

    const formatOptions: Option[] = [
        { value: 'Онлайн-платформа', label: 'Онлайн-платформа' },
        { value: 'Большой экран', label: 'Большой экран' },
        { value: 'Интернет', label: 'Интернет' }
    ];

    const countryOptions: Option[] = [
        { value: 'Россия', label: 'Россия' },
        { value: 'Казахстан', label: 'Казахстан' },
        { value: 'Белорусь', label: 'Белорусь' }
    ];

    const [errors, setErrors] = useState<Errors>({
        name: false,
        unif: false,
        format: false,
        genre: false,
        country: false,
    });

    const [isValid, setIsValid] = useState<boolean>(false);

    const validateInputs = (input: string): boolean => {
        return input.length > 0;
    };

    const validateUNF = (unf: string): boolean => {
        if (!unf) return false;
        const regex = /^\d{3}-\d{3}-\d{3}-\d{2}-\d{3}$/;
        return regex.test(unf);
    };

    const validate = () => {
        const newErrors: Errors = {
            name: !validateInputs(name),
            unif: !validateUNF(unif),
            format: !validateInputs(format),
            genre: !validateInputs(genre),
            country: !validateInputs(country),
        };

        setErrors(newErrors);
        setIsValid(!Object.values(newErrors).includes(true));
    };

    useEffect(() => {
        validate();
    }, [name, genre, format, unif, country]);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid) {
            localStorage.setItem('name', name);
            localStorage.setItem('country', country);
            localStorage.setItem('genre', genre);
            localStorage.setItem('format', format);
            localStorage.setItem('cost', cost);
            localStorage.setItem('unif', unif);
            localStorage.setItem('sinopsis', sinopsis);
            alert('Форма успешно отправлена!');
        } else {
            alert('Пожалуйста, исправьте ошибки перед отправкой.');
        }
    };

    // Устанавливаем значение по умолчанию для Select
    const defaultFormat = formatOptions.find(option => option.value === format) || null;
    const defaultCountry = countryOptions.find(option => option.value === country) || null;

    return (
        <>
            <form onSubmit={submit}>
                <div className={classes.formGroupContainer}>
                    <FormGroup>
                        <InputField
                            type="text"
                            id="project-name"
                            label="Название проекта"
                            value={name}
                            placeholder="Название"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeName(e.target.value)}
                            error={errors.name ? "Заполните поле" : null}
                        />
                        <InputField
                            type="text"
                            id="genre"
                            label="Жанр"
                            value={genre}
                            placeholder="Жанр"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeGenre(e.target.value)}
                            error={errors.genre ? "Заполните поле" : null}
                        />
                        <SelectField
                            id="format"
                            label="Формат (для онлайн-платформ, большого экрана, интернета, другое)"
                        options={formatOptions}
                        value={defaultFormat}
                        onChange={(selectedOption: Option) => changeFormat(selectedOption.value)}
                        error={errors.format ? "Заполните поле" : null}
                        />
                        <InputField
                            type="text"
                            id="unif"
                            label="№ УНФ или отсутствует"
                            value={unif}
                            placeholder="890-000-000-00-000"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeUnif(e.target.value)}
                            error={errors.unif ? "Неверный формат" : null}
                        />
                    </FormGroup>
                    <FormGroup>
                        <SelectField
                            id="country"
                            label="Страна-производитель (копродукция)"
                            options={countryOptions}
                            value={defaultCountry}
                            onChange={(selectedOption: Option) => changeCountry(selectedOption.value)}
                            error={errors.country ? "Заполните поле" : null}
                        />
                        <InputField
                            id="cost"
                            label="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть"
                            value={cost}
                            placeholder="Стоимость"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeCost(e.target.value)}
                            error={null}
                            type={'number'}
                        />
                        <div className={classes.formGroup}>
                            <div className={classes.inputContainer}>
                                <label htmlFor="sinopsis">Синопсис</label>
                                <textarea
                                    id="sinopsis"
                                    placeholder="Синопсис"
                                    value={sinopsis}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeSinopsis(e.target.value)}
                                />
                            </div>
                        </div>
                    </FormGroup>
                </div>

                <Pagination isValid={isValid} />
            </form>
        </>
    );
};
