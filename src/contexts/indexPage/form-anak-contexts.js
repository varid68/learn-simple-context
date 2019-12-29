import React, { createContext, Fragment, useState } from 'react'

export const IndexPageContextAnak = createContext()

function IndexPage(props) {
  const [alamat, setAlamat] = useState("")

  const changeAlamat = (e) => setAlamat(e.target.value)

  return (
    <IndexPageContextAnak.Provider value={{
      alamat,
      changeAlamat
    }}>
      <Fragment>
        {props.children}
      </Fragment>
    </IndexPageContextAnak.Provider>
  )
}


export default IndexPage