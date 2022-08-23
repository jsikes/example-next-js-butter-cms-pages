import { getPage } from '../services/cms';


const About = ({ content }) => (
    <>
        { !content && <p>No page content available.</p> }

        { content && <div dangerouslySetInnerHTML={{ __html: content }} /> }
    </>
);

export const getStaticProps = async () => {
    try {
        const content = (await getPage('about')).fields.content;

        return {
            props: {
                content
            }
        };
    } catch (error) {
        console.error(`Couldn't load content.`, error);

        return {
            props: { content: null }
        }
    }
};

export default About;
