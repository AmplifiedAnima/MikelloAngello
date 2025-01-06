import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="p-8 flex gap-2">
      <Button>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
      </Button>
      <Button>
        <Link to="/oferta" className="[&.active]:font-bold">
          oferta
        </Link>
      </Button>
    </div>
  );
};
