import React from "react"

import IndexContextContainer from "../contexts/indexPage"
import Form from "./indexPage/form"

function Index() {
  return (
    <div style={{
      margin: 50,
      padding: 20
    }}>
      <IndexContextContainer>
        <Form />
      </IndexContextContainer>
    </div>
  )
}

export default Index