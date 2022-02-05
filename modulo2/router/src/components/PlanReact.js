import { Link, withRouter } from "react-router-dom"

const PlanReact = (props) => {
    const { match: {url} } = props
    return (
        <div>
            <h2>Hola Redux</h2>        
            <Link to={`${url}/jsx`}>Jsx</Link>
            <Link to={`${url}/hooks`}>Hooks</Link>
        </div>
    )
}

export default withRouter(PlanReact);