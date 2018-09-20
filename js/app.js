function generate ( ) {
	var numbers = [ ];
	for (var I = 0; I < 6; i ++) {
		numbers.push(Math.floor(Math.random( ) * 45));
	}
	return numbers;
}