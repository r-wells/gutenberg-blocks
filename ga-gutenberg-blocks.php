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
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), //dependencies
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
        'ga/testimonial'
    );

    //Add the blocks and the stylesheets
    foreach($blocks as $block) {
        register_block_type( $block, array(
            'editor_script' => 'ga-editor-script',
            'editor_style' => 'ga-editor-style',
            'style' => 'ga-frontend-style'
        ) );
    }
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