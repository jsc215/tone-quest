import PedalsIndexContainer from '../../src/containers/PedalsIndexContainer';
import PedalTile from '../../src/components/PedalTile';

describe('PedalsIndexContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<PedalsIndexContainer />);
  });

  it ('should have the specified initial state', ()=> {
    expect(wrapper.state()).toEqual({
      pedals: [],
      initialPedals: [],
      effectOption: '',
      currentUser: null,
      currentPage: 1,
      pedalsPerPage: 9
    });
  });
});
