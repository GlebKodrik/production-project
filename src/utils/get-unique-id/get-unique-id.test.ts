import { getUniqueId } from './get-unique-id';

describe('Testing of searchParams util', () => {
  test('Checking not equal id', () => {
    const id = getUniqueId();
    const nextId = getUniqueId();

    expect(id).not.toBe(nextId);
  });
});
