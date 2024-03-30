import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import RecipeCard from "./RecipeCard";
// import { RecipeState } from "./recipeSlice";
import { Skeleton } from "@/components/ui/skeleton";
import { RecipeState } from "./recipeSlice";

const RecipeList: React.FC<RecipeState> = ({ recipes, loading, error }) => {
  return (
    <div className="bg-darkGreen py-24 ">
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mx-auto place-items-center">
          {[...Array(6)].map((_, index) => (
            <CardContainer key={index}>
              <CardBody className="bg-[#212121] space-y-3  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="100"
                  className="w-full space-y-3 flex flex-col justify-center items-center "
                >
                  <Skeleton className="h-96 w-full" />
                  <Skeleton className="h-4 w-[200px] text-center" />
                  <Skeleton className="h-4 w-[200px] text-center" />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      ) : error ? (
        <span>Error ...</span>
      ) : (
        <div className="flex justify-center items-center p-6 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-w-full mx-auto place-items-center ">
            {recipes.map((item, index) => (
              <CardContainer key={index}>
                <CardBody className="bg-[#FEFAE0] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="100" className="w-full ">
                    <RecipeCard recipe={item} index={index} />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
