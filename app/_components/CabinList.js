import CabinCard from "./CabinCard";
import { getCabin, getCabins } from "../_lib/data-service";
import { unstable_noStore } from "next/cache";
async function CabinList({ filter }) {
  unstable_noStore();
  const cabins = await getCabins();

  if (cabins.length == 0) return null;
  let displayCabins;
  if (filter === "all") displayCabins = cabins;
  if (filter === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.length > 0
        ? displayCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))
        : "There is no cabins"}
    </div>
  );
}

export default CabinList;
