import React from 'react';
import { Collapse } from 'react-collapse';
const Accordion = ({ toggle, open, title, desc }) => {
  return (
    <>
      <div
        className={`${
          open ? 'border-[#8FBD12] ' : 'border-[#EBEBEB]'
        } my-[2em] p-8 border-2 rounded-[32px] bg-[#FFF]`}
      >
        <div
          className="flex justify-between items-center p-4 cursor-pointer
        "
          onClick={toggle}
        >
          <h1
            className={`${
              open ? 'text-[#8FBD12] ' : 'text-primary'
            }  font-semibold text-[20px] md:text-[24px]   leading-normal`}
          >
            {title}
          </h1>
          <div>
            {open ? (
              <img
                src="./assets/images/UpArrows.png"
                className="h-[2rem]  md:w-[2rem] w-[4rem]"
                alt=""
              />
            ) : (
              <img
                src="./assets/images/DownArrows.png"
                className="h-[2rem]  md:w-[2rem] w-[4rem]"
                alt=""
              />
            )}
          </div>
        </div>
        <Collapse isOpened={open}>
          <p className="p-4 font-normal text-secondary text-[16px] leading-[26px]  ">
            {desc}
          </p>
        </Collapse>
      </div>
    </>
  );
};
export default Accordion;
