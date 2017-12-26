import PedalTile from '../../src/components/PedalTile';

describe('PedalTile', () =>{
  let wrapper,
      pedalImage;

  beforeEach(()=>{
    wrapper = mount(
      <PedalTile
        pedalImage="https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630"
      />
    );
  });

  it('should render an p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe("Type of Effect: ");
  });

  it('should render an img tag with the specific props', () => {
    console.log(wrapper.find('img').props())
    expect(wrapper.find('img').props()).toEqual({
      src: "https://cdn.shopify.com/s/files/1/0856/7056/products/boss_blue_driver_1024x1024.png?v=1481655630"

    });
  });

});
