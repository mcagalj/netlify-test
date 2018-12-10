import React, { Component } from "react";
import Fuse from "fuse.js";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./styles.module.css";
import SearchIcon from "./SearchIcon";

class FilteredProducts extends Component {
  state = {
    search: ""
  };

  constructor(props) {
    super(props);

    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["markdown.excerpt", "markdown.frontmatter.title"]
    };
    this.fuse = new Fuse(props.posts.markdowns, options);
  }

  render() {
    const { posts } = this.props;
    const { search } = this.state;

    let searchResults = posts.markdowns;

    if (search.length > 0) {
      searchResults = this.fuse.search(search);
    }

    const postsIndex = searchResults.map(({ markdown }) => {
      const { id } = markdown;
      const { title, slug, image } = markdown.frontmatter;

      return (
        <div key={id} className={styles.Wrapper}>
          <Link to={`blog/${slug}`} className={styles.Link}>
            <h3 className={styles.Title}>{title}</h3>
            <Img fluid={image.childImageSharp.fluid} />
          </Link>
        </div>
      );
    });

    return (
      <>
        <div
          style={{
            display: "flex",
            paddingTop: "1rem",
            marginBottom: "1rem",
            borderBottom: "1px solid var(--color-grey)"
          }}
        >
          <label
            className={styles.Label}
            style={{ position: "relative", marginLeft: "auto" }}
          >
            <input
              className={styles.Input}
              type="search"
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
              placeholder="Search posts"
            />
            <SearchIcon className={styles.SearchIcon} />
          </label>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {postsIndex}
        </div>
      </>
    );
  }
}

export default FilteredProducts;
