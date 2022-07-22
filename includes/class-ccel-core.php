<?php
/**
 * CCEL Core class.
 *
 * @since 1.0.0
 * @package ubc_ccel
 */

namespace UBC\CCEL;

/**
 * Class to initiate functionalities that powers the site
 */
class CCEL_Core {

	/**
	 * Actions and filters to set up the project.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_filter_assets' ) );
		add_action( 'init', array( $this, 'register_post_type_and_taxonomies' ) );
		add_action( 'p2p_init', array( $this, 'create_post_connection_types' ) );

		// Because this is an indeterminate post type, the shortcode direction will always be 'from'
		// and the p2p plugin did not provide a shortcode to list 'to' posts.
		add_shortcode( 'p2p_connected_to', array( $this, 'p2p_connected_to' ) );
	}

	/**
	 * Enqueue assets required for the filering system to the homepage.
	 *
	 * @since   1.0.0
	 */
	public function enqueue_filter_assets() {

		if ( ! is_front_page() ) {
			return;
		}

		wp_enqueue_script(
			'ubc-ccel-filter-script',
			UBC_CCEL_PLUGIN_URL . 'dist/filter.js',
			array(),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/filter.js' ),
			true
		);

		wp_register_style(
			'ubc-ccel-filter-styles',
			UBC_CCEL_PLUGIN_URL . 'dist/filter.css',
			array(),
			filemtime( UBC_CCEL_PLUGIN_DIR . 'dist/filter.css' )
		);
		wp_enqueue_style( 'ubc-ccel-filter-styles' );
	}//end enqueue_filter_assets()

