import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './SearchVideo.css';

export default class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  handleCategorySelect(evt) {
    const { selectCategory } = this.props;

    const selectedCategory = evt.target.value;
    selectCategory(selectedCategory);
  }

  handleInputChange(evt) {
    const { searchVideos, selectedCategory } = this.props;
    const searchTerm = evt.target.value;

    searchVideos(searchTerm, selectedCategory);
  }

  renderCategories() {
    const { categories } = this.props;

    return categories.map((category) => (
      <option key={uuid()} value={category.id}>
        {category.snippet.title}
      </option>
    ));
  }

  render() {
    const { handleCategorySelect, handleInputChange, renderCategories } = this;
    const { selectedCategory } = this.props;

    return (
      <section className="idea-search">
        <div className="ui right left icon input idea-search__input-box">
          <i className="search icon" />
          <input type="text" placeholder="Search" onChange={handleInputChange} className="idea-search-box__input" />
        </div>
        <div className="idea-search__filter-box">
          <span>Filter By</span>
          <select value={selectedCategory} onChange={handleCategorySelect} className="ui dropdown idea-search-box__filter">
            <option value="-1">Filters</option>
            {renderCategories()}
          </select>
        </div>
      </section>
    );
  }
}

SearchVideo.propTypes = {
  categories: PropTypes.array.isRequired,
  searchVideos: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};
