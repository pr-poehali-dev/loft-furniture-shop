
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-loft-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" 
          alt="Лофт интерьер" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col justify-center h-screen">
        <div className="max-w-2xl animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading tracking-tighter leading-tight">
            ИНДУСТРИАЛЬНЫЙ<br />
            <span className="text-loft-red">ЛОФТ</span> ДЛЯ ВАШЕГО<br />
            ИНТЕРЬЕРА
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Мебель в стиле лофт из металла и дерева для современных интерьеров. 
            Эксклюзивный дизайн и высокое качество.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-loft-red hover:bg-loft-red/90 text-white px-8 py-6 rounded-sm font-medium text-lg"
            >
              Каталог
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-sm font-medium text-lg"
            >
              О мастерской
            </Button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <a href="#features" className="text-white/80 hover:text-white">
            <Icon name="ChevronDown" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
