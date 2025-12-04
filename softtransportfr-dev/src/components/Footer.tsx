import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img 
              src={logo} 
              alt="Soft Transports" 
              className="w-24 h-24 object-contain mb-4 bg-white rounded-lg p-2"
            />
            <h3 className="font-bold text-xl mb-2">SOFT TRANSPORTS</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Expert en déménagement à Paris et en Île-de-France depuis 15 ans. Votre déménagement, notre métier.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Nos Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-primary transition-colors cursor-pointer">Déménagement particulier</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Déménagement professionnel</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Monte-meuble Paris</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Garde-meubles</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Déménagement express</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Transport sécurisé</li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Informations</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-primary transition-colors cursor-pointer">Devis gratuit</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Zone d'intervention</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Mentions légales</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Politique de confidentialité</li>
              <li className="hover:text-primary transition-colors cursor-pointer">CGV</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Nous Contacter</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Paris & Île-de-France</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+33758562250" className="hover:text-primary transition-colors">01 58 56 22 50</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@softtransports.fr" className="hover:text-primary transition-colors">contact@softtransports.fr</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} Soft Transports. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-400">
              Déménageurs professionnels certifiés • Transport sécurisé • Service complet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
