# Sprint Review

## Resumo da Sprint

- **Sprint**: Sprint 1
- **Sprint Goal**: Entregar cadastro de produto com validações e testes
- **Status geral**: Objetivo atingido parcialmente no contexto do backlog completo, mas atingido integralmente no escopo técnico definido para US03

## Incremento Apresentado

Durante a review, foi demonstrado o fluxo de cadastro de produto implementado no template:

- Função `cadastrarProduto` com validações de entrada
- Função `exibirProduto` para exibição dos dados no console
- Conjunto de testes unitários cobrindo cenários de sucesso e falha

## Regras de Negócio Entregues

1. Nome do produto com mínimo de 3 caracteres
2. Preço obrigatório, numérico e maior que zero
3. Preço com no máximo duas casas decimais
4. Bloqueio de nome duplicado sem diferenciar maiúsculas/minúsculas

## Evidências da Entrega

- Código-fonte funcional em JavaScript (Node.js)
- Testes automatizados com Jest para os principais cenários
- Execução de exemplo no arquivo principal para demonstração rápida

## Feedback das Partes Interessadas

- **Positivo**: validações estão claras e mensagens de erro ajudam no entendimento
- **Positivo**: cobertura de testes dá segurança para evolução
- **Ponto de atenção**: backlog inclui funcionalidades de consumidor/login que ainda não foram iniciadas no código
- **Sugestão**: próxima sprint deve expandir para persistência de dados e API

## Itens Não Entregues no Backlog Geral

- US01 - Cadastro de Consumidor
- US02 - Login de Usuário

Esses itens permanecem no Product Backlog e deverão ser repriorizados nas próximas plannings.

## Decisões Tomadas na Review

1. Manter US03 como baseline técnico do template
2. Criar próximo incremento com foco em arquitetura (camada de serviço e persistência)
3. Planejar testes para fluxos de autenticação quando US02 entrar na sprint

## Próximos Passos (Pré-Planning)

- Refinar histórias US01 e US02 com critérios mais testáveis
- Quebrar tarefas em unidades menores e com status rastreável
- Definir estratégia de armazenamento (em memória avançada, arquivo ou banco)

