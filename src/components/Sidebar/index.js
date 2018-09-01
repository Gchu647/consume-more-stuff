import React, { Component } from 'react';
import './Sidebar.css';
import Button from '../Button';
import { connect } from 'react-redux';
import { loadCategories } from '../../actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMobileListCollection: document.getElementsByClassName(
        'Sidebar-main-mobile-details'
      )
    };

    this.toggleMobileCategoriesList = this.toggleMobileCategoriesList.bind(this);
  }

  toggleMobileCategoriesList() {
    this.state.mainMobileListCollection[0].classList.contains('hidden')
      ? this.state.mainMobileListCollection[0].classList.remove('hidden')
      : this.state.mainMobileListCollection[0].classList.add('hidden');
  }

  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    return (
      <div className="Sidebar">
        <div className="Sidebar-auth-display">
          <div className="Sidebar-auth-display-options">Messages</div>
          <div className="Sidebar-auth-display-options">Settings</div>
          <Button label="ADD" />
        </div>

        {/* Display for Desktop View: */}
        <div className="Sidebar-main-desktop">
          <div className="Sidebar-main-desktop-home">
            <span>Home</span>
          </div>
          <ul className="Sidebar-main-desktop-list">
            <span>Categories</span>
            {this.props.categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="Sidebar-main-desktop-list-item"
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
          <Button label="ALL" />
        </div>

        {/* Display for Mobile View: */}
        <div
          className="Sidebar-main-mobile"
          onClick={this.toggleMobileCategoriesList}
        >
          <span>Home</span>
          <span>Categories</span>
        </div>
        <div
          className="Sidebar-main-mobile-details hidden"
          onClick={this.toggleMobileCategoriesList}
        >
          <div
            className="Sidebar-main-mobile-details-inner"
            onClick={stopEventPropagation}
          >
            <ul className="Sidebar-main-mobile-details-inner-list">
              {this.props.categories.map((category, index) => {
                return (
                  <li
                    key={index}
                    className="Sidebar-main-mobile-details-inner-list-item"
                  >
                    {category.name}
                  </li>
                );
              })}
            </ul>
            <Button label="ALL" />
          </div>
        </div>
      </div>
    );
  }
}

function stopEventPropagation(event) {
  event.stopPropagation();
}

const mapStateToProps = state => {
  return {
    cards: state.cardsList,
    categories: state.categoriesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCategories: () => {
      dispatch(loadCategories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
