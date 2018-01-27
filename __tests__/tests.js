const { getLargestTrappedWater, findBiggestWaterTrap } = require('../server/utils.js');

describe('Jest', () => {
	test('does in fact work', () => {
		expect(1 + 1).toBe(2);
	});
});

describe('getLargestTrappedWater', () => {
	test('finds water when first and last walls are largest', () => {
		const walls = [5, 4, 5];
		expect(getLargestTrappedWater(walls)).toMatchObject([0, 1, 0]);
	});

	test('finds water across multiple trapped water sections', () => {
		const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
		const answer = [0, 2, 0, 5, 1, 3, 2, 0, 1, 0];
		expect(getLargestTrappedWater(walls)).toMatchObject(answer);
	});

	test('returns no water trapped for ascending walls', () => {
		const walls = [1, 2, 3, 4, 5];
		expect(getLargestTrappedWater(walls)).toMatchObject([0, 0, 0, 0, 0]);
	});

	test('returns no water trapped for descending walls', () => {
		const walls = [5, 4, 3, 2, 1];
		expect(getLargestTrappedWater(walls)).toMatchObject([0, 0, 0, 0, 0]);
	});

	test('returns null when no water has been trapped', () => {
		const walls = [5, 5, 5];
		expect(getLargestTrappedWater(walls)).toMatchObject([0, 0, 0]);
	});
});

describe('findBiggestWaterTrap', () => {
	test('finds largest trapped water when given one option', () => {
		const water = [0, 2, 0];
		expect(findBiggestWaterTrap(water)).toMatchObject([1, 3, 2]);
	});

	test('finds largest trapped water of multiple options', () => {
		const water = [0, 2, 0, 5, 1, 3, 2, 0, 1];
		expect(findBiggestWaterTrap(water)).toMatchObject([3, 8, 11]);
	});

	test('finds largest trapped water when answer is first of multiple options', () => {
		const water = [0, 12, 0, 7, 0, 5, 3, 0]
		expect(findBiggestWaterTrap(water)).toMatchObject([1, 3, 12]);
	});

	test('finds largest trapped water when answer is last of multiple options', () => {
		const water = [0, 2, 0, 7, 0, 5, 3, 0]
		expect(findBiggestWaterTrap(water)).toMatchObject([5, 8, 8]);
	});

		test('finds largest trapped water when answer is last of multiple options', () => {
		const water = [0, 2, 0, 7, 0, 5, 3]
		expect(findBiggestWaterTrap(water)).toMatchObject([5, 8, 8]);
	});

	test('returns [0, 0, 0] when no water has been trapped', () => {
		const water = [0, 0, 0, 0];
		expect(findBiggestWaterTrap(water)).toMatchObject([0, 0, 0]);
	});
});


