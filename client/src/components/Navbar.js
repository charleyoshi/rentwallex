import { Link } from "react-router-dom"
import Button from "./Button";

// props for Navbar: 
//  - forPage : specify for which page. e.g. `home`
//              default value is `home`
export default function Navbar(props) {
    var forPage = props.forPage;
    try {
        forPage = forPage.toLowerCase()
    } catch (error) { forPage = 'home' }



    return (
        <header className="Navbar">
            <div className="container">
                <Link to="/">
                    <h4>Rentwallex Icon</h4>
                </Link>
                <div className="right">
                    <Button text="Find a rent" icon="home" theme="secondary" />
                    <Button text="Register my rent" icon='apartment' />
                    {/* <Button text="Add my rent"/> */}
                    <span className="icon-menu material-symbols-rounded">menu</span>
                </div>
            </div>
        </header>
    )
}
