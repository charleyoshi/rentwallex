import { Link } from "react-router-dom";

const NotFound = (props) => {
    const error =  props.error ?? 'Page not found.'

    return (
        <div className="notFound">
            <br />
            <div className="error">{error}</div>
            <br />
            <Link to="/">
                <button className="btn-Redirect">Go to Home</button>
            </Link>
        </div>
    )
}


export default NotFound