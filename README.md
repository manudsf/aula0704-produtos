This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🛠️ Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando app/page.tsx. A página será atualizada automaticamente conforme você altera o arquivo.

Este projeto utiliza next/font para otimizar e carregar automaticamente a fonte Geist, uma nova família tipográfica da Vercel.

📦 Descrição do Projeto
Este é um aplicativo simples e responsivo de lista de produtos, construído com Next.js 15, React Server Components e TailwindCSS.

✨ Funcionalidades

    -> Listagem de produtos com dados simulados (mock)
    -> Componente visual de card para exibição de produtos
    -> Formulário de cadastro de produtos (simulado com alert)
    -> Layout totalmente responsivo com TailwindCSS
    -> Estrutura limpa e modular com App Router

📁 Estrutura do Projeto

├── app/   
│   ├── layout.tsx              
│   ├── page.tsx                
│   └── products/     
│       ├── page.tsx           
│       └── add/   
│           └── page.tsx       
├── components/   
│   ├── ProductCard.tsx         
│   ├── ProductForm.tsx         
│   └── ProductList.tsx        
├── styles/  
│   └── globals.css             

