import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FaAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

export const Sidebar = ({ jenis }) => {
  const [isOpened, setIsOpened] = useState(false);
  const triggerOpen = () => {
    isOpened === false ? setIsOpened(true) : setIsOpened(false);
  };
  return (
    <>
      <li>
        <button
          onClick={triggerOpen}
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faBookOpen} />
          <span className="flex-1 ml-3 whitespace-nowrap">{jenis.title}</span>
        </button>
        <Collapse isOpened={isOpened}>
          {jenis.idKategori &&
            jenis.idKategori.map((item, index) => (
              <ul key={index}>
                <li>
                  <a
                    href={`#${item.title}`}
                    className="text-white hover:underline"
                  >
                    <FontAwesomeIcon icon={faSquareCaretRight} /> {item.title}
                  </a>
                </li>
              </ul>
            ))}
        </Collapse>
      </li>
    </>
  );
};
