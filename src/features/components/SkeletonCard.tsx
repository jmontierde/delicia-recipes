import { Skeleton } from "@/components/ui/skeleton";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mx-auto place-items-center">
      {[...Array(6)].map((_, index) => (
        <CardContainer key={index}>
          <CardBody className="bg-[#090909] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full ">
              <Skeleton className="h-250 w-250" />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default SkeletonCard;
