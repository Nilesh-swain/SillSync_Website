// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Globe, Check } from "lucide-react";
// import { useLanguage, SUPPORTED_LANGUAGES } from "@/hooks/useLanguage";

// const LanguageSelector = () => {
//   const { currentLanguage, setLanguage } = useLanguage();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="sm"
//           className="flex items-center space-x-2 min-w-[120px] justify-between bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-colors"
//         >
//           <div className="flex items-center space-x-2">
//             <Globe className="h-4 w-4 text-primary" />
//             <span className="text-sm font-medium">{currentLanguage.nativeName}</span>
//           </div>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent 
//         align="end" 
//         className="w-56 bg-background/95 backdrop-blur-xl border-primary/20 shadow-2xl"
//       >
//         {SUPPORTED_LANGUAGES.map((language) => (
//           <DropdownMenuItem
//             key={language.code}
//             onClick={() => {
//               setLanguage(language);
//               setIsOpen(false);
//             }}
//             className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
//           >
//             <div className="flex flex-col">
//               <span className="font-medium text-foreground">{language.nativeName}</span>
//               <span className="text-xs text-muted-foreground">{language.name}</span>
//             </div>
//             {currentLanguage.code === language.code && (
//               <Check className="h-4 w-4 text-primary" />
//             )}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default LanguageSelector;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useLanguage, SUPPORTED_LANGUAGES } from "@/hooks/useLanguage";

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center justify-between min-w-[130px] space-x-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-colors rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{currentLanguage.nativeName}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-background/95 backdrop-blur-xl border-primary/20 shadow-2xl rounded-lg"
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              setLanguage(language);
              setIsOpen(false);
            }}
            className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-primary/10 transition-colors rounded-md"
          >
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{language.nativeName}</span>
              <span className="text-xs text-muted-foreground">{language.name}</span>
            </div>
            {currentLanguage.code === language.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
