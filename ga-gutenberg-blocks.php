<?php
/**
 * Plugin Name: GA Gutenberg Blocks
 */

//Prevent execution
if(!defined('ABSPATH')) exit;

/**Register block & css */
add_action('init', 'ga_register_gutenberg_blocks');
function ga_register_gutenberg_blocks() {
    /**Check if Gutenberg is installed */
    if(!function_exists('register_block_type')) {
        return;
    }

    //Register the Block editor script
    wp_register_script(
        'ga-editor-script',
        plugins_url('build/index.js', __FILE__), //url to file
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-api', 'wp-components'), //dependencies
        filemtime( plugin_dir_path(__FILE__) . 'build/index.js' ) //version
    );

    // Gutenberg Editor CSS (backend)
    wp_register_style(
        'ga-editor-style', //name
        plugins_url('build/editor.css', __FILE__),//file
        array(),
        filemtime( plugin_dir_path(__FILE__) . 'build/editor.css' ) //version
    );

    //Frontend stylesheet
    wp_register_style(
        'ga-frontend-style',
        plugins_url('build/style.css', __FILE__),//file
        array(),
        filemtime( plugin_dir_path(__FILE__) . 'build/style.css' ) //version        
    );

    //Array of blocks
    $blocks = array(
        'ga/testimonial',
        'ga/hero',
        'ga/imagetext',
        'ga/select-post'
    );

    //Add the blocks and the stylesheets
    foreach($blocks as $block) {
        register_block_type( $block, array(
            'editor_script' => 'ga-editor-script',
            'editor_style' => 'ga-editor-style',
            'style' => 'ga-frontend-style'
        ) );
    }

    //Enqueue the Dynamic block (latest recipes)
    register_block_type('ga/latest', array(
        'editor_script' => 'ga-editor-script',
        'editor_style' => 'ga-editor-style',
        'style' => 'ga-frontend-style',
        'render_callback' => 'ga_latest_recipes_block'
    ));
}

/**Custom Categories */
add_filter('block_categories', 'ga_new_gutenberg_category', 10, 2);
function ga_new_gutenberg_category( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'gourmet-artist',
                'title' => 'Gourmet Artist',
                'icon' => 'awards'
            ),
        )
        );
}

//Callback displaying 3 latest recipes
function ga_latest_recipes_block() {
    global $post;

    //Build the query
    $recipes = wp_get_recent_posts(array(
        'post_type' => 'recipes',
        'numberposts' => 3,
        'post_status' => 'publish'
    ));

    //Check if the posts were returned
    if(count($recipes) == 0) {
        return 'There are no recent recipes';
    }

    //Response that is going to be rendered
    $body = '';
    $body .= '<h1>Latest Recipes Block</h1>';
    $body .= '<ul class="latest-recipes container">';

    foreach($recipes as $recipe) {
        //Get the post object
        $post = get_post($recipe['ID']);
        setup_postdata( $post );

        //Build the template
        $body .= sprintf(
            '<li>
                %1$s
                <div class="content">
                    <h2>%2$s</h2>
                    <p>
                        %3$s
                    </p>
                    <a href"=%4$s" class="button">
                    Read More
                    </a>
                </div>
            </li>',
            get_the_post_thumbnail( $post ),
            esc_html(get_the_title($post)),
            esc_html(wp_trim_words(get_the_content($post), 30)),
            esc_url(get_the_permalink($post))
        );
        wp_reset_postdata(  );
    }//end foreach
    $body .= '</ul>';
    return $body;
}

//Adds the featured image url to WP Rest API response
add_action('rest_api_init', 'ga_rest_api_image');
function ga_rest_api_image() {
    register_rest_field( 'recipes', 'recipe_image', array(
        'get_callback' => 'ga_get_featured_image',
        'update_callback' => null,
        'schema' => null
    ) );
}

function ga_get_featured_image($object, $field_name, $request) {
    if($object['featured_media']) {
        $image = wp_get_attachment_image_src($object['featured_media'], 'medium', false);
        return $image[0]; //0 is the url for image, 1 = width, 2 = height, 3 = if it was found
    }
    return false;
}