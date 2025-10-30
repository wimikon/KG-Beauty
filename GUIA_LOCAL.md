# 🚀 Guia Passo a Passo: Rodar KG Beauty Localmente

## 📋 Pré-requisitos

Você precisa ter instalado em sua máquina:

1. **Node.js** (versão 16 ou superior)
   - Download: https://nodejs.org/
   - Escolha a versão LTS (recomendado)

2. **Git** (para clonar o repositório)
   - Download: https://git-scm.com/

3. **Um editor de código** (opcional, mas recomendado)
   - VS Code: https://code.visualstudio.com/
   - Ou qualquer editor que você prefira

---

## ✅ Verificar Instalação

Abra o **Terminal** (ou Prompt de Comando no Windows) e execute:

```bash
node --version
npm --version
git --version
```

Você deve ver versões como:
```
v22.13.0
9.8.1
git version 2.42.0
```

Se algum comando não funcionar, instale o programa correspondente.

---

## 🔧 Passo 1: Clonar o Repositório

1. Abra o **Terminal** (Mac/Linux) ou **Prompt de Comando** (Windows)

2. Navegue até a pasta onde quer salvar o projeto:
   ```bash
   cd ~/Desktop
   # ou
   cd C:\Users\SeuUsuario\Desktop
   ```

3. Clone o repositório:
   ```bash
   git clone https://github.com/wimikon/KG-Beauty.git
   ```

4. Entre na pasta do projeto:
   ```bash
   cd KG-Beauty
   ```

---

## 📦 Passo 2: Instalar Dependências

No terminal, dentro da pasta `KG-Beauty`, execute:

```bash
npm install
```

Isso vai baixar todas as bibliotecas necessárias. Pode levar alguns minutos.

**Você verá algo como:**
```
added 394 packages, and audited 397 packages in 33s
```

---

## 🎯 Passo 3: Iniciar o Servidor de Desenvolvimento

Ainda no terminal, execute:

```bash
npm run dev
```

Você verá algo como:

```
> kg-beauty@1.0.0 dev
> concurrently "npm run dev -w client" "npm run dev -w server"

[0] > kg-beauty-client@1.0.0 dev
[0] > vite
[0] 
[0]   VITE v4.5.14  ready in 249 ms
[0]   ➜  Local:   http://localhost:5173/
[0]   ➜  Network: use --host to expose

[1] > kg-beauty-server@1.0.0 dev
[1] > tsx watch src/index.ts
[1] 
[1] 🚀 Server running on http://localhost:3000
[1] 📝 API available at http://localhost:3000/api
```

---

## 🌐 Passo 4: Acessar o Site

Abra seu navegador (Chrome, Firefox, Safari, etc.) e acesse:

```
http://localhost:5173
```

Você deve ver a página inicial do KG Beauty com:
- Navbar no topo
- Hero section
- Seção "Sobre Nós"
- Footer

---

## 🛑 Parar o Servidor

Quando quiser parar o servidor, no terminal pressione:

```
Ctrl + C
```

(No Windows, pode ser `Ctrl + C` ou `Ctrl + Break`)

---

## 🔄 Próximas Vezes

Nas próximas vezes que quiser rodar o projeto:

1. Abra o terminal
2. Navegue até a pasta:
   ```bash
   cd ~/Desktop/KG-Beauty
   # ou onde você salvou
   ```
3. Execute:
   ```bash
   npm run dev
   ```
4. Acesse: http://localhost:5173

---

## 🐛 Solução de Problemas

### Problema: "npm: command not found"
**Solução**: Node.js não está instalado. Baixe em https://nodejs.org/

### Problema: "Port 5173 is already in use"
**Solução**: Outra aplicação está usando a porta. Feche e tente novamente.

### Problema: Página em branco ou erro
**Solução**: 
1. Pressione `Ctrl + C` para parar
2. Execute: `npm install`
3. Execute: `npm run dev` novamente

### Problema: Arquivo não encontrado
**Solução**: Certifique-se que você está na pasta correta:
```bash
pwd  # (Mac/Linux) ou cd (Windows)
# Deve mostrar: .../KG-Beauty
```

---

## 📁 Estrutura do Projeto

```
KG-Beauty/
├── client/          # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
├── server/          # Backend (Node.js)
│   ├── src/
│   │   └── index.ts
│   └── package.json
├── README.md
└── package.json
```

---

## 📚 Próximos Passos

Após rodar localmente:

1. ✅ Revise o layout visual
2. ✅ Teste a responsividade (redimensione a janela)
3. ✅ Clique nos links da navbar
4. ✅ Forneça feedback sobre mudanças desejadas

---

## 💬 Precisa de Ajuda?

Se tiver problemas:
1. Verifique se Node.js está instalado: `node --version`
2. Verifique se está na pasta correta: `pwd` (Mac/Linux) ou `cd` (Windows)
3. Tente limpar cache: `rm -rf node_modules && npm install`
4. Me avise qual erro está recebendo

---

**Bom desenvolvimento! 🎉**