	/**
	 * Register custom post types and custom taxonomies below.
	 * 1. custom post types such as theme, learning outcome, and lesson
	 * 2. custom taxonomies for each post type. Un-hierachical
	 *
	 * @return void
	 */
	public function register_post_type_and_taxonomies() {

		$theme_labels = array(
			'name'               => _x( 'Themes', 'Post Type General Name', 'ubc_ccel' ),
			'singular_name'      => _x( 'Theme', 'Post Type Singular Name', 'ubc_ccel' ),
			'menu_name'          => __( 'Themes', 'ubc_ccel' ),
			'parent_item_colon'  => __( 'Parent Theme:', 'ubc_ccel' ),
			'all_items'          => __( 'All Themes', 'ubc_ccel' ),
			'view_item'          => __( 'View Theme', 'ubc_ccel' ),
			'add_new_item'       => __( 'Add New Theme', 'ubc_ccel' ),
			'add_new'            => __( 'Add New', 'ubc_ccel' ),
			'edit_item'          => __( 'Edit Theme', 'ubc_ccel' ),
			'update_item'        => __( 'Update Theme', 'ubc_ccel' ),
			'search_items'       => __( 'Search Theme', 'ubc_ccel' ),
			'not_found'          => __( 'Not found', 'ubc_ccel' ),
			'not_found_in_trash' => __( 'Not found in Trash', 'ubc_ccel' ),
		);

		$learning_outcome_labels = array(
			'name'               => _x( 'Learning Outcomes', 'Post Type General Name', 'ubc_ccel' ),
			'singular_name'      => _x( 'Learning Outcome', 'Post Type Singular Name', 'ubc_ccel' ),
			'menu_name'          => __( 'Learning Outcomes', 'ubc_ccel' ),
			'parent_item_colon'  => __( 'Parent Learning Outcome:', 'ubc_ccel' ),
			'all_items'          => __( 'All Learning Outcomes', 'ubc_ccel' ),
			'view_item'          => __( 'View Learning Outcome', 'ubc_ccel' ),
			'add_new_item'       => __( 'Add New Learning Outcome', 'ubc_ccel' ),
			'add_new'            => __( 'Add New', 'ubc_ccel' ),
			'edit_item'          => __( 'Edit Learning Outcome', 'ubc_ccel' ),
			'update_item'        => __( 'Update Learning Outcome', 'ubc_ccel' ),
			'search_items'       => __( 'Search Learning Outcome', 'ubc_ccel' ),
			'not_found'          => __( 'Not found', 'ubc_ccel' ),
			'not_found_in_trash' => __( 'Not found in Trash', 'ubc_ccel' ),
		);

		$lesson_labels = array(
			'name'               => _x( 'Lessons', 'Post Type General Name', 'ubc_ccel' ),
			'singular_name'      => _x( 'Lesson', 'Post Type Singular Name', 'ubc_ccel' ),
			'menu_name'          => __( 'Lessons', 'ubc_ccel' ),
			'parent_item_colon'  => __( 'Parent Lesson:', 'ubc_ccel' ),
			'all_items'          => __( 'All Lessons', 'ubc_ccel' ),
			'view_item'          => __( 'View Lesson', 'ubc_ccel' ),
			'add_new_item'       => __( 'Add New Lesson', 'ubc_ccel' ),
			'add_new'            => __( 'Add New', 'ubc_ccel' ),
			'edit_item'          => __( 'Edit Lesson', 'ubc_ccel' ),
			'update_item'        => __( 'Update Lesson', 'ubc_ccel' ),
			'search_items'       => __( 'Search Lesson', 'ubc_ccel' ),
			'not_found'          => __( 'Not found', 'ubc_ccel' ),
			'not_found_in_trash' => __( 'Not found in Trash', 'ubc_ccel' ),
		);

		register_post_type(
			'ccel_theme',
			array(
				'labels'       => $theme_labels,
				'public'       => true,
				'menu_icon'    => 'dashicons-category',
				'supports'     => array( 'editor', 'thumbnail', 'title', 'excerpt', 'revision' ),
				'show_in_rest' => true,
				'rewrite'      => array(
					'slug' => 'themes',
				),
			)
		);

		register_post_type(
			'ccel_lo',
			array(
				'labels'       => $learning_outcome_labels,
				'public'       => true,
				'menu_icon'    => 'dashicons-category',
				'supports'     => array( 'editor', 'thumbnail', 'title', 'excerpt', 'revision' ),
				'show_in_rest' => true,
				'rewrite'      => array(
					'slug' => 'learning-outcomes',
				),
			)
		);

		register_post_type(
			'ccel_lesson',
			array(
				'labels'       => $lesson_labels,
				'public'       => true,
				'menu_icon'    => 'dashicons-category',
				'supports'     => array( 'editor', 'thumbnail', 'title', 'excerpt', 'revision' ),
				'show_in_rest' => true,
				'rewrite'      => array(
					'slug' => 'lessons',
				),
			)
		);

		$tag_labels = array(
			'name'              => _x( 'Tags', 'taxonomy general name', 'ubc_ccel' ),
			'singular_name'     => _x( 'Tag', 'taxonomy singular name', 'ubc_ccel' ),
			'search_items'      => __( 'Search Tags', 'ubc_ccel' ),
			'all_items'         => __( 'All Tags', 'ubc_ccel' ),
			'parent_item'       => __( 'Parent Tag', 'ubc_ccel' ),
			'parent_item_colon' => __( 'Parent Tag:', 'ubc_ccel' ),
			'edit_item'         => __( 'Edit Tag', 'ubc_ccel' ),
			'update_item'       => __( 'Update Tag', 'ubc_ccel' ),
			'add_new_item'      => __( 'Add New Tag', 'ubc_ccel' ),
			'new_item_name'     => __( 'New Tag Name', 'ubc_ccel' ),
			'menu_name'         => __( 'Tag', 'ubc_ccel' ),
		);

		register_taxonomy(
			'ccel_lesson_tag',
			array( 'ccel_lesson' ),
			array(
				'labels'       => $tag_labels,
				'public'       => true,
				'show_in_rest' => true,
				'hierarchical' => true,
			)
		);

		register_taxonomy(
			'ccel_lo_tag',
			array( 'ccel_lo' ),
			array(
				'labels'       => $tag_labels,
				'public'       => true,
				'show_in_rest' => true,
				'hierarchical' => true,
			)
		);

		register_taxonomy(
			'ccel_theme_tag',
			array( 'ccel_theme' ),
			array(
				'labels'       => $tag_labels,
				'public'       => true,
				'show_in_rest' => true,
				'hierarchical' => true,
			)
		);

	}//end register_post_type_and_taxonomies()

