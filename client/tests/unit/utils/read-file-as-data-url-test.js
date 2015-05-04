/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import readFileAsDataUrl from 'client/utils/read-file-as-data-url';

describe('readFileAsDataUrl', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = readFileAsDataUrl();
    expect(result).to.be.ok;
  });
});
