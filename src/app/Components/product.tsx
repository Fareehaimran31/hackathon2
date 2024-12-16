import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    discount: '-30%',
    image: '/images.png',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: null,
    discount: null,
    image: '/Images (1).png',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: '/Images (2).png',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    oldPrice: null,
    discount: null,
    image: '/Images (3).png',
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    oldPrice: null,
    discount: null,
    image: '/Images (4).png',
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    oldPrice: null,
    discount: 'New',
    image: '/Images (5).png',
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: '/Images (6).png',
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    oldPrice: null,
    discount: 'New',
    image: '/Images (7).png',
  },

  // Additional products here
];

const ProductGrid = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded shadow hover:shadow-lg transition">
            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-4 left-4 px-2 py-1 text-sm font-semibold rounded bg-red-500 text-white">
                {product.discount}
              </span>
            )}
            {/* Product Image */}
            <div className="relative w-full h-64 overflow-hidden rounded-t">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="hover:scale-110 transition-transform"
              />
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-800">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm line-through text-gray-400">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;