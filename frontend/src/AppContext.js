import React, { createContext, useState } from 'react'


const defualtAppContext = {
    newUsers: [],
    existingUsers: [],
    notification: ""
}
export const AppContext = createContext(defualtAppContext)


export const AppContextProvider = (props) => {
    const [newUsers, setNewUsers] = useState([])
    const [fetchNewUsersStatus, setFetchNewUsersStatus] = useState('')
    const [existingUsers, setExistingUsers] = useState([])
    const [fetchExistingUsersStatus, setFetchExistingUsersStatus] = useState('')
    const [notification, setNotification] = useState('')
    const [showNotification, setShowNotification] = useState(false)

    const [newUser, setNewUser] = useState([])
    const [newUserStatus, setNewUserStatus] = useState('')

    const fetchNewUsers = async () => {
        console.log("fetching users")
        try{
            setFetchNewUsersStatus('loading')
            const fetchedUsers = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
            // flatten the company payload

            const tmpUsers = fetchedUsers.map((u)=>({...u, company: u.company.name}))
            setNewUsers(tmpUsers)
            setFetchNewUsersStatus('success')
        } catch(e) {
            console.log("error fetching users")
            setFetchNewUsersStatus('error')
        }

        setShowNotification(true)
    }

    const fetchExistingUsers = async () => {
        try{
            setFetchExistingUsersStatus('loading')
            
            const savedUsers = await (await fetch("/api/users/")).json()
            if(savedUsers.error){
                throw Error(savedUsers)
            }

            setExistingUsers(savedUsers)
            setFetchExistingUsersStatus('success')
        } catch {
            console.log("error fetching stored users")
            setFetchExistingUsersStatus('error')
            setNotification("Error: could not fetch stored users")
            setShowNotification(true)
        }
    }

    const saveUser = async (user) => {
        try {
            setNewUserStatus('loading')
            console.log({user})
            const payload = {
                id: user.id,
                name: user.name,
                company: user.company,
                email: user.email,
                phone: user.phone
            }
            const res = await ( await fetch("/api/users",{ 
                method: "POST",
                body: JSON.stringify(payload),
                headers: {'Content-Type': 'application/json'}
            })).json()
            if (res.error) {
                throw res
            }
                setNotification(`Succes: ${user.name} added`)
        } catch (e) {

            if(e.error === "Duplicate ID"){
                setNotification(`Error: ${user.name} already exists`)
            }

        }
        setShowNotification(true)
    }

    


    return (
        <AppContext.Provider
            value={{
                newUsers,
                setNewUsers,
                fetchNewUsers,
                fetchNewUsersStatus,
                existingUsers,
                setExistingUsers,
                fetchExistingUsers,
                fetchExistingUsersStatus,
                newUser,
                setNewUser,
                saveUser,
                notification,
                showNotification,
                setShowNotification,
                setNotification
            }}
        >
            { props.children }
        </AppContext.Provider>
    )
}
