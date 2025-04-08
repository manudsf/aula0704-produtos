type Product = {
    id: number
    name: string
    price: number
    category: string
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600">Categoria: {product.category}</p>
            <p className="text-green-600 font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
        </div>
    )
}