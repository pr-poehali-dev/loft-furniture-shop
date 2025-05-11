
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-loft-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-heading heading-line">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <p className="text-white/70 text-center max-w-2xl">
            Остались вопросы или готовы сделать заказ? Свяжитесь с нами любым удобным способом
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="bg-loft-gray p-8 rounded-md">
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                Контактные данные
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-loft-red rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <Icon name="MapPin" className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Адрес</h4>
                    <p className="text-white/80">
                      Санкт-Петербург, Сертолово<br />
                      ул. Тихвинская, 12
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-loft-red rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <Icon name="Phone" className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Телефон</h4>
                    <p className="text-white/80">
                      <a href="tel:89819474096" className="hover:text-loft-red transition-colors">
                        8 (981) 947-40-96
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-loft-red rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <Icon name="Mail" className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-white/80">
                      <a href="mailto:elenamaslivec@mail.ru" className="hover:text-loft-red transition-colors">
                        elenamaslivec@mail.ru
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-loft-red rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <Icon name="MessageSquare" className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Мы в соцсетях</h4>
                    <p className="text-white/80">
                      <a 
                        href="https://vk.com/mebeltomloft" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-loft-red transition-colors"
                      >
                        vk.com/mebeltomloft
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-loft-black/20">
                <h4 className="text-white font-bold mb-4">Рабочие часы</h4>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница:</span>
                    <span>10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота:</span>
                    <span>11:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье:</span>
                    <span>Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slideUp" style={{animationDelay: '0.4s'}}>
            <div className="bg-white p-8 rounded-md">
              <h3 className="text-2xl font-bold text-loft-black mb-6 font-heading">
                Напишите нам
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-loft-black/80 mb-1">
                      Имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      className="border-loft-black/20 focus:border-loft-red"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-loft-black/80 mb-1">
                      Телефон
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      className="border-loft-black/20 focus:border-loft-red"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-loft-black/80 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@mail.ru" 
                    className="border-loft-black/20 focus:border-loft-red"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-loft-black/80 mb-1">
                    Тема
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Тема сообщения" 
                    className="border-loft-black/20 focus:border-loft-red"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-loft-black/80 mb-1">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение..." 
                    className="border-loft-black/20 focus:border-loft-red min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-loft-red hover:bg-loft-red/90 text-white rounded-sm py-6"
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
