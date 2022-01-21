const {
    createClickSubset,
    start
} = require('./index');

const {
    test_data1,
    test_data2,
    test_data3,
    expected_data1,
    expected_data2,
    expected_data3,
    expected_data4
} = require('./testdata')

describe("GetSubset", () => {
    test('duplicate clicks with amount 6.50 and 7.25 respectively for same ip in same period. The resulted click should be with amount 7.25"', () => {
        expect(createClickSubset(test_data1)).toEqual(expected_data1);
    });

    test('duplicate clicks with same amount as 8.00 for same ip but different timestamp (3/11/2020 02:12:32 and 3/11/2020 02:50:26). The resulted click should be with earlier timestamp 3/11/2020 02:12:32"', () => {
        expect(createClickSubset(test_data2)).toEqual(expected_data2);
    });

    test('if an ip is repeated more than 10 times. The ip should be discarded', () => {
        expect(createClickSubset(test_data3)).toEqual(expected_data3);
    });

    test('check desired output for provided clicks.json data', () => {
        start()
        let data = require('./resultset.json')
        expect(data).toEqual(expected_data4);
    });

});
