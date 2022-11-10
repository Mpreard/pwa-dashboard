import Map from '../components/map/Map';

function Home ({ user, setAuthState, setUser }) {
    /*
    const signOutHandler = () => {

        signOut(auth).then(() => {
            setUser(null)
            setAuthState('login')
        })
            .catch((err) => {
                alert(err)
            })
    }      */
    return (
        <div>
            <Map />
        </div>
    )
}

export default Home;