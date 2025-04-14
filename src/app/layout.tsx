import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lista de Produtos',
    description: 'Aplicação com campos personalizados',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body className={`${inter.className} bg-pink-50 text-rose-700 min-h-screen flex items-start justify-center`}>
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-pink-500">Minha Lista de Produtos</h1>
            {children}
        </main>
        </body>
        </html>
    )
}
