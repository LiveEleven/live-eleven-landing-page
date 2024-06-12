import { Carousel } from "flowbite-react";

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "hidden absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none ",
    rightControl:
      "hidden absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-black/20 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black/50 dark:bg-gray-800",
    },
    base: "h-4 w-4 rounded-full lg:h-6 lg:w-6",
    wrapper:
      "absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3 md:bottom-5 lg:bottom-10",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "flex h-8 w-8 items-center justify-center dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-black dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

const CustomCarousel = ({ children }) => {
  return <Carousel theme={customTheme}>{children}</Carousel>;
};

export default CustomCarousel;
