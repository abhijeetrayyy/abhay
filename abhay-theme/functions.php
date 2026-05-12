<?php
/**
 * Abhay Oyun Theme Functions
 * Clean, minimal, no conflicts
 */

// ═══════════════════════════════════════════════════════════════
// ENQUEUE SCRIPTS & STYLES
// ═══════════════════════════════════════════════════════════════

function abhay_enqueue_assets() {
  // Google Fonts - Cinzel + Lato
  wp_enqueue_style(
    'abhay-fonts',
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400;600;700&display=swap',
    array(),
    null
  );

  // Main stylesheet
  wp_enqueue_style(
    'abhay-style',
    get_stylesheet_uri(),
    array('abhay-fonts'),
    '1.0'
  );
}
add_action('wp_enqueue_scripts', 'abhay_enqueue_assets');

// ═══════════════════════════════════════════════════════════════
// REMOVE PARENT THEME CONFLICTS
// ═══════════════════════════════════════════════════════════════

// Remove Emoji styles from theme
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Remove WordPress global styles that conflict
function abhay_dequeue_conflicts() {
  // Target common theme conflicts
  $theme = wp_get_theme();

  // If using Elementor, ensure its styles load properly
  if (defined('ELEMENTOR_VERSION')) {
    wp_enqueue_style(
      'elementor-frontend',
      ELEMENTOR_ASSETS_URL . 'css/frontend.min.css',
      array(),
      ELEMENTOR_VERSION
    );
  }
}
add_action('wp_enqueue_scripts', 'abhay_dequeue_conflicts', 100);

// ═══════════════════════════════════════════════════════════════
// THEME SETUP
// ═══════════════════════════════════════════════════════════════

function abhay_theme_setup() {
  // Add default posts and comments RSS feed links to head
  add_theme_support('automatic-feed-links');

  // Let WordPress manage the document title
  add_theme_support('title-tag');

  // Enable support for Post Thumbnails
  add_theme_support('post-thumbnails');

  // Switch default core markup to output valid HTML5
  add_theme_support('html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
    'style',
    'script',
  ));

  // Add support for responsive embedded content
  add_theme_support('responsive-embeds');

  // Add support for editor styles
  add_theme_support('editor-styles');

  // Add support for wide alignment
  add_theme_support('align-wide');
}
add_action('after_setup_theme', 'abhay_theme_setup');

// ═══════════════════════════════════════════════════════════════
// REMOVE ADMIN BAR EXTRA PADDING
// ═══════════════════════════════════════════════════════════════

function abhay_admin_bar_padding() {
  if (is_admin_bar_showing()) { ?>
    <style>
      body.admin-bar {
        margin-top: -32px;
        padding-top: 32px;
      }
      #wpadminbar {
        position: fixed !important;
      }
    </style>
  <?php }
}
add_action('wp_head', 'abhay_admin_bar_padding');

// ═══════════════════════════════════════════════════════════════
// DISABLE ELEMENTOR GLOBAL COLORS & TYPOGRAPHY
// ═══════════════════════════════════════════════════════════════

function abhay_disable_elementor_globals() {
  if (did_action('elementor/loaded')) {
    // Disable default Elementor global colors
    update_option('elementor_disable_color_schemes', 'yes');

    // Disable default Elementor typography
    update_option('elementor_disable_typography_schemes', 'yes');

    // Enable full-width content
    update_option('elementor_container_width', '1400');

    // Disable default colors in the editor
    add_filter('elementor/utils/is_color_picker_enabled', '__return_false');
  }
}
add_action('init', 'abhay_disable_elementor_globals');
