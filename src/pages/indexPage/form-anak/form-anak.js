import React, { useContext } from "react"
import { IndexPageContextAnak } from "../../../contexts/indexPage/form-anak-contexts"
import { IndexPageContext } from "../../../contexts/indexPage"


function Index() {
  const { alamat, changeAlamat } = useContext(IndexPageContextAnak)
  const { name } = useContext(IndexPageContext)

  return (
    <div>
      Alamat : <input type="text" name="alamat" value={alamat} onChange={changeAlamat.bind(this)} />

      <div style={{
        marginTop: 30
      }}>
        hai Nama Kamu {name} dan Alamat Kamu {alamat}
      </div>
    </div>
  )
}


export default Index