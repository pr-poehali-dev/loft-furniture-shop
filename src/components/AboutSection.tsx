
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-loft-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-md">
            <img 
              src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=3000"
              alt="Мастерская ТОМЛОФТ" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-loft-black to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="flex flex-col">
                <span className="text-white/80 mb-1">Мастерская</span>
                <span className="text-3xl font-bold text-white font-heading">ТОМ<span className="text-loft-red">ЛОФТ</span></span>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading heading-line">
              О НАШЕЙ МАСТЕРСКОЙ
            </h2>
            
            <p className="text-white/80 mb-6">
              Мастерская ТОМЛОФТ — это команда профессионалов, которые создают уникальную мебель в стиле лофт.
              Мы сочетаем индустриальную эстетику с функциональностью, создавая предметы, которые становятся
              центральными элементами в интерьере.
            </p>
            
            <p className="text-white/80 mb-8">
              Каждое изделие изготавливается вручную в нашей мастерской в Санкт-Петербурге.
              Мы используем только высококачественные материалы: прочную сталь и натуральное дерево,
              обрабатываем их современными способами для достижения идеального результата.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-loft-red font-bold text-4xl mb-2 font-heading">7+</div>
                <div className="text-white/80">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-loft-red font-bold text-4xl mb-2 font-heading">1000+</div>
                <div className="text-white/80">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-loft-red font-bold text-4xl mb-2 font-heading">5000+</div>
                <div className="text-white/80">Изделий</div>
              </div>
            </div>
            
            <Button 
              className="bg-loft-red hover:bg-loft-red/90 text-white rounded-sm"
            >
              Подробнее о нас
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
