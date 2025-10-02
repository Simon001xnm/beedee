'use client';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="none"></path>
        <path d="M16.5 13.5c-.3 0-.6-.1-.9-.2-.3-.1-.6-.2-.9-.4-.3-.2-.6-.4-.8-.6s-.3-.4-.3-.4c0-.1.1-.1.2-.1l.3.3c.1 0 .2-.1.3-.2l.3-.3c.1-.1.1-.2.1-.3v-.3c0-.1-.1-.2-.2-.3l-.3-.3c-.1-.1-.2-.1-.3-.1h-.3c0-.1.1-.2.2-.3l.3-.3c.1-.1.2-.2.2-.3s0-.2-.1-.3l-.2-.3c0-.1-.1-.1-.2-.1h-.3c-.1 0-.2.1-.3.2l-.3.3c-.1.1-.2.2-.2.3s-.1.2-.1.3v.3c0 .1.1.2.2.3l.3.3c.1.1.2.1.3.1h.3c0 .1-.1.2-.2.3l-.3.3c-.1.1-.2.2-.2.3s-.1.2-.1.3v.3c0 .1.1.2.2.3l.3.3c.1.1.2.1.3.1h.3c.1 0 .2-.1.3-.2l.3-.3c.1-.1.2-.2.2-.3s.1-.2.1-.3v-.3c0-.1-.1-.2-.2-.3l-.3-.3c-.1-.1-.2-.1-.3-.1h-.3z" fill="white" stroke="none"></path>
    </svg>
);


export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254792822146"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
