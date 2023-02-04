export const capitalizeFirstLetter = (word: string | undefined) => {
    return word ? word.substring(0, 1).toUpperCase() + word.slice(1) : null;
};
