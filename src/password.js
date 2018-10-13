export function isValidPassword(password){
	let result = isIncludeSpecialNumber(
		isMoreThan10Symbols(
			isIncludeHighRegister(
				isIncludeLowRegister(
					isIncludeNumber(password)
				)
			)	
		)
	);

	if (result === password) return true;
	else return false;
}

	export function isMoreThan10Symbols(password){
		let moreThan10 = /........../;
		if (moreThan10.test(password)) return password;
		else return false;
	}

	export function isIncludeHighRegister(password){
		let includeHighRegister = /[A-Z]/;
		if (includeHighRegister.test(password)) return password; 
		else return false;
	}
	
	export function isIncludeLowRegister(password){
		let includeLowRegister = /[a-z]/;
		if (includeLowRegister.test(password)) return password; 
		else return false;
	}
	
	export function isIncludeNumber(password){
		let includeNumber = /\d/;
		if (includeNumber.test(password)) return password; 
		else return false;
	}
	
	export function isIncludeSpecialNumber(password){
		let includeSpecialNumber = /[()-=+_{};:,<.>?]/;
		if (includeSpecialNumber.test(password)) return password; 
		else return false;
	}
	

