"use client"

import { useState, useEffect } from "react"
import { AdicionarProduto } from "@/components/adicionar-produto"
import { TabelaProdutos } from "@/components/tabela-produtos"
import type { Produto } from "@/types/produto"

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carregouLS, setCarregouLS] = useState(false)

  useEffect(() => {
    try {
      const produtosSalvos = localStorage.getItem("produtos")
      console.log("ITEM 'produtos' no localStorage:", produtosSalvos)

      if (produtosSalvos) {
        const arrayObjetos = JSON.parse(produtosSalvos) as Produto[]
        const arrayComDatas = arrayObjetos.map((p) => ({
          ...p,
          dataValidade: new Date(p.dataValidade),
          dataAbertura: p.dataAbertura ? new Date(p.dataAbertura) : undefined,
          dataAdicao: new Date(p.dataAdicao),
        }))
        setProdutos(arrayComDatas)
      }
    } catch (err) {
      console.error("Erro ao carregar localStorage:", err)
    }
    setCarregouLS(true)
  }, [])

  useEffect(() => {
    if (!carregouLS) return

    console.log("Salvando no localStorage:", produtos)
    localStorage.setItem("produtos", JSON.stringify(produtos))
  }, [produtos, carregouLS])

  const adicionarProdutos = (novosProdutos: Produto[]) => {
    setProdutos((antigos) => [...antigos, ...novosProdutos])
  }

  const atualizarProdutos = (novosProdutos: Produto[]) => {
    setProdutos(novosProdutos)
  }

  return (
      <div className="container mx-auto p-4">
        <AdicionarProduto onAdicionar={adicionarProdutos} />
        <TabelaProdutos produtos={produtos} onUpdate={atualizarProdutos} />
      </div>
  )
}
