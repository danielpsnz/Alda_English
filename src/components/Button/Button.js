import { Text, Pressable, Dimensions } from "react-native";
import getStyles from "./Button.style";
import palette from "../../styles/colors";

const Button = ({
    fullWidth,
	buttonText,
	width,
	disabled,
	type,
	onPress,
}) => {
	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions);

	return (
		<Pressable
			style={[
				styles.button,
				{
					width: width || "auto",
					backgroundColor: disabled ? "transparent" : palette[type],
					borderWidth: 2,
					borderColor: palette[type],
					alignSelf: fullWidth ? "stretch" : "center",
				},
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text
				style={[
					styles.buttonText,
					{ color: disabled ? palette[type] : "white" },
				]}
			>
				{buttonText}
			</Text>
		</Pressable>
	);
};

export default Button;