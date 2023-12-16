import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.prioridade
  status: enums.status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.prioridade,
    status: enums.status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}
export default Tarefa
