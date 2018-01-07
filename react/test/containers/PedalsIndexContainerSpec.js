import PedalsIndexContainer from '../../src/containers/PedalsIndexContainer';
import PedalTile from '../../src/components/PedalTile';

describe('PedalsIndexContainer', () => {
  let wrapper;
  // let pedals1= {
  //   pedals: [{
  //     id:1,
  //     name:"Boss Blues Driver"
  //   }]

  // }
  beforeEach(() => {
    wrapper = mount(<PedalsIndexContainer />);
  });

  it ('should have the specified initial state', ()=> {
    expect(wrapper.state()).toEqual({
      pedals: [],
      currentUser: null,
      currentPage: 1,
      pedalsPerPage: 9
    });
  });

});

  // it('should render a PedalTile Component', () => {
  //   wrapper.setState({ pedals: [{
  //     id: 1,
  //     name:'Boss Blues Driver',
  //     image_url: 'https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630',
  //     effecttype: "Overdrive",
  //     description: 'cool'
  //   }]
  // });
  //   expect(wrapper.find(PedalTile)).toBePresent();
  // });

  // it('should render the PedalTile Component with specific props', () => {
  //   wrapper.setState({ pedals: [{
  //     id: 1,
  //     effecttype: 'Overdrive',
  //     name:'Boss Blues Driver',
  //     image_url:'https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630',
  //     description: 'cool'
    // }]
  // });
    // expect(wrapper.find(PedalTile).props()).toEqual({
    //   id: 1,
    //   pedalType: "Overdrive",
    //   pedalName:'Boss Blues Driver',
    //   pedalImage:'https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630',
    //   pedalDescription: 'cool'
    // });
// });
