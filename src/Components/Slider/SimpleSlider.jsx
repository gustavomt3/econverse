//React
import React from 'react';
//Plugins
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SimpleSlider extends React.Component {
  render() {
    const { children, settings } = this.props;
    return <Slider {...settings}>{children}</Slider>;
  }
}

export default SimpleSlider;
