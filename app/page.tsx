"use client"

import { useState, useEffect } from "react"
import { AdicionarProduto } from "@/components/adicionar-produto"
import { TabelaProdutos } from "@/components/tabela-produtos"
import type { Produto } from "@/types/produto"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carregouLS, setCarregouLS] = useState(false)

  const { toast } = useToast()

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

    if ("Notification" in window) {
      Notification.requestPermission()
    }

    setCarregouLS(true)
  }, [])

  useEffect(() => {
    if (!carregouLS) return

    console.log("Salvando no localStorage:", produtos)
    localStorage.setItem("produtos", JSON.stringify(produtos))

    verificarNotificacoes()
  }, [produtos, carregouLS])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
          .register("/sw.js")
          .then(() => {
            console.log("Service Worker registrado com sucesso!")
          })
          .catch((error) => {
            console.error("Erro ao registrar o Service Worker:", error)
          })
    }
  }, [])

  const adicionarProdutos = (novosProdutos: Produto[]) => {
    setProdutos((antigos) => [...antigos, ...novosProdutos])
  }

  const atualizarProdutos = (novosProdutos: Produto[]) => {
    setProdutos(novosProdutos)
  }

  const verificarNotificacoes = () => {
    const hoje = new Date()
    produtos.forEach((produto) => {
      const dataValidade = produto.aberto && produto.dataAbertura
          ? new Date(
              produto.dataAbertura.getTime() +
              produto.diasValidadeAposAberto * 24 * 60 * 60 * 1000
          )
          : produto.dataValidade

      const diasAteValidade = Math.ceil(
          (dataValidade.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)
      )

      if ([0, 1, 7].includes(diasAteValidade)) {
        notificar(produto, diasAteValidade)
      }
    })
  }

  const notificar = (produto: Produto, diasAteValidade: number) => {
    let mensagem = ""
    if (diasAteValidade === 0) mensagem = "expira hoje"
    else if (diasAteValidade === 1) mensagem = "irá expirar amanhã"
    else mensagem = "irá expirar em 7 dias"

    const titulo = `Atenção: ${produto.nome}`

    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(titulo, { body: mensagem })
    } else {
      toast({
        title: titulo,
        description: mensagem,
        duration: 5000,
      })
    }
  }

  return (
      <div className="container mx-auto p-4">
        <AdicionarProduto onAdicionar={adicionarProdutos} />
        <TabelaProdutos produtos={produtos} onUpdate={atualizarProdutos} />
        <Toaster />
      </div>
  )
}
