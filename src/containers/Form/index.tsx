import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(cadastrar({ nome, telefone, email }))
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
    </MainContainer>
  )
}
