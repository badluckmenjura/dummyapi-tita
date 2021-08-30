import counterReducer, {
  emptyComents,
} from './commentSlice';

describe('comment reducer', () => {
  const initialState = {
    comments:[
      { id: "60d21b7067d0d8992e610d03" }
    ],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      comments:[],
      status: 'idle',
    });
  });

  it('should handle emptyComments', () => {
    const actual = counterReducer(initialState, emptyComents());
    expect(actual.comments.length).toEqual(0);
  });
});
