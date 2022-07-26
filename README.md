# UBC CCEL
New website project for the SIL curriculum.

## Shortcodes
- Objectives prerequisites: [p2p_connected type=learning_objective_prerequisites]
- Objectives build towards: [p2p_connected_to type=learning_objective_prerequisites]
- Objectives achieved by lessons: [p2p_connected type=learning_objective_lesson]
- Objectives align with themes: [p2p_connected type=learning_objective_theme]

## Local Environment
Install node packages
`npm install`

Start building JS and CSS and watching file change for development
`npm start`

Build JS and CSS for production
`npm build`

## Change Log

### 1.0.7
- Fixed a bug in the p2p_connected_to shortcode which messed up the HTML

### 1.0.6
- Update to block patterns and styling

### 1.0.5
- Change all labels and slugs from 'learning objective' to 'learning outcome'
- Added React related npm packages
- Create Gutenberg blocks for each 

### 1.0.4
- Add composer package
- Fixed PHPCS coding standard issues
- Added block patterns for learning objective, theme and lesson

### 1.0.3
- Registered connection type for Related Lessons
- Created a custom shortcode to display posts from 'to' direction.
- Updated shortcodes in documentation

### 1.0.2
- Create custom post types for learning objective, theme and lesson.
- Create custom taxonomy 'Tag' for each custom post type.
- Create p2p plugin connections.

### 1.0.1
- Enqueued filter assets including JavaScript and CSS to the homepage.
- Updated package.json

### 1.0.0
- Initial set up for the project.