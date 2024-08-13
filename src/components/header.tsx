import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toogle";
import { CartSidebar } from "@/components/cart/sidebar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-5">
        <Logo />
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-5">
        <CartSidebar />
      </div>
    </header>
  );
};
