import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/pages/naslovna.module.css";
import FilteredPosts from "components/FilteredPosts";

export default ({ data: { naslovna, posts } }) => {
  const carousel = [1, 2, 3, 4].map(element => (
    <div key={element} className={styles.Carousel}>
      <div>{element}</div>
    </div>
  ));

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      <SEO keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.ResponsiveSmall}>
        <Slider {...sliderConfig} slidesToShow={1}>
          {carousel}
        </Slider>
      </div>

      <div className={styles.ResponsiveNormal}>
        <Slider {...sliderConfig} slidesToShow={2}>
          {carousel}
        </Slider>
      </div>

      <div
        style={{ marginTop: "3rem" }}
        dangerouslySetInnerHTML={{ __html: naslovna.html }}
      />

      <FilteredPosts posts={posts} />
    </>
  );
};

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      markdowns: edges {
        markdown: node {
          id
          excerpt(pruneLength: 600)
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  maxHeight: 260
                  cropFocus: NORTH
                  traceSVG: { color: "#663399" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
