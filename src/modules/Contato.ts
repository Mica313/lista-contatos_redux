class Contato {
  nome: string
  telefone: string
  email: string
  id: number

  constructor(nome: string, telefone: string, email: string, id: number) {
    this.nome = nome
    this.telefone = telefone
    this.id = id
    this.email = email
  }
}

export default Contato
