import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileDown, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const InvoiceGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateInvoice = async () => {
    setIsGenerating(true);
    
    // Simulate PDF generation process
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Fatura Gerada com Sucesso!",
        description: "A fatura da Académica Lda. foi gerada e está pronta para download.",
        duration: 5000,
      });
    }, 2000);

    // TODO: Adicionar aqui a lógica para gerar o PDF real
    // Aqui você pode integrar com uma biblioteca como jsPDF, PDFKit ou
    // fazer uma chamada para um serviço backend que gere o PDF
  };

  return (
    <div className="max-w-2xl mx-auto animate-scale-in">
      <Card className="shadow-lg border-border/50 hover-lift glow-effect">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-accent-red/10 rounded-full w-fit animate-bounce-gentle">
            <FileDown className="h-8 w-8 text-accent-red" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground animate-fade-in-up">
            Gerador de Faturas
          </CardTitle>
          <CardDescription className="text-muted-foreground animate-fade-in-up animate-delay-100">
            Clique no botão abaixo para gerar uma fatura oficial da Académica Lda.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <div className="p-6 bg-muted/30 rounded-lg animate-fade-in-up animate-delay-200 hover:bg-muted/40 transition-colors duration-300">
            <h3 className="font-semibold text-foreground mb-2">Informações da Fatura</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="hover:text-foreground transition-colors duration-200">• Empresa: Académica Lda.</p>
              <p className="hover:text-foreground transition-colors duration-200">• Formato: PDF</p>
              <p className="hover:text-foreground transition-colors duration-200">• Modelo: Fatura Comercial</p>
              <p className="hover:text-foreground transition-colors duration-200">• Idioma: Português</p>
            </div>
          </div>

          <Button 
            variant="invoice" 
            size="lg" 
            onClick={handleGenerateInvoice}
            disabled={isGenerating}
            className="w-full py-4 text-lg font-semibold animate-fade-in-up animate-delay-300 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-red/25"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Gerando Fatura...
              </>
            ) : (
              <>
                <Download className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                Gerar Fatura PDF
              </>
            )}
          </Button>

          <div className="text-xs text-muted-foreground animate-fade-in-up animate-delay-400">
            <p className="flex items-center justify-center gap-2 hover:text-green-600 transition-colors duration-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Sistema seguro e confiável para geração de documentos
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};