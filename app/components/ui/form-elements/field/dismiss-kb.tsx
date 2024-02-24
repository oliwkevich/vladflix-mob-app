import React, { FC, PropsWithChildren } from 'react';
import {
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
	ViewProps
} from 'react-native';

const DismissKb: FC<PropsWithChildren<ViewProps>> = ({ children, ...rest }) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={{ flex: 1 }} {...rest}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default DismissKb;
