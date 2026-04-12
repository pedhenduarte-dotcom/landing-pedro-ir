# Landing Page — Isenção de IR por Doença Grave
**Dr. Pedro Henrique Barbosa dos Santos Duarte — OAB/MS 23.630**

---

## Como publicar no Vercel (passo a passo)

### ANTES DE COMEÇAR — substitua o ID do Google Analytics

Abra o arquivo `src/LandingPage.jsx` no editor de texto (pode ser o próprio GitHub, depois do upload, ou o VS Code antes).

Procure por `G-XXXXXXXXXX` — aparece **duas vezes**, nas linhas 8 e 14.

Substitua pelas suas credenciais reais do GA4:
- Acesse https://analytics.google.com
- Admin → Data Streams → Web → copie o Measurement ID (começa com "G-")
- Cole no lugar de `G-XXXXXXXXXX` (nos dois lugares)

Se ainda não tem GA4 criado, pode deixar como está e publicar — o site funciona. Só não vai registrar eventos. Troque depois.

---

### PASSO 1 — Subir o projeto para o GitHub

1. Crie uma conta em https://github.com (se ainda não tem).
2. Clique em **"New repository"** (botão verde, canto superior).
3. Nome do repositório: `landing-pedro-ir` (ou o que preferir).
4. Deixe **Public** (o Vercel também aceita Private, mas Public é mais simples para começar).
5. **NÃO** marque "Add README" nem nada. Deixe vazio.
6. Clique em **"Create repository"**.

Agora o GitHub mostra uma tela com comandos. Ignore os comandos — vamos usar o método visual:

7. Na página do repositório recém-criado, clique em **"uploading an existing file"** (link azul no meio da tela) OU **"Add file" → "Upload files"**.
8. **Arraste TODA a pasta do projeto** (o conteúdo desta pasta descompactada: `package.json`, `vite.config.js`, `index.html`, `.gitignore`, e a pasta `src/` inteira) para a área de upload.
9. Aguarde o upload terminar.
10. Lá embaixo, em "Commit changes", clique em **"Commit changes"** (botão verde).

Pronto — seu código está no GitHub.

---

### PASSO 2 — Conectar o Vercel ao repositório

1. Acesse https://vercel.com e faça login **com sua conta do GitHub** (botão "Continue with GitHub"). Isso é importante — dá ao Vercel permissão para ler seus repositórios automaticamente.
2. Na tela inicial do Vercel, clique em **"Add New..."** → **"Project"**.
3. Vai aparecer a lista dos seus repositórios do GitHub. Encontre `landing-pedro-ir` (ou o nome que você escolheu) e clique em **"Import"**.
4. Na tela de configuração:
   - **Framework Preset**: o Vercel detecta **"Vite"** sozinho. Se não detectar, escolha "Vite" manualmente.
   - **Root Directory**: deixe como está (`./`).
   - **Build Command**: deixe o padrão (`npm run build`).
   - **Output Directory**: deixe o padrão (`dist`).
   - **Install Command**: deixe o padrão (`npm install`).
5. Clique em **"Deploy"**.

O Vercel vai rodar o build. Demora 40 a 90 segundos. Quando terminar, vai aparecer um confetti e um botão para ver o site.

---

### PASSO 3 — Conectar seu domínio

O Vercel dá um domínio grátis tipo `landing-pedro-ir.vercel.app`. Se quiser usar o seu próprio (ex.: `isencao.duarteadvocacia.com.br`):

1. No Vercel, dentro do seu projeto: **Settings** → **Domains**.
2. Digite seu domínio e clique **"Add"**.
3. O Vercel vai pedir para você configurar um registro DNS (tipo A ou CNAME) no seu provedor de domínio (Registro.br, GoDaddy, etc.).
4. Siga as instruções que o próprio Vercel mostrar. Normalmente é adicionar um CNAME apontando para `cname.vercel-dns.com`.
5. Em 5 a 30 minutos, o domínio propaga. O Vercel cuida do HTTPS automaticamente.

---

## Atualizações futuras

Quando quiser mudar algo no site:

1. Vá no GitHub, no seu repositório.
2. Navegue até o arquivo (geralmente `src/LandingPage.jsx`).
3. Clique no lápis (ícone de editar).
4. Faça a alteração.
5. Desça a página e clique em **"Commit changes"**.

O Vercel detecta automaticamente e faz um novo deploy em ~1 minuto. O site atualiza sozinho.

---

## Se quiser testar localmente antes (opcional)

Com Node.js instalado no seu computador:

```bash
npm install
npm run dev
```

Abre em http://localhost:5173.

---

## Arquivos do projeto

- `index.html` — HTML base + fontes + meta tags SEO
- `package.json` — dependências
- `vite.config.js` — configuração do build
- `src/main.jsx` — ponto de entrada React
- `src/LandingPage.jsx` — o componente completo da landing page
