
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-loft-black text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold font-heading tracking-tighter">
                ТОМ<span className="text-loft-red">ЛОФТ</span>
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Мебель в индустриальном стиле из металла и дерева.
              Создаем мебель для дома, офисов, ресторанов и кафе.
            </p>
            <div className="flex space-x-4">
              <a href="https://vk.com/mebeltomloft" target="_blank" rel="noopener noreferrer" className="text-white hover:text-loft-red transition-colors">
                <Icon name="AtSign" className="h-5 w-5" />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-loft-red transition-colors">
                <Icon name="Send" className="h-5 w-5" />
              </a>
              <a href="https://wa.me/89819474096" target="_blank" rel="noopener noreferrer" className="text-white hover:text-loft-red transition-colors">
                <Icon name="Phone" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Главная</a>
              </li>
              <li>
                <a href="#categories" className="text-white/70 hover:text-loft-red transition-colors">Каталог</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-loft-red transition-colors">О нас</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-loft-red transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Категории</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Столы</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Стулья</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Стеллажи</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Освещение</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Уличная мебель</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-loft-red transition-colors">Кронштейны</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-loft-red mr-3 mt-0.5 shrink-0" />
                <span className="text-white/70">
                  Санкт-Петербург, Сертолово<br />
                  ул. Тихвинская, 12
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-loft-red mr-3 shrink-0" />
                <a href="tel:89819474096" className="text-white/70 hover:text-loft-red transition-colors">
                  8 (981) 947-40-96
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-loft-red mr-3 shrink-0" />
                <a href="mailto:elenamaslivec@mail.ru" className="text-white/70 hover:text-loft-red transition-colors">
                  elenamaslivec@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-loft-gray/30 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} ТОМЛОФТ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
