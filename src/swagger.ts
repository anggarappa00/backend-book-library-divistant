import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Example",
      version: "1.0.0",
      description: "Dokumentasi API Backend"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
            }
        }
    }
  },
  apis: ["./src/docs/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);
