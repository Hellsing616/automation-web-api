# 🚀 QA Automation Framework

Framework de automação de testes End-to-End (E2E) desenvolvido para validar aplicações **Web**, **API** e **Mobile**, utilizando as melhores práticas de mercado como **BDD (Cucumber)**, **Page Object Model (POM)**, **Allure Report** e arquitetura modular.

---

# 📑 Índice

- Objetivo
- Tecnologias
- Arquitetura do Projeto
- Pré-requisitos
- Instalação
- Configuração
- Estrutura do Projeto
- Executando os Testes
- Relatórios
- Padrões Utilizados
- Convenções
- Git Flow
- Solução de Problemas

---

# 🎯 Objetivo

Este framework foi desenvolvido para fornecer uma arquitetura reutilizável e escalável para automação de testes, contemplando:

- Testes Web
- Testes API
- Testes Mobile
- BDD utilizando Gherkin
- Geração de evidências
- Relatórios Allure
- Fácil integração com pipelines CI/CD

---

# 🛠 Tecnologias

| Tecnologia | Versão |
|------------|---------|
| NodeJS | LTS |
| Cypress | 15.x |
| Cucumber | Badeball |
| JavaScript | ES6 |
| Allure Report | Última |
| WebdriverIO | 9.x |
| Appium | 3.x |
| Git | Última |

---

# 📦 Pré-requisitos

Instalar:

- NodeJS
- Git
- Java JDK 11+
- Appium (Mobile)
- Android Studio (caso utilize Android)

Verificar versões

```bash
node -v
npm -v
git --version
java -version
```

---

# ⚙ Instalação

Clone o projeto

```bash
git clone https://github.com/SEU-USUARIO/automation-claro.git
```

Entre na pasta

```bash
cd automation-claro
```

Instale as dependências

```bash
npm install
```

---

# 🔧 Configuração

Configure as variáveis de ambiente.

Exemplo:

```env
ENV=homolog

BASE_URL=https://www.automationexercise.com

LOGIN_USER=usuario@email.com

LOGIN_PASSWORD=senha
```

Caso utilize outro ambiente, basta alterar as variáveis.

---

# 📂 Estrutura do Projeto

```
automation-claro
│
├── cypress
│
│   ├── e2e
│   │
│   ├── features
│   │
│   ├── steps
│   │
│   ├── pages
│   │
│   │   ├── elements
│   │   └── web
│   │
│   ├── fixtures
│   │
│   └── support
│
├── mobile
│
├── reports
│
├── allure-results
│
├── package.json
│
├── cypress.config.js
│
└── README.md
```

---

# 🧱 Arquitetura

O framework utiliza Page Object Model.

```
Feature

↓

Steps

↓

Page

↓

Elements
```

Cada camada possui uma única responsabilidade.

## Feature

Contém apenas regras de negócio.

## Steps

Responsável por conectar o Gherkin com a automação.

## Page

Contém ações da aplicação.

Exemplo:

```
login()

buscarProduto()

adicionarCarrinho()
```

## Elements

Contém apenas os localizadores.

Exemplo

```javascript
btnLogin()

txtEmail()

txtPassword()
```

---

# ▶ Executando os testes

Abrir Cypress

```bash
npm run cy:open
```

Executar todos

```bash
npm run cy:run
```

Executar navegador Chrome

```bash
npx cypress run --browser chrome
```

Executar apenas uma Feature

```bash
npx cypress run --spec cypress/e2e/features/login/login.feature
```

Executar por Tag

```bash
npx cypress run --env tags="@smoke"
```

```bash
npx cypress run --env tags="@regression"
```

---

# 📱 Mobile

Executar WebdriverIO

```bash
npm run wdio
```

Android

```bash
npm run wdio:android
```

iOS

```bash
npm run wdio:ios
```

---

# 📊 Allure Report

Executar testes

```bash
npm run cy:run
```

Gerar relatório

```bash
npm run allure:generate
```

Abrir relatório

```bash
npm run allure:open
```

---

# 📋 Escrita BDD

Seguir sempre:

```gherkin
Feature:

Background:

Scenario:

Given

When

Then

And
```

Exemplo

```gherkin
Feature: Busca de produtos

Background:
Given que estou na página inicial

Scenario: Buscar produto existente

When o usuário pesquisa por "T-Shirt"

Then os resultados da busca são exibidos

And o produto é apresentado na lista
```

---

# 🏗 Padrões adotados

✔ Page Object Model

✔ Single Responsibility

✔ Clean Code

✔ Reutilização de Componentes

✔ BDD

✔ Estrutura Modular

✔ Evidências

✔ Allure Report

✔ Organização por Features

✔ Separação entre Pages e Elements

---

# 📌 Convenções

## Pages

```
LoginPage.js

SearchPage.js

CartPage.js
```

## Elements

```
LoginElements.js

SearchElements.js

CartElements.js
```

## Features

```
login.feature

search.feature

cart.feature
```

## Steps

```
login.steps.js

search.steps.js

cart.steps.js
```

---

# 📝 Padrão de Commits

```
feat:
```

Nova funcionalidade

```
fix:
```

Correção

```
refactor:
```

Refatoração

```
docs:
```

Documentação

```
test:
```

Testes

```
style:
```

Formatação

```
chore:
```

Configuração

Exemplo

```bash
git commit -m "feat: adiciona automação de login"
```

---

# 🌿 Git Flow

Criar branch

```bash
git checkout -b feature/login
```

Enviar

```bash
git push origin feature/login
```

Merge através de Pull Request.

---

# 🚫 Arquivos ignorados

O projeto não versiona:

```
node_modules/

allure-results/

allure-report/

cypress/videos/

cypress/screenshots/

.env
```

---

# 🐞 Solução de Problemas

## Limpar dependências

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Windows

```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

---

## Limpar cache do Cypress

```bash
npx cypress cache clear
```

---

## Atualizar dependências

```bash
npm update
```

---

# 👨‍💻 Autor

Framework desenvolvido seguindo padrões profissionais de automação de testes por Alex Silva.

Tecnologias:

- Cypress
- Cucumber
- WebdriverIO
- Appium
- Allure Report
- JavaScript

---

# 📄 Licença

Projeto destinado para estudos e automação de testes.

MIT License.
