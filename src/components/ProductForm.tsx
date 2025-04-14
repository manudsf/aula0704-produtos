'use client';

import { useState } from 'react';
import { Product } from '@/types/Product';

interface ProductFormProps {
    onAdd: (product: Product) => void;
}

export default function ProductForm({ onAdd }: ProductFormProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !price || !category) return;

        const newProduct: Product = {
            id: Date.now(),
            name,
            price: parseFloat(price),
            category,
        };
        onAdd(newProduct);
        setName('');
        setPrice('');
        setCategory('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md mb-6 space-y-4 border border-gray-200"
        >
            <input
                type="text"
                placeholder="Nome do produto"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
                type="number"
                placeholder="Preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
                type="submit"
                className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition"
            >
                Adicionar Produto
            </button>
        </form>
    );
}
