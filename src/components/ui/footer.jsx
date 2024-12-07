function Footer() {
  return (
    <footer className="mx-auto max-w-lg border-t p-4 text-center">
      <span>
        © {new Date().getFullYear()} Patrick Diesta. All rights reserved.
      </span>
    </footer>
  );
}

export { Footer };
