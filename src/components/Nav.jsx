//assets
import { Form, NavLink } from "react-router-dom";

//library icons
import { TrashIcon } from "@heroicons/react/24/solid"

//rrd imports
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink
            to="/"
            aria-label="Go to home"
            >
            <img src={logomark} alt="" height={30} />
            <span>HomeBudget</span>
            </NavLink>
            {
            userName && (
                <Form
                method="post"
                action="logout"
                onSubmit={(e) => {
                    if (!confirm("Delete user and all data?")) {
                    e.preventDefault()
                    }
                }}
                >
                <button type="submit" className="btn btn--warning">
                    <span>Delete User</span>
                    <TrashIcon width={20} />
                </button>
    
                </Form>
            )
            }
        </nav>
        )
}

export default Nav;