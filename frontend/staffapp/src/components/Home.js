import { useNavigate } from "react-router-dom";

// import useNavigation from 
const Home = () => {
    const navigate = useNavigate();
    return <div>
        <h1>Home Page</h1>
        <br></br>
        <br></br>

        <form>
        <button type="button" onClick={() => navigate(-1)}>Back</button>

        </form>
    </div>

}

export default Home;