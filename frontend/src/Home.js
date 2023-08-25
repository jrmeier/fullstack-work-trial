import { useContext } from 'react'
import { AppContext } from './AppContext'
import { UserTable } from './UserTable'
import { useLocation } from 'wouter'

export const Home = () => {
    const { newUsers, fetchNewUsers } = useContext(AppContext)
    const [location, setLocation] = useLocation()



    const handleSave = (id) => {
        console.log("handling save: ",id)

        setLocation(`/save/${id}`)

    }


    return (
    <>
    <button onClick={fetchNewUsers}>
        Fetch New Users
    </button>

    <UserTable users={newUsers} handleSave={handleSave}/>

    </>
    )

}