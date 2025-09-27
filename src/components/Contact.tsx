import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Star
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-[var(--gradient-hero)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Precisa de assistência técnica? Fale conosco agora mesmo e receba atendimento especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Telefone</h3>
            <p className="text-white/80 text-sm mb-4">(XX) XXXXX-XXXX</p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              Ligar
            </Button>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-white/80 text-sm mb-4">Atendimento rápido</p>
            <Button variant="whatsapp" size="sm">
              Conversar
            </Button>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Localização</h3>
            <p className="text-white/80 text-sm mb-4">Atendemos toda região</p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              Ver no Maps
            </Button>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Horário</h3>
            <p className="text-white/80 text-sm mb-4">24 horas por dia</p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              Emergência
            </Button>
          </Card>
        </div>

        <Card className="bg-white/5 backdrop-blur border-white/20 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Solicite seu Orçamento Gratuito</CardTitle>
            <p className="text-white/80">Atendimento rápido e profissional para seus eletrodomésticos</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">1</div>
                <div className="text-lg font-semibold">Entre em Contato</div>
                <div className="text-sm text-white/80">WhatsApp ou telefone</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-lg font-semibold">Diagnóstico</div>
                <div className="text-sm text-white/80">Avaliação gratuita</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-lg font-semibold">Reparo</div>
                <div className="text-sm text-white/80">Serviço com garantia</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </Button>
              <Button variant="cta" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora - 24h
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-accent">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">Mais de 500 clientes satisfeitos</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;