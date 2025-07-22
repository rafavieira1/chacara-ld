import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function GetStartedButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button 
      className="group relative overflow-hidden text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300" 
      size="lg"
      onClick={onClick}
      style={{ 
        background: 'linear-gradient(135deg, #5C3A2B 0%, #8B6355 100%)',
        borderRadius: '6px'
      }}
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        Ver mais
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}
