import React, {useState} from 'react';
import './App.css';
import {MoneyType, NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble'

function App() {
    const [money, setMoney] = useState<MoneyType[]>([
        {banknote: "dollar", nominal: 100, number: " a123456789"},
        {banknote: "dollar", nominal: 50, number: " b123456789"},
        {banknote: "ruble", nominal: 100, number: " c123456789"},
        {banknote: "dollar", nominal: 100, number: " d123456789"},
        {banknote: "dollar", nominal: 50, number: " e123456789"},
        {banknote: "ruble", nominal: 100, number: " f123456789"},
        {banknote: "dollar", nominal: 50, number: " j123456789"},
        {banknote: "ruble", nominal: 50, number: " h123456789"}
    ])

    const[filter,setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    }
    if (filter === 'dollar') {
        currentMoney= money.filter((filteredMoney)=> filteredMoney.banknote === 'dollar');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div>
        <NewComponent
            money={currentMoney}
            onClickFilterHandler={onClickFilterHandler}
        />
        </div>
    );
}

export default App;
