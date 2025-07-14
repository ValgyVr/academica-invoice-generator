import { MapPin, Phone, Mail } from "lucide-react";

interface CompanyHeaderProps {
  className?: string;
}

export const CompanyHeader = ({ className = "" }: CompanyHeaderProps) => {
  return (
    <header className={`bg-card border-b border-border shadow-sm ${className}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/e5ea97b2-d078-4787-b345-dd8f2f1f190a.png" 
              alt="Académica Lda." 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Académica Lda.</h1>
              <p className="text-sm text-muted-foreground">Gráfica • Papelaria • Serviços Digitais</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(+258) 21 400416</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>grafica@academica.co.mz</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Av. da O.U.A., Nº 50, Maputo</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};