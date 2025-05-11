import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const categories = [
  {
    id: "tables",
    name: "Столы",
    image:
      "https://cdn.poehali.dev/files/86f7283c-4fb9-4faa-ae25-6700b653369c.jpg",
    description: "Прочные и стильные столы для гостиной, кухни и офиса",
  },
  {
    id: "chairs",
    name: "Стулья",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1000",
    description: "Комфортные и надежные стулья в индустриальном стиле",
  },
  {
    id: "shelves",
    name: "Стеллажи",
    image:
      "https://cdn.poehali.dev/files/39046c9a-29c1-4961-8e88-919a67f8dff0.jpg",
    description:
      "Функциональные стеллажи для хранения и зонирования пространства",
  },
  {
    id: "lighting",
    name: "Освещение",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1000",
    description: "Оригинальные светильники для создания атмосферы",
  },
  {
    id: "outdoor",
    name: "Уличная мебель",
    image:
      "https://cdn.poehali.dev/files/f4c167fe-9cf6-4938-a098-881d48e6f1e6.jpg",
    description: "Мебель для террас, патио и открытых пространств",
  },
  {
    id: "brackets",
    name: "Кронштейны",
    image:
      "https://cdn.poehali.dev/files/b63fdc3b-6b27-4853-944a-8a6f44a7fe3d.jpg",
    description: "Надежные крепления для полок и других элементов интерьера",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loft-black mb-4 text-center font-heading heading-line">
            КАТАЛОГ МЕБЕЛИ
          </h2>
          <p className="text-loft-black/70 text-center max-w-2xl">
            Мебель в стиле лофт для различных помещений и задач. Выберите
            категорию и найдите идеальное решение для своего интерьера.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded shadow-lg product-card-shadow bg-white"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-loft-black/80 to-transparent z-10"></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {category.name}
                </h3>
                <p className="text-white/80 mb-4 text-sm">
                  {category.description}
                </p>
                <Button className="bg-loft-green hover:bg-loft-green/90 text-white rounded-sm transform group-hover:translate-y-0 transition-transform">
                  Смотреть
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
