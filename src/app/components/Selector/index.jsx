import { useState } from "react";

import { Button } from "../Button";

export const Selector = ({ text, list, handleChange }) => {
  const [openList, setOpenList] = useState(false);
  const [selectedEl, setSelectedEl] = useState();
  const handleOpenList = () => setOpenList((prev) => !prev);

  return (
    <div className="relative inline-block">
      <Button
        onClick={handleOpenList}
        text={selectedEl ? selectedEl : text}
        img="/filter.svg"
        alt="filter"
        imgWidth={20}
        imgHeight={20}
      />

      {openList && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-100">
          <ul className="flex flex-col divide-y divide-gray-200 overflow-y-scroll max-h-[400px]">
            {list.map((el, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                onClick={() => {
                  el.MakeId ? handleChange(el.MakeId, el.MakeName) : handleChange(el);
                  handleOpenList();
                  el.MakeName ? setSelectedEl(el.MakeName) : setSelectedEl(el)
                }}
              >
                {el.MakeName ? el.MakeName : el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
