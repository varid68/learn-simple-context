import React, { useContext } from "react"
import { IndexPageContext } from "../../contexts/indexPage"
import FormAnak from "./form-anak/form-anak"
import IndexPageContextAnak from "../../contexts/indexPage/form-anak-contexts"


function Index() {
  const actionContext = useContext(IndexPageContext)

  return (
    <div>
      Nama Anda : <input type="text" name="name" value={actionContext.name} onChange={actionContext.changeName.bind(this)} />
      < br />
      <IndexPageContextAnak>
        <FormAnak />
      </IndexPageContextAnak>
    </div>
  )
}


export default Index