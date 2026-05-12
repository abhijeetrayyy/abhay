<?php
/**
 * Main Template File
 * For pages using Elementor
 */

get_header();
?>

<main id="main-content" class="main-content">
  <?php
  while (have_posts()) :
    the_post();
    the_content();
  endwhile;
  ?>
</main>

<?php get_footer(); ?>
