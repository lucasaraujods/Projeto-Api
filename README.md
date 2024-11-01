# Projeto DoDev - Integração com Google Sheets e API de Usuários

Este projeto foi desenvolvido para integrar uma planilha do Google Sheets com uma API de usuários. Utilizando as bibliotecas `google-spreadsheet` e `google-auth-library`, a aplicação permite autenticar e ler os dados de uma planilha, transformá-los em objetos de usuário e enviar essas informações para uma API externa criada no DronaHQ.

## Funcionalidades

- **Autenticação Google Sheets:** Utiliza as credenciais de autenticação para acessar uma planilha Google.
- **Leitura de Planilhas:** Lê as informações de uma planilha específica e transforma as linhas em objetos de usuário.
- **Envio de Dados para API:** Utiliza uma API de usuários, construída no DronaHQ, para enviar os dados obtidos na planilha (nome, idade e email).
- **Processo Automatizado:** A aplicação une todas as funções de leitura e envio de dados em uma única função, automatizando o processo.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **google-spreadsheet**: Biblioteca para manipulação de planilhas Google.
- **google-auth-library**: Biblioteca para autenticação via Google APIs.
- **DronaHQ**: Plataforma para construção de APIs e automação de processos.

## Como Funciona

1. **Autenticação Google Sheets**:
   Através de uma função assíncrona `GetDoc()`, a aplicação cria um objeto GoogleSpreadSheet, carrega suas informações e retorna o objeto da planilha.

2. **Leitura de Planilha**:
   A função `ReadWorkSheet()` acessa uma planilha específica usando o método `sheetsByIndex`, lê as linhas da planilha usando `getRows()` e transforma as informações em objetos usando o método `toObject()`.

3. **Envio para API de Usuários**:
   A função `AddUser(data={})` faz um `POST` para a API de usuários no DronaHQ, enviando as informações obtidas da planilha (nome, idade, email).

4. **Automatização do Processo**:
   Uma função principal une todo o processo: lê a planilha, transforma os dados em objetos e envia-os para a API de forma assíncrona. Se tudo for concluído com sucesso, é retornada uma mensagem de sucesso.

---

Para dúvidas ou sugestões, você pode entrar em contato através do meu GitHub: [Lucas Araújo Da Silva](https://github.com/lucasaraujods).

