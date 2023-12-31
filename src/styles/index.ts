import styled, { createGlobalStyle } from 'styled-components'
import _var from './var'

const EstiloGlobal = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif;
  list-style:none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  display: block;
`
export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${_var.verde};
`

export default EstiloGlobal
