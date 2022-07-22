/**
 * BLOCK: CCEL Related Lessons
 */
const ServerSideRender = wp.serverSideRender;

const Edit = ({ attributes }) => {
	return (
		<ServerSideRender
			block="ccel/related-lesson"
			attributes={{ ...attributes }}
		/>
	);
};

export default Edit;
