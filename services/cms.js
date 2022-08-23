import Butter from 'buttercms';

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

// Pull in content for a single page by name
export const getPage = async (name) => {
    try {
        const response = await butter.page.retrieve('*', name);

        return response?.data?.data
    } catch (error) {
        throw error.response.data.detail
    }
};
