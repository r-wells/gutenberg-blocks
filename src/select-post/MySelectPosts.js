const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { SelectControl, PanelBody } = wp.components;
const { Component } = wp.element;

class MySelectPosts extends Component {
  //Method for setting the initial state
  static getInitialState(selectedPost) {
    return {
      posts: [],
      selectedPost: selectedPost,
      post: {}
    };
  }

  constructor() {
    super(...arguments);
    this.state = this.constructor.getInitialState(
      this.props.attributes.selectedPost
    );
    //Binding
    this.getOptions = this.getOptions.bind(this);
    //Load the posts
    this.getOptions();

    this.onChangeSelectPost = this.onChangeSelectPost.bind(this);
  }

  getOptions() {
    return new wp.api.collections.Posts().fetch().then(posts => {
      if (posts && 0 !== this.state.selectedPost) {
        //If we have a selected post, find that post and return it
        const post = posts.find(item => {
          return item.id == this.state.selectedPost;
        });
        this.setState({ post, posts });
      } else {
        this.setState({ posts });
      }
    });
  }

  onChangeSelectPost(value) {
    //Find the post
    const post = this.state.posts.find(item => item.id === parseInt(value));
    console.log(value);
    //Set the state
    this.setState({ selectedPost: parseInt(value), post });
    //set the attributes
    this.props.setAttributes({
      selectedPost: parseInt(value),
      title: post.title.rendered,
      content: post.excerpt.rendered,
      link: post.link
    });
  }

  render() {
    //Options to hold all the loaded posts
    let options = [{ value: 0, label: __("Select a post") }];
    let output = __("Loading Posts");
    this.props.className += " loading";
    if (this.state.posts.length > 0) {
      const loading = __("We have %d posts. Choose one.");
      output = loading.replace("%d", this.state.posts.length);
      this.state.posts.forEach(post => {
        options.push({ value: post.id, label: post.title.rendered });
      });
    } else {
      output = __("No posts found. Please create some first");
    }
    // Checking if we have anything in the object
    if (this.state.post.hasOwnProperty("title")) {
      output = (
        <div className="post">
          <h2
            dangerouslySetInnerHTML={{
              __html: this.state.post.title.rendered
            }}
          ></h2>
          <p
            dangerouslySetInnerHTML={{
              __html: this.state.post.excerpt.rendered
            }}
          ></p>
        </div>
      );
      this.props.className += " has-post";
    } else {
      this.props.className += " no-post";
    }
    return [
      //If we are focued on this block, create the inspector controls
      !!this.props.isSelected && (
        <InspectorControls>
          <SelectControl
            onChange={this.onChangeSelectPost}
            value={this.props.attributes.selectedPost}
            label={__("Select a post")}
            options={options}
          />
        </InspectorControls>
      ),
      <>
        <div className={this.props.className}>{output}</div>
      </>
    ];
  }
}

export default MySelectPosts;
