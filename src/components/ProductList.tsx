import ProductCard from './ProductCard'

const mockProducts = [
    { id: 1, name: 'Camiseta', price: 59.9, category: 'Vestuário' },
    { id: 2, name: 'Notebook', price: 3999.0, category: 'Eletrônicos' },
    { id: 3, name: 'Tênis', price: 299.9, category: 'Calçados' },
    { id: 4, name: 'Fone Bluetooth', price: 199.0, category: 'Acessórios' },
]

export default function ProductList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
