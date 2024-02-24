import { IButton } from './button.interface';
import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { LinearGradient } from 'expo-linear-gradient';
import { FC, PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	icon,
	children,
	...rest
}) => {
	return (
		<Pressable className={cn('self-center mt-3.5', className)} {...rest}>
			<LinearGradient
				start={{ x: 0, y: 0.75 }}
				end={{ x: 1, y: 0.25 }}
				colors={['#dc3f41', '#a6282b']}
				className={cn(
					'w-full py-3 px-8 rounded-2xl items-center',
					!!icon && 'flex-row'
				)}
			>
				{icon && <Feather color='white' name={icon} size={18} />}
				<Text
					className={cn(
						'text-white text-center font-medium text-lg',
						!!icon && 'ml-2'
					)}
				>
					{children}
				</Text>
			</LinearGradient>
		</Pressable>
	);
};

export default Button;
