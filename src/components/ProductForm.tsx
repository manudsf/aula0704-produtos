'use client'

import { useState } from 'react'

export default function ProductForm() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Produto: ${name}, R$${price}, Categoria: ${category}`)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">Adicionar Produto</h2>
            <input
                type="text"
                placeholder="Nome"
                className="w-full mb-3 p-2 border border-rose-300 rounded text-rose-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Preço"
                className="w-full mb-3 p-2 border border-rose-300 rounded text-rose-700"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Categoria"
                className="w-full mb-3 p-2 border border-rose-300 rounded text-rose-700"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Adicionar
            </button>
        </form>
    )
}