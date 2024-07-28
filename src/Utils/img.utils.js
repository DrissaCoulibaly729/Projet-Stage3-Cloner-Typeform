import categories from "./tableau.utils";


const getImageSrc = (label) => `/svg/${label.toLowerCase().replace(/ /g, '_')}.svg`;

const getCategoryDetailsByLabel = (label) => {
  for (const category of categories) {
    const item = category.items.find((item) => item.label.toLowerCase() === label.toLowerCase());
    if (item) {
      return {
        imageSrc: getImageSrc(item.label),
        bgColor: item.bgColor,
        title: item.label
      };
    }
  }
  return {
    imageSrc: getImageSrc(label),
    bgColor: 'bg-gray-100',
    title: 'Short Text',
  };
};

export default getCategoryDetailsByLabel;
