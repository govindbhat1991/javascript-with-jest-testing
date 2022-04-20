const deepCopy = require('./deepCopy')

test('check if deepcopy works', () => {
    const obj = {
        name: 'Govind Bhat',
        age: 30,
        professionalDetails: {
            designation: 'Frontend Engineer',
            location: 'Kochi'
        }
    };

    const newObj = deepCopy(obj);

    newObj.professionalDetails.designation = 'Software Engineer';

    expect(obj.professionalDetails.designation).toBe('Frontend Engineer');
    expect(newObj.professionalDetails.designation).toBe('Software Engineer');
    expect(newObj.professionalDetails.designation).not.toBe(obj.professionalDetails.designation);
});