import {isValidPassword} from '../src/password';

describe('Password validator throw' ,() => {
	
	it('true when password is valid', () => {
		expect(isValidPassword('Groooboronf1234!@')).toEqual(true);
	});
	
	it('false when password is not valid',() => {
		expect(isValidPassword('wargg')).toBe(false);
	});
})
