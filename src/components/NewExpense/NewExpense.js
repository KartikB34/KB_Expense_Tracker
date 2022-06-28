import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (EnteredExpenseDate) => {
        const ExpenseData = {
            ...EnteredExpenseDate,
            id : Math.random().toString()
        };

    props.onAddExpense(ExpenseData);
    }


    return <div className='new-expense'>
        <ExpenseForm  onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;