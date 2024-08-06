import React, { useState } from 'react'
import { useEffect } from 'react'

function Effect() {

  const [inputValue , setInputValue] = useState('')
  const [users , setUsers] = useState([])
  const [filteredUsers , setFilteredUsers] = useState([])

  // componentLifeCycle
  // Mount -> Update -> UnMount

  useEffect(
    () => { 
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

      return () => {
        return false
      }
      }
    ,[]
  )

  useEffect(
    () => {
      if(users.length) {
        console.log(users)
      }
    }
    , [users]
  )

  useEffect(
    () => {
      setFilteredUsers(users)
    }
    ,[users]
  )

  useEffect(
    () => {
      const filter = users.filter(
        user => user.name.toLowerCase().includes(inputValue)
      )
      setFilteredUsers(filter)
    }
    ,[inputValue]
  )

  // const update = () => {
  //   return setCtr(prev => prev + 1)
  // }

  const handleChange = (e) => {
    setInputValue(e.target.value)

    // const filter = users.filter(
    //   user => user.name.toLowerCase().includes(e.target.value)
    // )
    // setFilteredUsers(filter)
  }

  return (
    <div>
      <input type="text" className='search' onInput={handleChange}/>
      {
      filteredUsers.map(
        user => <h3 key={user.id}>{user.name}</h3>
      )
      }
    </div>
  )
}

export default Effect
