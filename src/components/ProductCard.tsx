type Product = {
    id: number
    name: string
    price: number
    category: string
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all border border-pink-100">
            <h2 className="text-xl font-bold mb-2 text-pink-600">{product.name}</h2>
            <p className="text-rose-500">Categoria: {product.category}</p>
            <p className="text-fuchsia-600 font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
        </div>
    )
}
