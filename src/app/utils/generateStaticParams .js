import { fetchMakes } from "@/lib/fetchData";
import { years } from "./years";

export async function generateStaticParams() {
  const makesRed = await fetchMakes();
  const makesIds = makesRed.map((el) => el.Make_Id);

  const paths = [];

  for (let makeId of makesIds) {
    for (let year of years) {
      paths.push({
        makeId: makeId.toString(),
        year: year.toString(),
      });
    }
  }

  return paths;
}
