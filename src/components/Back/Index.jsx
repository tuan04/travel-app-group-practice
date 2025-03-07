import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"

function Back() {
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1)
    }
    return (
        <div>
                <Button variant="light" onClick={handleBack}>Trở về</Button>
        </div>
    )
}

export default Back
