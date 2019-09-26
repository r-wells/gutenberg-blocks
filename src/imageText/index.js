const { registerBlockType } = wp.blocks;
const {
  RichText,
  MediaUpload,
  BlockControls,
  AlignmentToolbar,
  URLInputButton
} = wp.editor; //Step 1
const { IconButton } = wp.components;
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

registerBlockType("ga/imagetext", {
  title: "GA Image with text",
  icon: { src: Logo },
  category: "gourmet-artist",
  attributes: {
    appTitle: {
      source: "html",
      type: "string",
      selector: ".content h1"
    },
    appText: {
      source: "html",
      type: "string",
      selector: ".content p"
    },
    appImage: {
      source: "attribute",
      type: "string",
      attribute: "src",
      selector: ".image img"
    },
    appURL: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".content a"
    },
    appAlignment: {
      type: "string",
      default: "center"
    }
  },

  edit: props => {
    const {
      attributes: { appTitle, appText, appImage, appURL, appAlignment },
      setAttributes
    } = props;

    const onChangeTitle = newTitle => {
      setAttributes({ appTitle: newTitle });
    };

    const onChangeText = newText => {
      setAttributes({ appText: newText });
    };

    const onSelectImage = newImage => {
      setAttributes({ appImage: newImage.sizes.full.url });
    };

    const onChangeAppURL = newURL => {
      setAttributes({ appURL: newURL });
    };

    const onChangeAlignContent = newAlignment => {
      setAttributes({ appAlignment: newAlignment });
    };

    return (
      <div className="image-text-block">
        <BlockControls>
          <AlignmentToolbar onChange={onChangeAlignContent} />
        </BlockControls>
        <div className="container">
          <div className="content" style={{ textAlign: appAlignment }}>
            <h1>
              <RichText
                placeholder="Add the Title"
                onChange={onChangeTitle}
                value={appTitle}
              />
            </h1>
            <p>
              <RichText
                placeholder="Add the Text"
                onChange={onChangeText}
                value={appText}
              />
            </p>
            <a
              href={appURL}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <URLInputButton onChange={onChangeAppURL} url={appURL} />
          </div>

          <div className="image">
            <img src={appImage} />
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              value={appImage}
              render={({ open }) => (
                <IconButton
                  onClick={open}
                  icon="format-image"
                  showToolTip="true"
                  label="Add Image"
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  },

  styles: [
    {
      name: "default",
      label: "Blue (Default)",
      isDefault: true
    },
    {
      name: "green",
      label: "Green"
    },
    {
      name: "pink",
      label: "Pink"
    }
  ],

  save: props => {
    const {
      attributes: { appTitle, appText, appImage, appURL, appAlignment }
    } = props;

    return (
      <div className="image-text-block">
        <div className="container">
          <div className="content" style={{ textAlign: appAlignment }}>
            <h1>
              <RichText.Content value={appTitle} />
            </h1>
            <p>
              <RichText.Content value={appText} />
            </p>
            <a
              href={appURL}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>

          <div className="image">
            <img src={appImage} />
          </div>
        </div>
      </div>
    );
  }
});
