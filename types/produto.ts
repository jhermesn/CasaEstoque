export interface Produto {
  nome: string
  quantidade: number
  dataValidade: Date
  aberto: boolean
  diasValidadeAposAberto: number
  dataAdicao: Date
  dataAbertura?: Date
}

