export default function Footer() {
  return (
    <footer className="text-center py-6 mt-20 text-gray-400 border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Parikshit Basak</span>. All
        rights reserved.
      </p>
      <p className="mt-2 text-xs">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/jannatul-islam-akash-76333b188/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
        >
          JI Akash
        </a>
      </p>
    </footer>
  );
}
