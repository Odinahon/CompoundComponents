import { createContext, useContext } from "react";

const AccordionItemContext = createContext();
//to extract this context we create a custom hook
export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }
  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  // const { openItemId, toggleItem } = useAccordionContext();
  // now we need find out if this accordionItem is currently open, for that we expect to have an id, and check if that openItemId is equal to the id we are receiving through the props

  // const isOpen = openItemId === id;

  // function handleClick() {
  //   if (isOpen) {
  //     closeItem();
  //   } else {
  //     openItem(id);
  //   }
  // }

  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
    // <li className={className}>
    //   {/* <h3 onClick={() => toggleItem(id)}>{title}</h3> */}

    //   {/* <div
    //     className={
    //       isOpen ? " accordion-item-content open" : "accordion-item-content"
    //     }
    //   >
    //     {children}
    //   </div> */}
    //   {children}
    // </li>
  );
}
