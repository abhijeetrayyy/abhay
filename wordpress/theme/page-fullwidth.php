<?php
/**
 * Template Name: Full Width - Immersive
 * No sidebar, full width for Elementor pages
 */

get_header();
?>

<main id="main-content" class="main-content full-width">
  <?php
  while (have_posts()) :
    the_post();
    the_content();
  endwhile;
  ?>
</main>

<style>
.main-content.full-width {
  padding: 0;
  max-width: 100%;
}
</style>

<?php get_footer(); ?>
