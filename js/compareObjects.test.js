const compareObjects = require('./compareObjects')

test('check if two objects are same', () => {
    const data1 = { a: 17, b: { c: 'Test', d: null } };
    const data2 = { a: 17, b: { c: 'Test' } };
    const data3 = { a: 17, b: null };
    expect(compareObjects(data1, data2)).toBe(true); // -> true
    expect(compareObjects(data1, data3)).toBe(false); // -> false

    const data4 = {
        name: 'Govind',
        employeeDetails: {
            designation: 'Frontend Engineer',
            employeeId: 123456,
        }
    }

    const data5 = {
        name: 'Govind',
        employeeDetails: {
            designation: 'Frontend Engineer',
            employeeId: 123456,
        }
    }

    expect(compareObjects(data4, data5)).toBe(true);
});
