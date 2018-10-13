import {isIncludeHighRegister,isIncludeLowRegister,isIncludeNumber,isIncludeSpecialNumber,isMoreThan10Symbols} from '../src/password';

describe('Password validator part throw' ,() => {

	it('true when password is more than 10 symbols',() => {
		expect(isMoreThan10Symbols('Groooboronf1234!@')).toEqual('Groooboronf1234!@');
	});
	it('false when password is less than 10 symbols',() => {
		expect(isMoreThan10Symbols('Grro')).toBe(false);
	});
	it('false when password is `false`',() => {
		expect(isMoreThan10Symbols(false)).toBe(false);
	});

	it('true when password include high register',() => {
		expect(isIncludeHighRegister('Groooboronf1234!@')).toEqual('Groooboronf1234!@');
	});
	it('false when password does not include high register',() => {
		expect(isIncludeHighRegister('fregfrro')).toBe(false);
	});

	it('true when password include low register',() => {
		expect(isIncludeLowRegister('Groooboronf1234!@')).toEqual('Groooboronf1234!@');
	});
	it('false when password does not include low register',() => {
		expect(isIncludeLowRegister('GOLO')).toBe(false);
	});

	it('true when password include number',() => {
		expect(isIncludeNumber('Groooboronf1234!@')).toEqual('Groooboronf1234!@');
	});
	it('false when password does not include number',() => {
		expect(isIncludeNumber('GOLO')).toBe(false);
	});

	it('true when password include special symbols',() => {
		expect(isIncludeNumber('Groooboronf1234!@')).toEqual('Groooboronf1234!@');
	});
	it('false when password does not include special symbol',() => {
		expect(isIncludeSpecialNumber('Awrfgsrg')).toBe(false);
	});
})