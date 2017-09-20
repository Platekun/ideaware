import React, { Component } from 'react';
import SearchVideo from '../SearchVideo';
import VideoList from '../VideoList';
import Wrapper from '../presentational/Wrapper';
import search from 'youtube-search';
import _ from 'lodash';
import axios from 'axios';
import { YOUTUBE_API_KEY, CATEGORIES_RESOURCE } from '../../constants';

const SEARCH_SETTINGS = { maxResults: 12, key: YOUTUBE_API_KEY, type: 'video' };

export default class VideoCatalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: undefined,
      categories: [],
      selectedCategory: undefined,
      searchTerm: ''
    };

    this.searchVideos = _.debounce(this.searchVideos.bind(this), 600);
    this.selectCategory = this.selectCategory.bind(this);
  }

  componentDidMount() {
    axios.get(CATEGORIES_RESOURCE)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          categories: res.data.items,
          selectedCategory: res.data.items[0].id
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  selectCategory(selectedCategory) {
    const hasInputEmpty = !this.state.searchTerm;
    const selectedANewCategory = selectedCategory !== this.state.selectedCategory;

    if (hasInputEmpty) {
      this.setState((prevState) => ({ ...prevState, selectedCategory }));
    } else if (selectedANewCategory) {
      this.searchVideos(this.state.searchTerm, selectedCategory);
    }
  }

  searchVideos(searchTerm, selectedCategory) {
    this.setState((prevState) => ({ ...prevState, searchTerm }));

    if (searchTerm) {
      search(searchTerm, { ...SEARCH_SETTINGS, videoCategoryId: selectedCategory }, (err, results) => {
        if (err) {
          console.log(err);
          this.setState((prevState) => ({ ...prevState, videos: [], selectedCategory }));
        } else {
          this.setState((prevState) => ({ ...prevState, videos: results, selectedCategory }));
        }
      });
    }
  }

  render() {
    const { searchVideos, selectCategory } = this;
    const { videos, categories, selectedCategory } = this.state;

    return (
      <section className="video-catalog">
        <h2 hidden>Video Catalog</h2>
        <Wrapper>
          <SearchVideo
            categories={categories}
            searchVideos={searchVideos}
            selectedCategory={selectedCategory}
            selectCategory={selectCategory}
          />
          <VideoList videos={videos} />
        </Wrapper>
      </section>
    );
  }
}
