import { Form } from "react-router-dom";

//library
import { UserPlusIcon } from "@heroicons/react/24/solid";

//assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your Money</span>
                </h1>
                <p>
                    Your Indian budget buddy.
                    Navigating your budget journey, the Indian way!
                </p>
                <Form method="post">
                    <input
                    type="text"
                    name="userName"
                    required
                    aria-label="Your Name"
                    autoComplete="given-name"
                    placeholder="Enter name here..."
                />
                <input type="hidden" name="_action" value="newUser" />
                <button type="submit" className="btn btn--dark">
                    <span>Create Account</span>
                    <UserPlusIcon width={20}/>
                </button>
                </Form>
            </div>
            <img src={illustration} alt="" width={600} />
        </div>
    );
}

export default Intro;