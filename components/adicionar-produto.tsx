"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Produto } from "@/types/produto"

interface AdicionarProdutoProps {
  onAdicionar: (produtos: Produto[]) => void
}

export function AdicionarProduto({ onAdicionar }: AdicionarProdutoProps) {
  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [dataValidade, setDataValidade] = useState("")
  const [diasValidadeAposAberto, setDiasValidadeAposAberto] = useState("")
  const [erro, setErro] = useState<string | null>(null)

  const formatarData = (valor: string) => {
    const numeros = valor.replace(/\D/g, "")
    let resultado = ""
    if (numeros.length > 0) {
      resultado += numeros.substring(0, 2)
      if (numeros.length > 2) {
        resultado += "/" + numeros.substring(2, 4)
        if (numeros.length > 4) {
          resultado += "/" + numeros.substring(4, 8)
        }
      }
    }
    return resultado
  }

  const handleDataValidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarData(e.target.value)
    setDataValidade(valorFormatado)
  }

  const validarData = (data: string): boolean => {
    const [dia, mes, ano] = data.split("/").map(Number)
    const dataObj = new Date(ano, mes - 1, dia)
    return (
        dataObj.getDate() === dia &&
        dataObj.getMonth() === mes - 1 &&
        dataObj.getFullYear() === ano
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)

    const quantidadeNum = Number.parseInt(quantidade)
    if (isNaN(quantidadeNum) || quantidadeNum <= 0) {
      setErro("A quantidade deve ser um número maior que zero.")
      return
    }

    if (!validarData(dataValidade)) {
      setErro("Data de validade inválida.")
      return
    }

    const [dia, mes, ano] = dataValidade.split("/")
    const dataValidadeObj = new Date(
        Number.parseInt(ano),
        Number.parseInt(mes) - 1,
        Number.parseInt(dia)
    )

    if (dataValidadeObj < new Date()) {
      setErro("A data de validade não pode ser no passado.")
      return
    }

    const diasValidadeNum = Number.parseInt(diasValidadeAposAberto)
    if (isNaN(diasValidadeNum) || diasValidadeNum <= 0) {
      setErro(
          "Os dias de validade após aberto devem ser um número maior que zero."
      )
      return
    }

    const novosProdutos: Produto[] = Array(quantidadeNum)
        .fill(null)
        .map(() => ({
          nome,
          quantidade: quantidadeNum,
          dataValidade: new Date(dataValidadeObj),
          aberto: false,
          diasValidadeAposAberto: diasValidadeNum,
          dataAdicao: new Date(),
        }))

    onAdicionar(novosProdutos)
    setNome("")
    setQuantidade("")
    setDataValidade("")
    setDiasValidadeAposAberto("")
  }

  return (
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="nome">Nome do Produto</Label>
          <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="quantidade">Quantidade</Label>
          <Input
              id="quantidade"
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
              min="1"
              className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="dataValidade">Data de Validade (dd/mm/yyyy)</Label>
          <Input
              id="dataValidade"
              type="text"
              value={dataValidade}
              onChange={handleDataValidadeChange}
              placeholder="dd/mm/yyyy"
              required
              className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="diasValidadeAposAberto">
            Dias de Validade Após Aberto
          </Label>
          <Input
              id="diasValidadeAposAberto"
              type="number"
              value={diasValidadeAposAberto}
              onChange={(e) => setDiasValidadeAposAberto(e.target.value)}
              required
              min="1"
              className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        {erro && <p className="text-red-500">{erro}</p>}
        <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Adicionar Produto(s)
        </Button>
      </form>
  )
}
