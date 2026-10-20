export const evento = {
  nome: 'Festival Sabores da Alta Paulista',
  slogan: 'Três dias para provar o melhor da cozinha da região.',
  data: '4 a 6 de junho de 2027 · das 11h às 22h',
  local: 'Recinto de Exposições — Osvaldo Cruz/SP',
  sobreTexto: 'Vinte barracas de restaurantes, produtores rurais e cozinheiros da região, com aulas-show e uma competição de pratos feitos com ingredientes locais. A entrada é gratuita; os ingressos são só para as aulas-show com degustação.',
};

export const numerosDestaque = [
  { id: 1, valor: '20', rótulo: 'barracas' },
  { id: 2, valor: '9', rótulo: 'aulas-show' },
  { id: 3, valor: '3', rótulo: 'dias' },
];

export const programacao = [
  { id: 1, horario: 'Sex · 18h', atividade: 'Abertura com música ao vivo' },
  { id: 2, horario: 'Sáb · 11h', atividade: 'Aula-show: pamonha e curau de milho verde' },
  { id: 3, horario: 'Sáb · 15h', atividade: 'Aula-show: doces de leite e de abóbora' },
  { id: 4, horario: 'Sáb · 19h', atividade: 'Competição de pratos com ingredientes locais' },
  { id: 5, horario: 'Dom · 12h', atividade: 'Almoço caipira coletivo' },
  { id: 6, horario: 'Dom · 17h', atividade: 'Premiação e encerramento' },
];

export const atracoes = [
  { id: 1, nome: 'Dona Cida', detalhe: 'Cozinha caipira — Cozinheira há 40 anos, famosa pelo frango com quiabo.' },
  { id: 2, nome: 'Chef Marcos Lima', detalhe: 'Churrasco — Especialista em cortes e assados no fogo de chão.' },
  { id: 3, nome: 'Júlia Tanaka', detalhe: 'Confeitaria — Doces que misturam receitas japonesas e caipiras.' },
  { id: 4, nome: 'Sítio Boa Vista', detalhe: 'Produtor rural — Queijos e doces artesanais feitos pela família.' },
];

export const ingressos = [
  { id: 'gratuito', nome: 'Entrada Geral — Gratuita' },
  { id: 'aula-show', nome: 'Aula-show com degustação — R$ 90,00' },
  { id: 'passaporte', nome: 'Passaporte de aulas-show — R$ 225,00' },
];

// Dados extras para o desafio opcional de perguntas frequentes
export const perguntasFrequentes = [
  { id: 1, pergunta: 'Aceita cartão?', resposta: 'Sim, todas as barracas aceitam cartão e Pix.' },
  { id: 2, pergunta: 'Tem opção vegetariana?', resposta: 'Sim, pelo menos cinco barracas têm pratos sem carne.' },
  { id: 3, pergunta: 'Posso levar meu cachorro?', resposta: 'Pode, desde que na coleira.' },
];
