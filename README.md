# Vercel Monorepo - Vite + Node.js

Este é um monorepo configurado para deploy na Vercel com:
- **Frontend**: Vite + React
- **Backend**: Node.js com Vercel Functions
- **Arquitetura**: Monorepo com Yarn Workspaces

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático
1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Conecte o repositório na Vercel
3. A Vercel detectará automaticamente a configuração do monorepo

### Opção 2: Deploy Manual
\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

## 🛠️ Desenvolvimento Local

\`\`\`bash
# Instalar dependências
yarn install

# Executar em modo desenvolvimento
yarn dev
\`\`\`

Isso iniciará:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 📁 Estrutura do Projeto

\`\`\`
vercel-monorepo/
├── apps/
│   ├── frontend/          # Vite + React app
│   │   ├── src/
│   │   ├── package.json
│   │   └── vite.config.ts
│   └── backend/           # Node.js API
│       ├── api/
│       │   └── hello.js   # Vercel Function
│       └── package.json
├── package.json           # Root workspace config
└── vercel.json           # Vercel deployment config
\`\`\`

## 🔧 Configuração da Vercel

O arquivo `vercel.json` configura:
- Build do frontend com Vite
- Roteamento das APIs para o backend
- Funções serverless para as APIs

## 📡 API Endpoints

- `GET /api/hello` - Retorna mensagem "Hello World" do backend

## 🎯 Recursos

- ✅ Monorepo com Yarn Workspaces
- ✅ Frontend moderno com Vite
- ✅ Backend serverless com Vercel Functions
- ✅ Proxy de desenvolvimento configurado
- ✅ CORS configurado
- ✅ Deploy otimizado para Vercel
- ✅ TypeScript no frontend
