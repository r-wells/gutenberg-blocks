const { __ } = wp.i18n;
const { registerBlockType, InspectorControls } = wp.blocks;
// const { RichText } = wp.editor;
// const { withSelect } = wp.data;
const { SelectControl } = wp.components;
const { Component } = wp.element;
import { ReactComponent as Logo } from "../ga-logo.svg";
import MySelectPosts from "./MySelectPosts";

registerBlockType("ga/select-post", {
  title: "Select Post",
  icon: { src: Logo },
  category: "gourmet-artist",

  attributes: {
    content: {
      type: "array",
      source: "children",
      selector: "p"
    },
    title: {
      type: "string",
      selector: "h2"
    },
    link: {
      type: "string",
      selector: "a"
    },
    selectedPost: {
      type: "number",
      default: 0
    }
  },

  edit: MySelectPosts,

  save: props => {
    return (
      <div className={props.className}>
        <div className="post">
          <a href={props.attributes.link}>
            <h2
              dangerouslySetInnerHTML={{ __html: props.attributes.title }}
            ></h2>
          </a>
          <p dangerouslySetInnerHTML={{ __html: props.attributes.content }}></p>
        </div>
      </div>
    );
  }
});
