import { FC } from "react";
import { Text } from "../../styles/GlobalStyle";

interface CustomTextProps {
    text: string;
}
const CustomText: FC<CustomTextProps> = ({ text }) => {
    return <Text></Text>;
};

export default CustomText;
