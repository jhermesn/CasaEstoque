"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import type { Produto } from "@/types/produto"
import * as XLSX from "xlsx"

interface TabelaProdutosProps {
  produtos: Produto[]
  onUpdate: (produtos: Produto[]) => void
}

export function TabelaProdutos({ produtos, onUpdate }: TabelaProdutosProps) {
  const [produtosLocais, setProdutosLocais] = useState<Produto[]>(produtos)

  useEffect(() => {
    setProdutosLocais(produtos)
  }, [produtos])

  const atualizarProduto = (index: number, atualizacoes: Partial<Produto>) => {
    const novosProdutos = produtosLocais.map((produto, i) => {
      if (i === index) {
        return { ...produto, ...atualizacoes }
      }
      return produto
    })
    setProdutosLocais(novosProdutos)
    onUpdate(novosProdutos)
  }

  const removerProduto = (index: number) => {
    const novosProdutos = produtosLocais.filter((_, i) => i !== index)
    setProdutosLocais(novosProdutos)
    onUpdate(novosProdutos)
  }

  const toggleAberto = (produto: Produto) => {
    const index = produtosLocais.findIndex(p => p === produto)
    if (index === -1) return
    atualizarProduto(index, {
      aberto: !produto.aberto,
      dataAbertura: !produto.aberto ? new Date() : undefined,
    })
  }

  const formatarData = (data: Date) => {
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const getDataValidadeEfetiva = (produto: Produto): Date => {
    if (produto.aberto && produto.dataAbertura) {
      const dataValidadeEfetiva = new Date(produto.dataAbertura)
      dataValidadeEfetiva.setDate(dataValidadeEfetiva.getDate() + produto.diasValidadeAposAberto)
      return dataValidadeEfetiva
    }
    return produto.dataValidade
  }

  const calcularDataValidade = (produto: Produto) => {
    const dataEfetiva = getDataValidadeEfetiva(produto)
    return formatarData(dataEfetiva)
  }

  const produtosOrdenadosTabela = [...produtosLocais].sort((a, b) => {
    if (a.nome < b.nome) return -1
    if (a.nome > b.nome) return 1
    return 0
  })

  const produtosOrdenadosPlanilha = [...produtosLocais].sort((a, b) => {
    if (a.nome < b.nome) return -1
    if (a.nome > b.nome) return 1
    return getDataValidadeEfetiva(a).getTime() - getDataValidadeEfetiva(b).getTime()
  })

  const gerarPlanilha = () => {
    const dadosPlanilha = produtosOrdenadosPlanilha.map((produto) => {
      const dataValidadeCalculada = calcularDataValidade(produto)
      return {
        Nome: produto.nome,
        "Data de Validade": dataValidadeCalculada,
        Aberto: produto.aberto ? "Sim" : "Não",
      }
    })

    const ws = XLSX.utils.json_to_sheet(dadosPlanilha)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Produtos")

    const wscols = [
      { wch: 30 }, // Nome
      { wch: 20 }, // Data de Validade
      { wch: 10 }, // Aberto
    ]
    ws["!cols"] = wscols

    const dataGeracao = new Date()
    XLSX.utils.sheet_add_aoa(
        ws,
        [[`Planilha gerada em: ${dataGeracao.toLocaleString("pt-BR")}`]],
        { origin: -1 }
    )

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" })
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `casa_estoque_${dataGeracao.toLocaleDateString("pt-BR")}.xlsx`
    a.click()
    URL.revokeObjectURL(url)
  }

  function s2ab(s: string) {
    const buf = new ArrayBuffer(s.length)
    const view = new Uint8Array(buf)
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff
    }
    return buf
  }

  return (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data de Validade</TableHead>
              <TableHead>Aberto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {produtosOrdenadosTabela.map((produto, index) => (
                <TableRow key={index}>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{calcularDataValidade(produto)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch
                          checked={produto.aberto}
                          onCheckedChange={() => toggleAberto(produto)}
                      />
                      <span>{produto.aberto ? "Aberto" : "Fechado"}</span>
                      <Button
                          variant="destructive"
                          className="ml-auto"
                          onClick={() => {
                            const idx = produtosLocais.findIndex(p => p === produto)
                            if (idx !== -1) removerProduto(idx)
                          }}
                      >
                        Remover
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4">
          <Button
              onClick={gerarPlanilha}
              className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Gerar Planilha
          </Button>
        </div>
      </>
  )
}
