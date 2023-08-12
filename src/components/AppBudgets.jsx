//library
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

//rrd imports
import { Form, useFetcher } from "react-router-dom";

const AppBudgets = () => {

    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef()

    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget name</label>
                    <input
                    type="text"
                    name="newBudget"
                    id="newBudget"
                    placeholder="e.g. Chores"
                    required
                    ref={focusRef}
                    />
                </div>
            <div className="grid-xs">
            <label htmlFor="newBudgetAmount">Amount</label>
                    <input
                    type="number"
                    step="10"
                    name="newBudgetAmount"
                    id="newBudgetAmount"
                    placeholder="e.g. ₹2000"
                    required
                    inputMode="decimal"
                    />
            </div>
            <input type="hidden" name="_action" value="newBudget" />
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                {
                    isSubmitting ? <span>Creating budget...</span> : (
                        <>
                            <span>Create budget</span>
                            <CurrencyRupeeIcon width={20} />
                        </>
                    )
                }
            </button>
            </fetcher.Form>
        </div>
    );
}

export default AppBudgets;