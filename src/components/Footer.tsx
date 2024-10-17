import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 text-center text-sm text-muted-foreground">
      <p>
        Made with <span className="text-red-500">♥️</span> by{" "}
        <a
          href="https://ozzy.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-node-green"
        >
          Özhan
        </a>{" "}
        - {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
