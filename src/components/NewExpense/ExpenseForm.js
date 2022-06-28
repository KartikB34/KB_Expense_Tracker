import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) =>  {

    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');

    // const[userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.terget.value,
        // })

        // setUserInput((prevState) => {
        //     return {...prevState , enteredDate : event.target.value};
        // });

    };

    const SubmitHandler = (event) => {
        event.preventDefault();  //cause it by default reloads the page (calls the server again)

        const ExpenseData = {
            title: EnteredTitle,
            amount : +EnteredAmount,
            date : new Date(EnteredDate),
        };

        //console.log.(ExpenseData);

        props.onSaveExpenseDate(ExpenseData);

        //Now clearing the input feild upon submission of the form
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

    return <form  onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={EnteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={EnteredAmount}  onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button>Add expense</button>
        </div>
    </form>
}

export default ExpenseForm;