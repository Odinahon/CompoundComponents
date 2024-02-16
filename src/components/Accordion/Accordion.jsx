import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext();
//custom hook, idea is to use the built-in useContext hook and read that accordion context and get hold of it
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  // if this context was using outside of Accordion Component
  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>. "
    );
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  // function openItem(id) {
  //   setOpenItemId(id);
  // }
  // function closeItem() {
  //   setOpenItemId(null);
  // }

  // create a new function toggleItem instead of openItem and closeItem
  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }
  const contextValue = {
    openItemId: openItemId,
    toggleItem,
    // openItem,
    // closeItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
