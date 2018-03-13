import assert from 'assert';

import { capitalizeFirstLetter } from '../src/js/utils';

describe('Preview: Utils', () => {
  describe('capitalizeFirstLetter()', () => {
    it('should capitalize first letter of a provided string', () => {
      assert.equal(capitalizeFirstLetter('test'), 'Test');
    });
  });
});
