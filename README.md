# FinCore — Plataforma Inteligente de Gestão Financeira Pessoal

**FinCore** é uma aplicação web completa e moderna de finanças pessoais desenvolvida com arquitetura de ponta, integração com o Open Finance brasileiro, classificação inteligente de despesas por IA, controle estrito de fluxo de caixa, gestão de cartões e parcelamentos, cobrança automatizada de devedores via WhatsApp e relatórios executivos.

Inspirado nas melhores práticas e funcionalidades de plataformas líderes como Mobills, Organizze, YNAB, Nubank e Banco Inter.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - Next.js 14 (App Router)
  - React 18 & TypeScript
  - Tailwind CSS (Design System Fintech moderno)
  - Lucide React (Ícones consistentes)
  - Recharts (Gráficos interativos de barras, rosca, linha e área)
  - Framer Motion (Animações sutis)
- **Backend & Regras Contábeis:**
  - Node.js & TypeScript
  - API Routes REST com validação de dados
  - Motor contábil determinístico (sem duplicidade em faturas, transferências próprias ou parcelamentos)
  - Motor de deduplicação idempotente por hash
  - Motor de classificação inteligente de estabelecimentos
  - Assistente de IA financeiro (integração determinística e suporte nativo ao Google Gemini)
- **Banco de Dados & Persistência:**
  - SQLite (desenvolvimento out-of-the-box com `dev.db`) e compatibilidade total com PostgreSQL via Prisma ORM
  - Prisma ORM 5 com migrações e seed completo de instituições financeiras brasileiras
- **Autenticação & Segurança:**
  - Autenticação por e-mail e senha com hash bcrypt
  - Sessões seguras com cookies HTTP-Only e JWT
  - Usuário de demonstração integrado (`demo@fincore.com` / `demo123456`)
  - Modo Privacidade (ocultação de valores com um clique)
  - Conformidade com a LGPD

---

## 🏛️ Estrutura de Navegação (21 Módulos)

A sidebar foi organizada exatamente conforme as especificações:

### 1. VISÃO GERAL
- `/dashboard` — Dashboard principal com 10 cards consolidados, gráficos e widgets de ação.
- `/fluxo-caixa` — Entradas e saídas econômicas com separação de transferências próprias.
- `/transacoes` — Extrato completo, busca em tempo real, filtros e exportação CSV.
- `/calendario` — Calendário financeiro interativo de contas a vencer e faturas programadas.

### 2. MEU DINHEIRO
- `/contas` — Contas bancárias correntes, poupanças e saldo total consolidado.
- `/cartoes` — Cartões de crédito, faturas abertas, limite utilizado e disponível.
- `/assinaturas` — Controle de assinaturas e recorrências (Netflix, Spotify, ChatGPT) com cálculo anual.
- `/orcamentos` — Orçamentos mensais com alertas automáticos em 50%, 80% e 100%.
- `/metas` — Metas financeiras de economia com cálculo de aportes mensais necessários.
- `/patrimonio` — Patrimônio líquido consolidado (Ativos - Passivos).

### 3. CONTROLE
- `/pessoas` — Módulo Pessoas e Devedores: empréstimos cedidos/tomados e link de cobrança educada para WhatsApp.
- `/contas-pagar` — Contas a pagar com data de vencimento e baixa de pagamento.
- `/contas-receber` — Contas a receber (freelances, salários, reembolsos).
- `/parcelamentos` — Cronograma de parcelamentos futuros sem duplicidade de gastos no mês.

### 4. INTELIGÊNCIA
- `/analises` — Gráficos avançados, comparativo mês atual vs anterior e gastos por banco.
- `/relatorios` — Demonstrativo mensal executivo pronto para impressão em PDF e exportação.
- `/assistente-ia` — Assistente financeiro conversacional com consultas em tempo real no banco.

### 5. CONFIGURAÇÕES & ACESSO
- `/categorias` — Categorias e subcategorias completas com regras de classificação.
- `/notificacoes` — Central de notificações com avisos de vencimento e sync.
- `/integracoes` — Open Finance (Pluggy / Belvo / Sandbox) e importação OFX / CSV com pré-visualização.
- `/perfil` — Perfil, modo privacidade e conformidade LGPD.
- `/login`, `/register`, `/onboarding` — Fluxo seguro de autenticação e boas-vindas.

