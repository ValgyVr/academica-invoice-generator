import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Heart, MapPin, Phone, Mail } from "lucide-react";

export const CompanyInfo = () => {
  return (
    <div className="space-y-8">
      {/* História */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Building2 className="h-5 w-5 text-accent-red" />
            Nossa História
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed">
          <p className="mb-4">
            A <strong className="text-foreground">ACADÉMICA Lda.</strong> é uma empresa moçambicana ativa no mercado desde os anos 40 e privatizada em 1995.
          </p>
          <p className="mb-4">
            Tem se empenhado em melhorar cada vez mais sua capacidade de satisfazer as necessidades dos seus clientes de forma flexível, eficaz e profissional.
          </p>
          <p>
            A ACADÉMICA está inserida num grupo econômico moçambicano pertencente à família Sidat, que inclui negócios em hotelaria, papelaria, vestuário e material desportivo.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Visão */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Target className="h-5 w-5 text-accent-red" />
              Visão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p className="leading-relaxed">
              Ser líder nas respectivas áreas de actuação, agregando sempre mais valor e comodidade aos clientes através da prestação de serviços de elevada qualidade, mantendo também a competência e profissionalismo.
            </p>
          </CardContent>
        </Card>

        {/* Missão */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Heart className="h-5 w-5 text-accent-red" />
              Missão
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p className="leading-relaxed">
              Melhorar os nossos serviços e produtos de modo a aumentar a capacidade de satisfazer às necessidades dos seus clientes de forma flexível, eficaz e profissional, a um preço justo e com absoluta responsabilidade social, ambiental e ética.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Valores */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Nossos Valores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Zelo e respeito pelos clientes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Honestidade, Integridade e Sigilo
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Responsabilidade Social e Ambiental
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Dedicação, Paixão e Dinamismo
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Trabalho e Espírito de Equipa
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Competência e Profissionalismo
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                Criatividade e Inovação
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contactos */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Nossos Contactos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">SEDE PRINCIPAL</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 text-accent-red flex-shrink-0" />
                    <span>Av. da O.U.A., Nº 50, C.P. 1215, Maputo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent-red" />
                    <span>(+258) 21 400416 / 402181</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent-red" />
                    <span>(+258) 82 318 8720</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent-red" />
                    <span>grafica@academica.co.mz</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">SUCURSAIS</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <MapPin className="h-4 w-4 mt-1 text-accent-red flex-shrink-0" />
                      <span>Rua Joe Slovo N° 47, Maputo</span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <Mail className="h-3 w-3 text-accent-red" />
                      <span className="text-xs">papelariacademica@gmail.com</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <MapPin className="h-4 w-4 mt-1 text-accent-red flex-shrink-0" />
                      <span>Av. Eduardo Mondlane N° 411, Maputo</span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <Phone className="h-3 w-3 text-accent-red" />
                      <span className="text-xs">86 300 1786</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <MapPin className="h-4 w-4 mt-1 text-accent-red flex-shrink-0" />
                      <span>Rua da Rádio N° 986, Matola</span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <Phone className="h-3 w-3 text-accent-red" />
                      <span className="text-xs">84 88 31 608</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};