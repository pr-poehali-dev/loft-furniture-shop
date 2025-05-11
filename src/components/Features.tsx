
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: "Hammer",
    title: "Ручная работа",
    description: "Каждое изделие создается вручную с вниманием к мельчайшим деталям"
  },
  {
    icon: "Pipette",
    title: "Уникальный дизайн",
    description: "Эксклюзивные решения, которые подчеркнут индивидуальность вашего интерьера"
  },
  {
    icon: "ShieldCheck",
    title: "Лучшие материалы",
    description: "Прочная сталь и натуральное дерево высшего качества"
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Оперативная доставка по всей России и странам СНГ"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-loft-black bg-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-heading heading-line">
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </h2>
          <p className="text-white/70 text-center max-w-2xl">
            Мы создаем мебель, которая становится центром вашего интерьера, отражает вашу индивидуальность 
            и будет радовать вас долгие годы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-loft-gray border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full">
              <CardContent className="p-6">
                <div className="bg-loft-red rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
