# Histórias de Usuário

Documentação das histórias de usuário criadas para o projeto, detalhando as necessidades e expectativas dos usuários finais. Cada história inclui uma descrição clara, critérios de aceitação, regras de negócios e estimativa de esforço para orientar o desenvolvimento e garantir a entrega de valor ao cliente.

---

## US01 - Cadastro de Consumidor

| Campo             | Descrição              |
| ----------------- | ---------------------- |
| **ID**            | US01                   |
| **Título**        | Cadastro de Consumidor |
| **Status**        | Aberta                 |
| **Link da Issue** | #1                     |

### Descrição

Enquanto consumidor, desejo me cadastrar na plataforma, para poder realizar compras.

### Critérios de Aceitação

| #   | Critério                                                  |
| --- | --------------------------------------------------------- |
| 1   | O sistema deve permitir cadastro com nome, e-mail e senha |
| 2   | O sistema deve validar e-mail único                       |
| 3   | O sistema deve confirmar cadastro com mensagem de sucesso |

### Regra de Negócios

| #   | Regra                                 |
| --- | ------------------------------------- |
| 1   | E-mail não pode ser duplicado         |
| 2   | Senha deve ter no mínimo 8 caracteres |

### Estimativa

Complexidade: **Média** | Story Points: **5**

---

## US02 - Login de Usuário

| Campo             | Descrição        |
| ----------------- | ---------------- |
| **ID**            | US02             |
| **Título**        | Login de Usuário |
| **Status**        | Aberta           |
| **Link da Issue** | #2               |

### Descrição

Enquanto consumidor, desejo realizar login, para acessar minha conta.

### Critérios de Aceitação

| #   | Critério                                             |
| --- | ---------------------------------------------------- |
| 1   | O sistema deve autenticar usuário com e-mail e senha |
| 2   | Deve exibir erro em caso de credenciais inválidas    |
| 3   | Deve redirecionar para página inicial após login     |

### Regra de Negócios

| #   | Regra                                |
| --- | ------------------------------------ |
| 1   | Bloqueio após 5 tentativas inválidas |

### Estimativa

Complexidade: **Média** | Story Points: **5**

---

## US03 - Cadastro de Produto

| Campo             | Descrição           |
| ----------------- | ------------------- |
| **ID**            | US03                |
| **Título**        | Cadastro de Produto |
| **Status**        | Aberta              |
| **Link da Issue** | #3                  |

### Descrição

Enquanto vendedor, desejo cadastrar produtos, para disponibilizá-los para venda.

### Critérios de Aceitação

| #   | Critério                                                                   |
| --- | -------------------------------------------------------------------------- |
| 1   | O sistema deve validar se o nome do produto possui pelo menos 3 caracteres |
| 2   | O preço deve ser um valor numérico maior que zero                          |
| 3   | A descrição deve ter no mínimo 10 caracteres                               |
| 4   | O sistema deve impedir cadastro de produtos com nomes duplicados           |
| 5   | O preço deve ter no máximo 2 casas decimais                                |

### Regra de Negócios

| #   | Regra                                                        |
| --- | ------------------------------------------------------------ |
| 1   | Não é permitido o cadastro de dois produtos com o mesmo nome |
| 2   | O preço deve ser maior que zero                              |
| 3   | Cada produto deve ter uma descrição clara e concisa          |

### Estimativa

Complexidade: **Média** | Story Points: **5**
