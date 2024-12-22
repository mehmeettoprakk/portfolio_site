"use client";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
      🌙/☀️
    </button>
  );
}