---

## ⚖️ Regras Contábeis Implementadas e Testadas

O FinCore segue regras contábeis rigorosas para garantir a integridade dos dados:
1. **Transferências entre contas próprias**: Registradas como `TRANSFER`, não inflando receitas nem despesas econômicas.
2. **Pagamentos de fatura de cartão**: Não duplicam as despesas já lançadas no cartão.
3. **Parcelamentos**: Uma compra de R$ 1.200 em 12x gera 12 parcelas distribuídas no tempo, sem concentrar 1.200 no mês corrente.
4. **Empréstimos a terceiros**: Classificados como ativo a receber (`LOAN_DISBURSEMENT`), e não despesa de consumo.
5. **Estornos**: Reduzem proporcionalmente a despesa correspondente.
6. **Previsões (Status PENDING)**: Não contaminam o fluxo de caixa realizado até serem confirmadas.
7. **Idempotência**: Criação de hash único para impedir duplicidade em extratos e sincronizações bancárias.

Para executar a suíte de testes de regras financeiras:
```bash
npm test
```

---

## 🛠️ Instalação e Execução Local

### Pré-requisitos
- Node.js 18+ (recomendado Node.js 20+)
- npm 9+

### Passo 1: Clonar e instalar dependências
```bash
cd "c:\Users\mendo\OneDrive\Área de Trabalho\organizador financeiro"
npm install
```

### Passo 2: Configurar variáveis de ambiente
Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```
Conteúdo padrão do `.env`:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="fincore-super-secure-jwt-secret-key-32chars"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Open Finance (Opcional - Ativa Pluggy Oficial)
PLUGGY_CLIENT_ID=""
PLUGGY_CLIENT_SECRET=""

# Inteligência Artificial (Opcional - Ativa Google Gemini Oficial)
GEMINI_API_KEY=""

ENABLE_DEMO_DATA="true"
```

### Passo 3: Inicializar o Banco de Dados e Rodar o Seed
```bash
npx prisma db push
node prisma/seed.js
```
O seed criará automaticamente:
- As 9 principais instituições financeiras do Brasil (Nubank, Inter, Itaú, Bradesco, Santander, Banco do Brasil, Caixa, C6 Bank)
- Todas as categorias e subcategorias padrão
- O usuário de teste com dados reais:
  - **E-mail:** `demo@fincore.com`
  - **Senha:** `demo123456`

### Passo 4: Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:3000`

---

## 💳 Integração Open Finance e Importação

- **Modo Sandbox / Local:** Funciona imediatamente permitindo simular a sincronização de contas do Nubank, Inter e Itaú sem necessidade de chaves de API externas.
- **Modo Produção Pluggy:** Basta preencher as chaves `PLUGGY_CLIENT_ID` e `PLUGGY_CLIENT_SECRET` no arquivo `.env`. O adapter `PluggyProvider` iniciará o fluxo oficial de autenticação.
- **Importação OFX / CSV:** Na página `/integracoes` ou `/transacoes`, selecione qualquer arquivo de extrato emitido pelo seu banco. O sistema analisará as linhas, verificará se já foram importadas antes e apresentará uma tabela de pré-visualização antes de salvar.

---

## 🤖 Assistente Financeiro IA

O assistente localiza dados diretamente no banco de dados e calcula métricas determinísticas para responder perguntas como:
- *"Quanto gastei com alimentação neste mês?"*
- *"Qual foi minha maior despesa?"*
- *"Quem está me devendo dinheiro?"*
- *"Quanto pago por mês em assinaturas?"*

Quando a variável `GEMINI_API_KEY` for configurada, o modelo Gemini 1.5 Flash enriquece as respostas e gera sugestões personalizadas de economia mantendo os números auditados do banco.

---

## 📦 Build para Produção & Deploy

O projeto está otimizado para deploy em serviços como **Vercel**, **Railway**, **Render** ou servidores Node.js:
```bash
npm run build
npm start
```
