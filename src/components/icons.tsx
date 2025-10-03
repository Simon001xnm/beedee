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
        BD
      </text>
    </svg>
  ),
};
