const {top3Words, splitWords} = require('./wordCounts');

const txt1 = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance 
in the lance-rack, an old buckler, a lean hack, and a greyhound for 
coursing. An olla of rather more beef than mutton, a salad on most 
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra 
on Sundays, made away with three-quarters of his income.`;

const txt2 = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e;'

const txt3 = " //wont won't won't";

describe('splitting text', () => {
  describe('when no text is passed in', () => {
    it('should return empty array', () => {
        expect(splitWords()).toEqual([]);
    });
  });

  describe('when a three mixed case words are passed in', () => {
    it('should return lowercase 3 word array', () => {
        expect(splitWords('The quick brown FOX')).toEqual(['the', 'quick', 'brown', 'fox']);
    });
  });

  describe('when a three words are passed in', () => {
    it('should return 3 word array', () => {
        expect(splitWords('the quick brown fox')).toEqual(['the', 'quick', 'brown', 'fox']);
    });
  });
});

describe('special chars', () => {
  describe('when words containing special chars are passed in', () => {
    it('should remove them', () => {
        expect(splitWords('@^;;test**')).toEqual(['test']);
    });
  });

  describe('when words containing special chars and apostrophe are passed in', () => {
    it('should remove special chars but keep apostrophe', () => {
        expect(splitWords("@^;;don't**")).toEqual(["don't"]);
    });
  });
});

describe('top 3 words', () => {

  describe('when no text passed in', () => {
    it('should return empty array', () => {
      expect(top3Words()).toEqual([]);
    });
  });

  describe('when a paragraph is passed in', () => {
    it('should have correct counts', () => {
      expect(top3Words(txt1)).toEqual([ 'a', 'of', 'on' ]);
    });
  });
  
  describe('when text with mixed case and special chars passed in', () => {
    it('should have correct counts', () => {
      expect(top3Words(txt2)).toEqual([ 'e', 'ddd', 'aa' ]);
    });
  });

  describe('when text with apostrophies passed in', () => {
    it('should have correct counts', () => {
      expect(top3Words(txt3)).toEqual(["won't", "wont"]);
    });
  });
});