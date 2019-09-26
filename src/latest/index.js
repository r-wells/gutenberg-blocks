const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
import { ReactComponent as Logo } from "../ga-logo.svg";

/**
 * Steps to make a Gutenberg Block Editable / Dynamic
 * 1) Import the component you want to use
 * 2) Place the component where you want to use it
 * 3) Create a function to read the contents
 * 4) Register an Attribute
 * 5) Extract the contents from props
 * 6) Save the contents in this attribute
 * 7) Use the attribute on save()
 */

registerBlockType("ga/latest", {
  title: "GA Latest Recipes",
  icon: { src: Logo },
  category: "gourmet-artist",

  edit: withSelect(select => {
    return {
      //Send GET request to WP Rest API
      posts: select("core").getEntityRecords("postType", "recipes", {
        per_page: 3
      })
    };
  })(({ posts }) => {
    if (!posts) {
      return "Loading...";
    }

    if (posts && posts.length === 0) {
      return "There are no posts to return";
    }

    return (
      <>
        <h1>Latest Recipes Block</h1>
        <ul className="latest-recipes container">
          <li>
            <img src="img/recipe1.jpg" />
            <div className="content">
              <h2>Delicious Breakfast in 10 min</h2>
              <p>
                Morbi eget iaculis tellus. Vestibulum eu leo odio. Pellentesque
                lacus magna, suscipit sed semper sed, tempor vitae nisi. Vivamus
                venenatis, lacus in ultricies pharetra, odio mi sagittis ipsum,
                ac maximus turpis mi eu mauris.{" "}
              </p>
              <a href="#" className="button">
                Read More
              </a>
            </div>
          </li>
          <li>
            <img src="img/recipe2.jpg" />
            <div className="content">
              <h2>Pancakes for your next meeting</h2>
              <p>
                Morbi eget iaculis tellus. Vestibulum eu leo odio. Pellentesque
                lacus magna, suscipit sed semper sed, tempor vitae nisi. Vivamus
                venenatis, lacus in ultricies pharetra, odio mi sagittis ipsum,
                ac maximus turpis mi eu mauris.{" "}
              </p>
              <a href="#" className="button">
                Read More
              </a>
            </div>
          </li>
          <li>
            <img src="img/recipe3.jpg" />
            <div className="content">
              <h2>Amazing barbecue at home</h2>
              <p>
                Morbi eget iaculis tellus. Vestibulum eu leo odio. Pellentesque
                lacus magna, suscipit sed semper sed, tempor vitae nisi. Vivamus
                venenatis, lacus in ultricies pharetra, odio mi sagittis ipsum,
                ac maximus turpis mi eu mauris.{" "}
              </p>
              <a href="#" className="button">
                Read More
              </a>
            </div>
          </li>
        </ul>
      </>
    );
  }),

  save: () => {
    return null;
  }
});
