# Sprint Planning

## Contexto da Sprint

- **Produto**: Template de práticas Scrum com foco inicial em cadastro de produto
- **Objetivo da Sprint**: Entregar uma primeira versão funcional do cadastro de produto com regras de validação e cobertura de testes automatizados
- **Duração sugerida**: 1 semana
- **Time**: Product Owner, Scrum Master e Dev Team

## Sprint Goal

Implementar e validar o fluxo de cadastro de produto no backend JavaScript, garantindo regras de negócio mínimas e segurança por meio de testes unitários.

## Itens Selecionados do Backlog

### US03 - Cadastro de Produto

**Motivo da priorização**: é a história mais próxima do que o template já possui implementado e permite validar o ciclo completo de entrega (codificação + testes + documentação).

### Escopo funcional da Sprint

- Cadastro de produto com campos `nome`, `preco` e `descricao`
- Validação de nome com tamanho mínimo
- Validação de preço maior que zero
- Validação de preço com no máximo duas casas decimais
- Bloqueio de cadastro com nome duplicado (case-insensitive)
- Exibição de dados do produto cadastrado

## Decomposição em Tarefas

1. Implementar função de cadastro com validações de negócio
2. Garantir normalização de entrada (`trim` no nome e descrição)
3. Implementar função de exibição de produto no console
4. Escrever testes unitários para cenários válidos e inválidos
5. Validar execução dos testes com Jest

## Critérios de Pronto (Definition of Done)

- Código implementado e versionado
- Testes automatizados passando (`npm test`)
- Regras críticas de negócio cobertas por testes
- Mensagens de erro claras para entradas inválidas
- Documentação da sprint atualizada

## Riscos Identificados

- Divergência entre backlog macro (US01/US02) e implementação atual do template
- Ausência de camada de persistência (dados em memória)
- Dependência de execução manual para demonstrar saída do console

## Plano de Mitigação

- Manter escopo da sprint estritamente aderente ao que já existe no template
- Registrar débitos técnicos para próximas sprints
- Priorizar evolução incremental (persistência, API e interface em ciclos seguintes)

## Capacidade e Compromisso

- **Capacidade estimada**: 5 pontos
- **Compromisso da sprint**: concluir US03 com testes de regressão básicos

