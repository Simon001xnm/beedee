import { cn } from "@/lib/utils"

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <text x="0" y="18" fontFamily="'Playfair Display', serif" fontSize="20px" fontWeight="bold" fill="hsl(var(--primary))">
        MS
      </text>
    </svg>
  ),
  LogoFull: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      height="32"
      viewBox="0 0 541 128"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      {...props}
    >
      <text x="0" y="90" fontFamily="'Playfair Display', serif" fontSize="100" fontWeight="700" fill="currentColor">
        Magical
      </text>
      <text x="250" y="110" fontFamily="'PT Sans', sans-serif" fontSize="60" fontWeight="400" fill="currentColor">
        Shoekenya
      </text>
    </svg>
  ),
};
