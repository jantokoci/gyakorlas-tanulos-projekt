import { useNavigate } from "react-router"

function Home() {
    
    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate('egyeske')}>One</button>
            <button onClick={() => navigate('kett')}>Two</button>
            <button onClick={() => navigate('har')}>Thre</button>
            <button onClick={() => navigate('negy')}>Four</button>
            <button onClick={() => navigate('ot')}>Five</button>
            <button onClick={() => navigate('hat')}>Six</button>
            <button onClick={() => navigate('het')}>Seven</button>
            <button onClick={() => navigate('nyoc')}>Eight</button>
            <button onClick={() => navigate('kilenc')}>Nine</button>
            <button onClick={() => navigate('tiz')}>Ten</button>
            <button onClick={() => navigate('tizegy')}>Eleven</button>
            <button onClick={() => navigate('tizket')}>Twelve</button>
            <button onClick={() => navigate('tizhar')}>Thirteen</button>
            <button onClick={() => navigate('tiznegy')}>Fourteen</button>
            <button onClick={() => navigate('tizot')}>Fifteen</button>
            <button onClick={() => navigate('tizhat')}>Sixteen</button>
            <button onClick={() => navigate('tizhet')}>Seventeen</button>
            <button onClick={() => navigate('tiznyoc')}>Eighteen</button>
            <button onClick={() => navigate('tizkil')}>Nineteen</button>
        </div>
    )
}

export default Home