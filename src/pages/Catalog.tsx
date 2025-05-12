
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Обеденный стол БРУТ",
    category: "tables",
    categoryName: "Столы",
    price: 32900,
    image: "https://cdn.poehali.dev/files/86f7283c-4fb9-4faa-ae25-6700b653369c.jpg",
    isNew: true,
    isBestseller: false,
    description: "Массивный обеденный стол из натурального дерева с металлическим основанием. Идеально подходит для гостиной или столовой в стиле лофт."
  },
  {
    id: 2,
    name: "Стул ИНДАСТРИАЛ",
    category: "chairs",
    categoryName: "Стулья",
    price: 12500,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    isNew: false,
    isBestseller: true,
    description: "Стильный и удобный стул с металлическим каркасом и деревянным сиденьем. Подходит для дома и офиса."
  },
  {
    id: 3,
    name: "Стеллаж СКАЙ",
    category: "shelves",
    categoryName: "Стеллажи",
    price: 29900,
    image: "https://cdn.poehali.dev/files/39046c9a-29c1-4961-8e88-919a67f8dff0.jpg",
    isNew: false,
    isBestseller: false,
    description: "Просторный стеллаж с металлическими опорами и деревянными полками. Идеален для хранения книг, декора и других предметов."
  },
  {
    id: 4,
    name: "Уличный стул РЕЛАКС",
    category: "outdoor",
    categoryName: "Уличная мебель",
    price: 18900,
    image: "https://cdn.poehali.dev/files/99dcc569-ecea-45fb-b73a-b2c56ac13b11.jpg",
    isNew: false,
    isBestseller: true,
    description: "Прочный и стильный стул для сада, террасы или балкона. Устойчив к воздействию окружающей среды."
  },
  {
    id: 5,
    name: "Светильник ИНДАСТРИ",
    category: "lighting",
    categoryName: "Освещение",
    price: 7900,
    image: "https://cdn.poehali.dev/files/e07b3546-da60-41c7-acb2-e2dd8bdb3804.jpg",
    isNew: true,
    isBestseller: false,
    description: "Оригинальный подвесной светильник из металлических труб с эдисоновскими лампами. Создает неповторимую атмосферу."
  },
  {
    id: 6,
    name: "Консоль ЛОФТ",
    category: "tables",
    categoryName: "Столы",
    price: 21500,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdCUyMGNvbnNvbGUlMjB0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    isNew: false,
    isBestseller: true,
    description: "Стильная консоль с металлическим каркасом и деревянной столешницей. Идеальна для прихожей или гостиной."
  },
  {
    id: 7,
    name: "Кофейный столик БЭНК",
    category: "tables",
    categoryName: "Столы",
    price: 15800,
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwdGFibGUlMjBsb2Z0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    isNew: false,
    isBestseller: false,
    description: "Компактный кофейный столик с металлическим основанием и деревянной столешницей. Отлично дополнит любой интерьер."
  },
  {
    id: 8,
    name: "Барный стул ХАЙТЕК",
    category: "chairs",
    categoryName: "Стулья",
    price: 9800,
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyJTIwc3Rvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    isNew: false,
    isBestseller: false,
    description: "Высокий барный стул с металлическим каркасом и удобным сиденьем. Подходит для барной стойки или высокого стола."
  },
  {
    id: 9,
    name: "Настенный светильник ПАЙП",
    category: "lighting",
    categoryName: "Освещение",
    price: 5900,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000",
    isNew: false,
    isBestseller: true,
    description: "Настенный светильник в индустриальном стиле из металлических труб. Создает уютное направленное освещение."
  },
  {
    id: 10,
    name: "Кронштейн для полки ИКС",
    category: "brackets",
    categoryName: "Кронштейны",
    price: 2900,
    image: "https://cdn.poehali.dev/files/b63fdc3b-6b27-4853-944a-8a6f44a7fe3d.jpg",
    isNew: false,
    isBestseller: false,
    description: "Прочный металлический кронштейн для полок и стеллажей. Выдерживает значительные нагрузки."
  },
  {
    id: 11,
    name: "Подвесной светильник ЛАМПА",
    category: "lighting",
    categoryName: "Освещение",
    price: 6500,
    image: "https://cdn.poehali.dev/files/e07b3546-da60-41c7-acb2-e2dd8bdb3804.jpg",
    isNew: true,
    isBestseller: false,
    description: "Оригинальный подвесной светильник с металлическим абажуром. Создает стильное направленное освещение."
  },
  {
    id: 12,
    name: "Уличный стол ТЕРРАС",
    category: "outdoor",
    categoryName: "Уличная мебель",
    price: 22900,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3V0ZG9vciUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    isNew: false,
    isBestseller: false,
    description: "Прочный стол для террасы или сада. Выполнен из металла и дерева, устойчивого к погодным условиям."
  }
];

const categories = [
  { id: "all", label: "Все категории" },
  { id: "tables", label: "Столы" },
  { id: "chairs", label: "Стулья" },
  { id: "shelves", label: "Стеллажи" },
  { id: "lighting", label: "Освещение" },
  { id: "outdoor", label: "Уличная мебель" },
  { id: "brackets", label: "Кронштейны" },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      // Default - no sorting
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20"></div> {/* Spacer for fixed navbar */}

      <main className="flex-grow bg-loft-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-loft-black mb-8 font-heading">
            Каталог мебели
          </h1>

          {/* Filters and search */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Input
                placeholder="Поиск по названию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12"
              />
            </div>
            <div>
              <select
                className="w-full h-12 rounded-md border border-input bg-background px-3 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Сортировка по умолчанию</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
                <option value="name-asc">Название: А-Я</option>
                <option value="name-desc">Название: Я-А</option>
              </select>
            </div>
          </div>

          {/* Categories tabs */}
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mb-8"
          >
            <TabsList className="mb-4 h-auto flex flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="mb-2 mr-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-md overflow-hidden shadow-md product-card-shadow flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden">
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
                          {product.categoryName}
                        </span>
                        <h3 className="text-lg font-bold text-loft-black mb-2 font-heading">
                          {product.name}
                        </h3>
                        <p className="text-sm text-loft-black/70 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="mt-auto">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-loft-black">
                              {formatPrice(product.price)} ₽
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-loft-black text-loft-black hover:bg-loft-black hover:text-white"
                            >
                              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                              В корзину
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No products message */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="Search" className="mx-auto h-12 w-12 text-loft-black/30 mb-4" />
                    <h3 className="text-xl font-bold text-loft-black mb-2">Товары не найдены</h3>
                    <p className="text-loft-black/70">
                      Попробуйте изменить параметры поиска или выбрать другую категорию
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
