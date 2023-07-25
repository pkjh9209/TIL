export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SimpleRestApi DocTest',
            version: '1.0.0',
        },
    },
    apis: ['./swagger-docs/*.swagger.js'], // files containing annotations as above
};
  