import { 
  BrowserRouter, 
  RouterProvider, 
  createBrowserRouter}
  from "react-router-dom";

//layouts
import Main, { mainLoader } from "./layouts/Main";

//routes
import Dashboard, { dashboardAction, dashBoardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Expenses, {expensesAction, expensesLoader} from "./pages/Expenses";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

//toasts
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//actions
import { logoutAction } from "./actions/Logout";
import {deleteBudget} from "./actions/deleteBudget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashBoardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <Expenses />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          }
        ]
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  
  return (
      <div className="App">
        <RouterProvider router={ router }/>
        <ToastContainer />
      </div>
  )
}

export default App
