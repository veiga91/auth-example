import * as bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
	const saltOrRounds = 10;
	try {
		const hashedPassword = await bcrypt.hash(password, saltOrRounds);
		return hashedPassword;
	} catch {
		throw new Error("Fail on hash password");
	}
}

export default hashPassword;
