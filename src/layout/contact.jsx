import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Button, Input, TextArea, IcoSearch, IcoSend, validacaoForm, MaskTelefone, AddAlert } from '../components'
import nls from './nls/pt-BR.json'
import { loaded, loading, modalOpen } from './redux/layoutActions'

export default () => {
  const dispatch = useDispatch()
  const { statusModal } = useSelector(state => state.layoutState)
  const initialForm = { name: '', email: '', phone: '', post: '' }
  const [inputState, setInputState] = useState(initialForm)
  const [erro, setErro] = useState({})

  const formRequired = {
    name: '',
    email: 'email',
    phone: 'phone',
    post: ''
  }

  const hanldeChange = (e, v) => {
    console.log(e, v, 'hanldeChange');
    setErro({...erro, [v.name]: v.message})
    setInputState({ ...inputState, [e.name]: e.value })
  }

  const hanldeSubmit = (e) => {
    dispatch(loading())
    console.log(e, 'hanldeSubmit');
    const valida = validacaoForm({formRequired, formValues: e})
    const valid = Object.keys(valida).filter(v=> valida[v] !== false? valida[v] : null)
    setErro(valida)
    if (!valid.length) {
      dispatch([
        modalOpen(''),
        AddAlert('success', nls.message.submitSuccess),
        setInputState(initialForm),
        loaded()
      ])
    } else {
      dispatch(loaded())
    }
  }
console.log(inputState, 'inputState');
  return (
    <Modal
      title={nls.contactTitle}
      size='medium box-contact'
      open={statusModal === 'contact' ? true : false}
      close={() => dispatch(modalOpen(''), setErro(''))}
      closeText={nls.close}
    >
      <>
        <Input label={nls.name} name='name' placeholder={nls.namePlaceholder}
          action={(e, ef) => hanldeChange(e, ef)} 
          value={inputState.name}
          required={{
            pattern: formRequired.name,
            erro: erro,
            message: nls.message[`mandatory`]
          }}
        />
        <Input label={nls.email} name='email' placeholder={nls.emailPlaceholder}
          action={(e, ef) => hanldeChange(e, ef)} 
          value={inputState.email}
          required={{
            pattern: formRequired.email,
            erro: erro,
            message: nls.message[`mandatory`]
          }}
        />
        <Input label={nls.phone} name='phone' placeholder={nls.phonePlaceholder}
          action={(e, ef) => hanldeChange(e, ef)} 
          value={MaskTelefone( inputState.phone)}
          maxLength={15}
          required={{
            pattern: formRequired.phone,
            erro: erro,
            message: nls.message[`mandatory`]
          }}
        />
        <TextArea label={nls.post} name='post' placeholder={nls.postPlaceholder}
          action={(e, ef) => hanldeChange(e, ef)} 
          value={inputState.post}
          required={{
            pattern: formRequired.post,
            erro: erro,
            message: nls.message[`mandatory`]
          }}
        />
        <div className='box-btn-center'>
          <Button color='secondary' onClick={()=> hanldeSubmit(inputState)}>
            <IcoSend /> {nls.submit}
          </Button>
        </div>
      </>
    </Modal>
  )
}
