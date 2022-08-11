<?php
/**
 * CCEL API endpoints.
 *
 * @since 1.0.4
 * @package ubc_ccel
 */

namespace UBC\CCEL;

/**
 * Class to create different endpoints for the fitering system.
 */
class CCEL_Api {

	/**
	 * Actions and filters.
	 *
	 * @since    1.0.4
	 */
	public function __construct() {

		// Route for getting aligned learning outcomes for specific themes.
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'ccel/v1',
					'/learning-outcomes-themes/(?P<id>\d+)',
					array(
						'methods'             => 'GET',
						'callback'            => array( $this, 'get_aligned_learning_outcomes' ),
						'permission_callback' => function () {
							return true;
						},
					)
				);
			}
		);

		// Route for getting learning outcomes that taught by specific lessons.
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'ccel/v1',
					'/learning-outcomes-lessons/(?P<id>\d+)',
					array(
						'methods'             => 'GET',
						'callback'            => array( $this, 'get_lo_lessons' ),
						'permission_callback' => function () {
							return true;
						},
					)
				);
			}
		);
	}

	/**
	 * Callback function for aligned-learning-outcomes route.
	 *
	 * @param array $data parameters passed in.
	 * @return array a list of lessons.
	 */
	public function get_aligned_learning_outcomes( $data ) {
		$posts = p2p_type( 'learning_outcome_theme' )->get_connected( (int) $data['id'] )->posts;
		return $this->retrieve_post_tags( $posts, 'ccel_lo_tag' );
	}

	/**
	 * Callback function for getting learning outcomes that taught by specific lessons.
	 *
	 * @param array $data parameters passed in.
	 * @return array a list of learning outcomes.
	 */
	public function get_lo_lessons( $data ) {
		$posts = p2p_type( 'learning_outcome_lesson' )->get_connected( (int) $data['id'] )->posts;
		return $this->retrieve_post_tags( $posts, 'ccel_lesson_tag' );
	}

	private function retrieve_post_tags( $posts, $tax_name ) {
		return array_map(
			function( $post ) use ( $tax_name ) {
				$terms = get_the_terms( $post, $tax_name);

				$post->tags = ! $terms ? array() : array_map(
					function( $term ) {
						return $term->name;
					},
					$terms
				);

				return $post;
			},
			$posts
		);
	}
}

new CCEL_Api();
