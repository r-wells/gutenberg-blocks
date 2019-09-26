const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, BlockControls, AlignmentToolbar } = wp.editor; //Step 1
const { IconButton } = wp.components;
import { ReactComponent as Logo } from "../ga-logo.svg";

registerBlockType("ga/hero", {
  title: "GA Hero",
  icon: { src: Logo },
  category: "gourmet-artist",
  heroTitle: {
    type: "string",
    source: "html",
    selector: ".hero-block h1"
  },
  heroText: {
    type: "string",
    source: "html",
    selector: ".hero-block p"
  },
  heroImage: {
    type: "string",
    source: "html",
    selector: ".hero-block p"
  },
  alignContent: {
    type: "string",
    default: "center"
  },
  supports: {
    align: ["wide", "full"]
  },

  edit: props => {
    //Register attributes
    const {
      attributes: { heroTitle, heroText, heroImage, alignContent },
      setAttributes
    } = props;

    //Reads the contents from the title
    const onChangeTitle = newTitle => {
      setAttributes({ heroTitle: newTitle });
    };

    const onChangeText = newText => {
      setAttributes({ heroText: newText });
    };

    const onSelectImage = newImage => {
      setAttributes({ heroImage: newImage.sizes.full.url });
    };

    const onChangeAlignment = newAlignment => {
      setAttributes({ alignContent: newAlignment });
    };

    return (
      <div
        className="hero-block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <BlockControls>
          <AlignmentToolbar onChange={onChangeAlignment} />
        </BlockControls>
        <MediaUpload
          onSelect={onSelectImage}
          type="image"
          render={({ open }) => {
            return <IconButton onClick={open}>Open Media Library</IconButton>;
          }}
        />
        <h1>
          <RichText
            placeholder="Add the title"
            onChange={onChangeTitle}
            value={heroTitle}
            style={{ textAlign: alignContent }}
          />
        </h1>
        <p>
          <RichText
            placeholder="Add the tagline"
            onChange={onChangeText}
            value={heroText}
            style={{ textAlign: alignContent }}
          />
        </p>
      </div>
    );
  },

  save: props => {
    const {
      attributes: { heroTitle, heroText, heroImage, alignContent }
    } = props;

    return (
      <div
        className="hero-block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 style={{ textAlign: alignContent }}>
          <RichText.Content value={heroTitle} />
        </h1>
        <p style={{ textAlign: alignContent }}>
          <RichText.Content value={heroText} />
        </p>
      </div>
    );
  }
});
