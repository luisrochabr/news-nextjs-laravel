import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Invest News
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Informação inteligente para suas melhores decisões financeiras.
            </p>
          </div>

          <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
            <Link href="/about"> Sobre nós</Link>
            <Link href="/contact"> Contato</Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineInstagram size={24} />
            </a>
            <a
              href="https://github.com"
              aria-label="Github"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2024 Invest News. All rights reserved.
          </p>

          <Button
            variant="outline"
            className="mt-4 md:mt-0 dark:bg-gray-900 dark:text-white"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
