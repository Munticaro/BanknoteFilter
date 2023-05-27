import React from 'react';
import {FilterType} from "./App";

export type MoneyType={
    banknote: string,
    nominal: number,
    number: string
}

type PropsType={
    money: MoneyType[],
    onClickFilterHandler: (nameButton: FilterType) => void,

}


export const NewComponent = (props: PropsType) => {
    return (
        <div>
        <ul>
            {props.money.map((filteredMoney, index) => {
                return (
                    <li key={index}>
                        <span>{filteredMoney.banknote}</span>
                        <span>{filteredMoney.nominal}</span>
                        <span>{filteredMoney.number}</span>
                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: '35px'}}>
            <button onClick={() => {props.onClickFilterHandler('all')}}>all</button>
            <button onClick={() => {props.onClickFilterHandler('ruble')}}>rubles</button>
            <button onClick={() => {props.onClickFilterHandler('dollar')}}>dollars</button>
        </div>
        </div>

);
}

