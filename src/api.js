import { supabase } from './supabase'

async function consultar(consulta) {
  const { data, error } = await consulta
  if (error) throw error
  return data
}

export function listarProdutos() {
  return consultar(supabase.from('produtos').select('*').order('nome'))
}

export function cadastrarProduto({ nome, unidade, quantidade }) {
  return consultar(
    supabase
      .from('produtos')
      .insert({
        nome,
        unidade,
        quantidade: Number(quantidade) || 0,
      })
      .select()
      .single(),
  )
}

export function listarEntradas() {
  return consultar(
    supabase
      .from('entradas')
      .select('*, produto:produtos(id, nome, unidade)')
      .order('criado_em', { ascending: false }),
  )
}

export async function registrarEntrada({ produtoId, quantidade }) {
  const qtd = Number(quantidade)
  const entrada = await consultar(
    supabase
      .from('entradas')
      .insert({ produto_id: produtoId, quantidade: qtd })
      .select()
      .single(),
  )

  const produto = await consultar(
    supabase.from('produtos').select('quantidade').eq('id', produtoId).single(),
  )

  await consultar(
    supabase
      .from('produtos')
      .update({ quantidade: Number(produto.quantidade) + qtd })
      .eq('id', produtoId),
  )

  return entrada
}

export function listarSaidas() {
  return consultar(
    supabase
      .from('saidas')
      .select('*, produto:produtos(id, nome, unidade)')
      .order('criado_em', { ascending: false }),
  )
}

export async function registrarSaida({ produtoId, quantidade }) {
  const qtd = Number(quantidade)
  const produto = await consultar(
    supabase.from('produtos').select('quantidade').eq('id', produtoId).single(),
  )

  const estoqueAtual = Number(produto.quantidade)
  if (qtd > estoqueAtual) {
    throw new Error('Quantidade maior que o estoque disponível')
  }

  const saida = await consultar(
    supabase
      .from('saidas')
      .insert({ produto_id: produtoId, quantidade: qtd })
      .select()
      .single(),
  )

  await consultar(
    supabase
      .from('produtos')
      .update({ quantidade: estoqueAtual - qtd })
      .eq('id', produtoId),
  )

  return saida
}
