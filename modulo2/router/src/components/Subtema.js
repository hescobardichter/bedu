import { useParams } from "react-router-dom"
const Subtema = () => {
    const {subtema} = useParams()
    return (
        <div>
            <div>Hola Redux</div>
            <p>{subtema}</p>
        </div>
    )
}
export default Subtema;