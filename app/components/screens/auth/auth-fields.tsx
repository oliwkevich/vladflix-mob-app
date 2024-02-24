import React, { FC } from 'react';
import { Control } from 'react-hook-form';

import Field from '@/components/ui/form-elements/field/field';

import { validEmail } from '@/shared/regex';
import { IAuthFormData } from '@/shared/types/auth.interface';

interface IAuthFields {
	control: Control<IAuthFormData>;
	isPassRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='example@mail.com'
				control={control}
				name='email'
				rules={{
					required: true,
					pattern: {
						value: validEmail,
						message: 'Please enter the valid email'
					}
				}}
				keyboardType='email-address'
			/>
			<Field<IAuthFormData>
				placeholder='*************'
				control={control}
				name='password'
				rules={isPassRequired ? { required: true, minLength: 6 } : {}}
			/>
		</>
	);
};

export default AuthFields;
