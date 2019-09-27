const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { withSelect } = wp.data;
const { SelectControl, PanelBody } = wp.components;
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
          {posts.map(post => {
            console.log(post);

            return (
              <li>
                <img src={post.recipe_image} />
                <div className="content">
                  <h2>{post.title.rendered}</h2>
                  <p>
                    <RichText.Content
                      value={post.content.rendered.substring(0, 180)}
                    />
                    {/* <InspectorControls>
                      <SelectControl
                        // onChange={this.onChangeSelectPost}
                        // value={this.props.attributes.selectedPost}
                        label={__("Select a post")}
                        // options={options}
                      />
                    </InspectorControls> */}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }),

  save: () => {
    return null;
  }
});