	/**
	 * Registered p2p plugin connection types.
	 * 1. Learning Outcome - Learning Outcome
	 * 2. Learning Outcome - Lesson
	 * 3. Learning Outcome - Theme
	 */
	public function create_post_connection_types() {

		p2p_register_connection_type(
			array(
				'name'        => 'learning_outcome_prerequisites',
				'from'        => 'ccel_lo',
				'to'          => 'ccel_lo',
				'title'       => array(
					'from' => __( 'Prerequisites', 'ubc_ccel' ),
					'to'   => __( 'Build Towards', 'ubc_ccel' ),
				),
				'from_labels' => array(
					'singular_name' => __( 'Learning Outcome', 'ubc_ccel' ),
					'search_items'  => __( 'Search Learning Outcome', 'ubc_ccel' ),
					'not_found'     => __( 'No Learning Outcome found.', 'ubc_ccel' ),
					'create'        => __( 'Add Learning Outcomes', 'ubc_ccel' ),
				),
				'to_labels'   => array(
					'singular_name' => __( 'Learning Outcome', 'ubc_ccel' ),
					'search_items'  => __( 'Search Learning Outcome', 'ubc_ccel' ),
					'not_found'     => __( 'No Learning Outcome found.', 'ubc_ccel' ),
					'create'        => __( 'Add Learning Outcomes', 'ubc_ccel' ),
				),
			)
		);

		p2p_register_connection_type(
			array(
				'name'        => 'learning_outcome_lesson',
				'from'        => 'ccel_lo',
				'to'          => 'ccel_lesson',
				'title'       => array(
					'from' => __( 'Achieved by lesson', 'ubc_ccel' ),
					'to'   => __( 'Achieves learning outcome', 'ubc_ccel' ),
				),
				'to_labels'   => array(
					'singular_name' => __( 'Lesson', 'ubc_ccel' ),
					'search_items'  => __( 'Search Lesson', 'ubc_ccel' ),
					'not_found'     => __( 'No Lesson found.', 'ubc_ccel' ),
					'create'        => __( 'Add Lessons', 'ubc_ccel' ),
				),
				'from_labels' => array(
					'singular_name' => __( 'Learning Outcome', 'ubc_ccel' ),
					'search_items'  => __( 'Search Learning Outcome', 'ubc_ccel' ),
					'not_found'     => __( 'No Learning Outcome found.', 'ubc_ccel' ),
					'create'        => __( 'Add Learning Outcomes', 'ubc_ccel' ),
				),
			)
		);

		p2p_register_connection_type(
			array(
				'name'        => 'learning_outcome_theme',
				'from'        => 'ccel_lo',
				'to'          => 'ccel_theme',
				'title'       => array(
					'from' => __( 'Align with themes', 'ubc_ccel' ),
					'to'   => __( 'Align learning outcomes', 'ubc_ccel' ),
				),
				'to_labels'   => array(
					'singular_name' => __( 'Theme', 'ubc_ccel' ),
					'search_items'  => __( 'Search Theme', 'ubc_ccel' ),
					'not_found'     => __( 'No Theme found.', 'ubc_ccel' ),
					'create'        => __( 'Add Themes', 'ubc_ccel' ),
				),
				'from_labels' => array(
					'singular_name' => __( 'Learning Outcome', 'ubc_ccel' ),
					'search_items'  => __( 'Search Learning Outcome', 'ubc_ccel' ),
					'not_found'     => __( 'No Learning Outcome found.', 'ubc_ccel' ),
					'create'        => __( 'Add Learning Outcomes', 'ubc_ccel' ),
				),
			)
		);

		p2p_register_connection_type(
			array(
				'name'       => 'related_lessons',
				'from'       => 'ccel_lesson',
				'to'         => 'ccel_lesson',
				'reciprocal' => true,
				'title'      => __( 'Related Lessons', 'ubc_ccel' ),
				'to_labels'  => array(
					'singular_name' => __( 'Lesson', 'ubc_ccel' ),
					'search_items'  => __( 'Search Lesson', 'ubc_ccel' ),
					'not_found'     => __( 'No Lesson found.', 'ubc_ccel' ),
					'create'        => __( 'Add Lessons', 'ubc_ccel' ),
				),
			)
		);
	}//end create_post_connection_types()

	/**
	 * Because this is an indeterminate post type, the shortcode direction will always be 'from'
	 * p2p plugin does not provide a shortcode to display the posts retrieved from 'to' direction
	 *
	 * @param array $atts attributes passed to shortcode callback.
	 *
	 * @return string HTML output
	 */
	public function p2p_connected_to( $atts ) {
		global $post;

		$attributes = shortcode_atts(
			array(
				'type' => '',
			),
			$atts
		);

		$to_posts = p2p_type( $attributes['type'] )->set_direction( 'to' )->get_connected( $post->ID )->get_posts();

		if ( 0 === count( $to_posts ) ) {
			return;
		}

		$return = '<ul id="' . $attributes['type'] . '_list_to">';
		foreach ( $to_posts as $key => $to_post ) {
			$return .= '<li><a href="' . esc_attr( $to_post->guid ) . '">' . esc_textarea( $to_post->post_title ) . '</li>';
		}
		$return .= '</ul>';

		return $return;
	}//end p2p_connected_to()

}

new CCEL_Core();
