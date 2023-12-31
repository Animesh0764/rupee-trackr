//rrd imports
import { useLoaderData } from "react-router-dom";

//helpers
import { fetchData, deleteItem } from "../helpers";

//components
import Table from "../components/Table";

//library
import { toast } from "react-toastify";

//loader
export async function expensesLoader() {
    const expenses = await fetchData("expenses");
    return { expenses }
}

//actions
export async function expensesAction({ request }) {

    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data)

    if(_action === "deleteExpense")
    {
        try{
            deleteItem({
                key: "expenses",
                id: values.expenseId,
            })
            return toast.success(`Expense deleted`)
        } catch(e){
            throw new Error("There was a problem deleting your expense")
        }
    }
}

const Expenses = () => {

    const { expenses } = useLoaderData();

    return (
        <div className="grid-lg">
            <h1>All Expenses</h1>
            {
                expenses && expenses.length>0
                ? (
                    <div className="grid-md">
                        <h2>
                            Recent expenses <small>({expenses.length}) total</small>
                        </h2>
                        <Table expenses={expenses} />
                    </div>
                ) : (
                    <p>No expenses to show</p>
                )
            }
        </div>
    );
}

export default Expenses;