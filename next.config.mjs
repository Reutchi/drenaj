import * as path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname); // Get dirname dynamically

export default {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};