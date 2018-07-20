import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2 className={styles['about-title']}>About me</h2>
        <p className={styles['about-desc']}>Nice to meet you. I am a former translator/interpreter who is trying to carve her way into IT world as front-end/full-stack developer.</p>
        <p className={styles['about-desc']}>This blog is about my journey, about all the obstacles I have found on the road, about my discoveries and funny moments and all the experiences alltogether.</p>
        <p className={styles['about-desc']}>I hope you will enjoy it with me. Have fun! </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
