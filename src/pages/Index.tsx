import { CompanyHeader } from "@/components/CompanyHeader";
import { InvoiceGenerator } from "@/components/InvoiceGenerator";
import { CompanyInfo } from "@/components/CompanyInfo";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CompanyHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section with Invoice Generator */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sistema de Faturas Académica
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gere faturas oficiais da Académica Lda. de forma rápida e profissional. 
            Clique no botão abaixo para criar uma nova fatura em formato PDF.
          </p>
          
          <InvoiceGenerator />
        </div>

        <Separator className="my-12" />

        {/* Company Information */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Sobre a Académica Lda.
          </h2>
          <CompanyInfo />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © Académica, Lda 2025 | Todos Direitos Reservados
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
