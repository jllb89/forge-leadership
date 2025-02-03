import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/images/logo.webp" // Path to your .webp image
            alt="Logo"
            width={150} // Adjust width as needed
            height={50} // Adjust height as needed
          />
        </div>
        {/* Phone and CTA Button */}
        <div className="flex items-center gap-8">
          <a href="tel:+525579146-481" className="phone-link text-white hover:text-blue-500 font-semibold">5579146-481</a>
          <a href="#contact" className="cta-button font-semibold">¡Me interesa!</a>
        </div>
      </div>
    </nav>
  );
}