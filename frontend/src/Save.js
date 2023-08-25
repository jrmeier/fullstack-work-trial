import { useContext, useEffect, useState } from "react"
import { UserTable } from './UserTable'
import { AppContext } from "./AppContext"

export const Save = ({id}) => {
    const { newUsers,  saveUser } = useContext(AppContext)
    const [user, setNewUser] = useState()

    useEffect(() => {
        const foundUser = newUsers.find((x) => String(x.id) === String(id))
        setNewUser(foundUser)
    },[newUsers, setNewUser,id])


    if(!user) return (<div>User Not found</div>)


    return (
    <>
    <UserTable users={[user]} handleSave={()=>saveUser(user)} />
    </>
    )
}