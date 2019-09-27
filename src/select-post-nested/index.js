const { __ } = wp.i18n;
const { registerBlockType, InspectorControls } = wp.blocks;
const { InnerBlocks } = wp.editor;
// const { withSelect } = wp.data;
const { SelectControl } = wp.components;
const { Component } = wp.element;
import { ReactComponent as Logo } from "../ga-logo.svg";

registerBlockType("ga/select-post-nested", {
  title: "Select Post Nested",
  icon: { src: Logo },
  category: "gourmet-artist",

  edit: props => {
    // return "engage";
    const { className } = props;
    return [
      <div className={className}>
        <InnerBlocks allowedBlocks={["ga/select-post"]} />
      </div>
    ];
  },

  save: props => {
    return (
      <div className={props.className}>
        <InnerBlocks.Content />
      </div>
    );
  }
});
