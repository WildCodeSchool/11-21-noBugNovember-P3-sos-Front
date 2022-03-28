import axios from 'axios'
import { ArticleContext } from '../context/ArticleContext'
import { Dialog } from '@reach/dialog'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { VillesContext } from '../context/VillesContext'

import '@reach/dialog/styles.css'
import './Styles/ModalDL.css'

function ModalDL(props) {
  let navigate = useNavigate()
  // let { idArti } = useParams()
  let { id } = useParams()

  const [prenomTelechargement, setPrenomTelechargement] = useState('')
  const [nomTelechargement, setNomTelechargement] = useState('')
  const [mailTelechargement, setMailTelechargement] = useState('')
  const [villeTelechargement, setVilleTelechargement] = useState('')

  const { villes } = useContext(VillesContext)
  const { idVille } = useContext(ArticleContext)

  const location = useLocation()
  const { linkUpload } = location.state

  // const collectDatas = (event) => {
  //   console.log('COLLECT DATAS ======>', telechargement)
  //   // event.preventDefault()
  //   setTelechargement({
  //     prenom_telechargement: prenomTelechargement,
  //     nom_telechargement: nomTelechargement,
  //     mail_telechargement: mailTelechargement,
  //     ville_telechargement: villeTelechargement,
  //     article_id: id,
  //   })
  // }

  const actionsClick = (event) => {
    sendDatas(event)
    navigate(-1)
    download()
  }

  const sendDatas = (e) => {
    e.preventDefault()
    // Object.keys(telechargement).length > 1 &&
    axios
      .post(`http://localhost:4242/telechargements`, {
        prenom_telechargement: prenomTelechargement,
        nom_telechargement: nomTelechargement,
        mail_telechargement: mailTelechargement,
        ville_telechargement: villeTelechargement,
        article_id: id,
      })
      .then((response) => console.log('RESPONSE REQUETE', response))
      // .then(() => {
      //   setTelechargement('')
      // })
      .catch((error) =>
        console.error(
          '---Erreur envoi telechargement--- ',
          error.validationErrors
        )
      )
  }

  const download = () => {
    axios({
      url: { linkUpload },
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'image.jpg')
      document.body.appendChild(link)
      link.click()
    })
  }

  const handleChangePrenom = (e) => {
    setPrenomTelechargement(e.target.value)
  }
  const handleChangeNom = (e) => {
    setNomTelechargement(e.target.value)
  }
  const handleChangeMail = (e) => {
    setMailTelechargement(e.target.value)
  }

  console.log('testLIEN', linkUpload)
  return (
    <Dialog>
      <div className='backContainer' onClick={() => navigate(-1)}></div>
      <div className='popUpModal'>
        <form className='coordoneDl'>
          <div className='nameDl'>
            <input
              className='inputDl'
              type='text'
              name='lastname'
              placeholder='Prénom'
              required
              onChange={handleChangePrenom}
            ></input>
            <input
              className='inputDl'
              type='text'
              name='fistname'
              placeholder='Nom'
              required
              onChange={handleChangeNom}
            ></input>
          </div>
          <input
            className='inputDl mailDl'
            type='email'
            name='email'
            required
            placeholder='Adresse email'
            onChange={handleChangeMail}
          ></input>
          <select
            value={idVille}
            onChange={(e) => setVilleTelechargement(e.target.value)}
          >
            <option value='' disabled selected hidden>
              {'Ville'}
            </option>
            {villes.map((el) => (
              <option key={el.id} value={el.id}>
                {el.label}
              </option>
            ))}
          </select>

          <button
            type='submit'
            className='buttonGreen'
            onClick={(e) => actionsClick(e)}
          >
            Télécharger
          </button>
        </form>
      </div>
    </Dialog>
  )
}

export default ModalDL
