const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, InspectorControls, ColorPalette } = wp.editor; //Step 1
const { Button, PanelBody } = wp.components;
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

registerBlockType("ga/testimonial", {
  title: "GA Testimonial",
  icon: { src: Logo },
  category: "gourmet-artist",
  attributes: {
    testimonialText: {
      type: "string",
      source: "html",
      selector: ".testimonial-block blockquote"
    },
    testimonialName: {
      type: "string",
      source: "html",
      selector: ".testimonial-info p"
    },
    testmonialImage: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".testimonial-info img"
    },
    testimonialColor: {
      type: "string"
    }
  },

  edit: props => {
    //Extract contents from attributes
    const {
      attributes: {
        testimonialText,
        testimonialName,
        testmonialImage,
        testimonialColor
      },
      setAttributes
    } = props;

    //Reads the text from the testimonial
    const onChangeTestimonialText = newText => {
      setAttributes({ testimonialText: newText });
    };

    const onChangeTestimonialName = personName => {
      setAttributes({ testimonialName: personName });
    };

    //Access selected image
    const onSelectImage = newImage => {
      setAttributes({ testmonialImage: newImage.sizes.medium.url });
    };

    const onChangeTestimonialColor = newColor => {
      setAttributes({ testimonialColor: newColor });
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Color Options">
            <div className="components-based-control">
              <div className="components-based-control__field">
                <label className="components=based-control__label">
                  Name person's color and line
                </label>
                <ColorPalette onChange={onChangeTestimonialColor} />
              </div>
            </div>
          </PanelBody>
        </InspectorControls>
        <div
          className="testimonial-block"
          style={{ borderColor: testimonialColor }}
        >
          <blockquote>
            <RichText
              onChange={onChangeTestimonialText}
              value={testimonialText}
            />
          </blockquote>
          <div className="testimonial-info">
            <img src={testmonialImage} />
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              render={({ open }) => {
                return <Button onClick={open}>Open Media Library</Button>;
              }}
            />
            <p>
              <RichText
                placeholder="Add the person for testimonial"
                onChange={onChangeTestimonialName}
                value={testimonialName}
                style={{ color: testimonialColor }}
              />
            </p>
          </div>
        </div>
      </>
    );
  },

  save: props => {
    //Extract the contents from props
    const {
      attributes: {
        testimonialText,
        testimonialName,
        testmonialImage,
        testimonialColor
      },
      setAttributes
    } = props;

    return (
      <div
        className="testimonial-block"
        style={{ borderColor: testimonialColor }}
      >
        <blockquote>
          <RichText.Content value={testimonialText} />
        </blockquote>
        <div className="testimonial-info">
          <img src={testmonialImage} />
          <p style={{ color: testimonialColor }}>
            <RichText.Content value={testimonialName} />
          </p>
        </div>
      </div>
    );
  }
});
