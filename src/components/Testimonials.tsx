
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    id: 1,
    name: "Михаил С.",
    role: "Владелец кафе",
    content: "Заказывали мебель для нашего кафе в стиле лофт. Очень довольны результатом! Столы и стулья прочные, стильные и удобные. Отдельное спасибо за индивидуальный подход и соблюдение сроков.",
    rating: 5
  },
  {
    id: 2,
    name: "Екатерина Д.",
    role: "Дизайнер интерьеров",
    content: "Сотрудничаю с ТОМЛОФТ на постоянной основе. Рекомендую их своим клиентам. Отличное качество исполнения, внимание к деталям и умение воплотить самые смелые идеи. Профессионалы своего дела!",
    rating: 5
  },
  {
    id: 3,
    name: "Александр В.",
    role: "Частный клиент",
    content: "Заказывал стеллаж для гостиной и рабочий стол. Изделия получились именно такими, как я хотел. Качеством полностью доволен, прошло уже больше года - никаких проблем с эксплуатацией.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-loft-black mb-4 text-center font-heading heading-line">
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <p className="text-loft-black/70 text-center max-w-2xl">
            Что говорят о нас те, кто уже выбрал мебель от ТОМЛОФТ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-loft-red' : 'text-gray-300'}`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-loft-black/80 mb-6">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="bg-loft-gray rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-white font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-loft-black">{testimonial.name}</div>
                    <div className="text-sm text-loft-black/60">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
