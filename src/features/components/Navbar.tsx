import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  // const [query, setQuery] = useState<string>("");
  // const [searchRecipeInput, setSearchRecipeInput] = useState("");

  // useEffect(() => {
  //   const finalQuery =
  //     searchRecipeInput.trim() === "" ? "Bread" : searchRecipeInput;

  //   setQuery(finalQuery);

  //   dispatch(fetchRecipe(finalQuery));
  // }, [dispatch, searchRecipeInput]);

  return (
    <div className="pb-[80px]">
      <div className=" fixed z-50 flex justify-between py-6 px-6 lg:px-16 items-center w-full bg-darkGreen text-customText ">
        <Link to="/">
          <h1 className="font-lobster font-bold  text-2xl ">Delicia</h1>
        </Link>

        <Search />
      </div>
    </div>
  );
};

export default Navbar;
