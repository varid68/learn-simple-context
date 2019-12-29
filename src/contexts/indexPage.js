import React, { createContext, Fragment, useState } from 'react'

export const IndexPageContext = createContext()

function IndexPage(props) {

  const [name, setName] = useState("")

  const changeName = (e) => setName(e.target.value)

  return (
    <IndexPageContext.Provider value={{
      name,
      changeName
    }}>
      <Fragment>
        {props.children}
      </Fragment>
    </IndexPageContext.Provider>
  )
}


export default IndexPage