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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Adicionar Produto</h2>
            <input
                type="text"
                placeholder="Nome"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Preço"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Categoria"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Adicionar
            </button>
        </form>
    )
}