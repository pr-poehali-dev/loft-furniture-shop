import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Обеденный стол БРУТ",
    category: "Столы",
    price: 32900,
    image:
      "https://cdn.poehali.dev/files/86f7283c-4fb9-4faa-ae25-6700b653369c.jpg",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "Стул ИНДАСТРИАЛ",
    category: "Стулья",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Стеллаж СКАЙ",
    category: "Стеллажи",
    price: 29900,
    image:
      "https://cdn.poehali.dev/files/39046c9a-29c1-4961-8e88-919a67f8dff0.jpg",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 4,
    name: "Уличный стул РЕЛАКС",
    category: "Уличная мебель",
    price: 18900,
    image:
      "https://cdn.poehali.dev/files/99dcc569-ecea-45fb-b73a-b2c56ac13b11.jpg",
    isNew: false,
    isBestseller: true,
  },
];

const FeaturedProducts = () => {
  // Format price with spaces instead of commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <section className="py-20 bg-loft-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loft-black mb-4 text-center font-heading heading-line">
            ПОПУЛЯРНЫЕ ТОВАРЫ
          </h2>
          <p className="text-loft-black/70 text-center max-w-2xl">
            Эти изделия пользуются наибольшим спросом у наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded overflow-hidden shadow-md product-card-shadow flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-60 overflow-hidden">
                {(product.isNew || product.isBestseller) && (
                  <div className="absolute top-3 left-3 z-10">
                    {product.isNew && (
                      <Badge className="bg-loft-green text-white border-none mb-2 block">
                        Новинка
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-loft-black text-white border-none block">
                        Хит продаж
                      </Badge>
                    )}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-loft-black/60 mb-1">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-loft-black mb-2 font-heading">
                  {product.name}
                </h3>
                <div className="mt-auto pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-loft-black">
                      {formatPrice(product.price)} ₽
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-loft-black text-loft-black hover:bg-loft-black hover:text-white"
                    >
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                      корзину
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-loft-black hover:bg-loft-black/80 text-white px-8 py-6 text-lg rounded-sm">
            Все товары
            <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
