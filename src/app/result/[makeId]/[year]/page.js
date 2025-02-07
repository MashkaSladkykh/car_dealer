"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { fetchModels } from "@/app/utils/fetchModels";

export default function ResultPage({ params }) {
  const { makeId, year } = React.use(params);
  const [data, setData] = useState();
  useEffect(() => {
    async function loadData() {
      const models = await fetchModels(makeId, year);
      setData(models);
    }
    loadData();
  }, [makeId, year]);

  return (
    <div className="flex flex-col grow">
      <Header btn={true} />
      <h2 className=" p-[16px]">
        Results for Make: <span className="text-blue-600 ">{makeId}</span>,
        Year: <span className="text-blue-600 ">{year}</span>
      </h2>
      <Suspense fallback={<p>Loading models...</p>}>
        {data && data.Results && (
          <section className="p-4 max-w-[calc(100% - 24px)]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.Results.map((el, index) => (
                <li
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl z-0"
                >
                  <div className="p-4">
                    <div className="flex justify-center mb-4">
                      <Image
                        className="dark:invert"
                        src="/logo.svg"
                        alt="Car Dealer logo"
                        width={140}
                        height={38}
                        priority
                      />
                    </div>
                    <article>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        <span className="font-semibold">Make Name:</span>
                        <span className="ml-2">{el.MakeName}</span>
                      </p>
                      <p className="text-sm font-medium text-gray-700">
                        <span className="font-semibold">
                          Vehicle Type Name:
                        </span>
                        <span className="ml-2">{el.VehicleTypeName}</span>
                      </p>
                    </article>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Suspense>

      <Footer />
    </div>
  );
}
