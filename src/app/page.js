"use client";

import { Suspense, useEffect, useState } from "react";

import { Selector } from "./components/Selector";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigator";

import { years } from "./utils/years";
import { apiUrl } from "./utils/apiUrl";
import { Footer } from "./components/Footer";
import { fetchMakes } from "./utils/fetchMakes";

export default function Home() {
  const [makeId, setMakeId] = useState();
  const [year, setYear] = useState();
  const [data, setData] = useState();

  const handleSetMakeId = (id) => setMakeId(id);

  const handleSetYear = (num) => setYear(num);

  useEffect(() => {
    fetchMakes().then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-col gap-[16px] ">
          <section className="flex flex-col gap-4 items-center w-full max-w-3xl mx-auto">
            <h2>Filter Cars By</h2>
            <div className="flex justify-evenly w-full">
              <Suspense fallback={<p>Loading models...</p>}>
                {data && (
                  <Selector
                    text="Vehicle Makes"
                    list={data}
                    handleChange={handleSetMakeId}
                  />
                )}
              </Suspense>
              <Selector
                text="Model Year"
                list={years}
                handleChange={handleSetYear}
              />
            </div>
            {makeId && year && (
              <Navigator
                link={`/result/${makeId}/${year}`}
                text="Next"
                img="/next.svg"
                alt="next"
                imgHeight={13}
                imgWidth={20}
              />
            )}
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
