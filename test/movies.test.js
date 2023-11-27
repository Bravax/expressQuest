const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies");
        console.log(response);

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200)
    });
});

describe("GET /api/movies/:id", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies/1");
        console.log(response);

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200)
    });

    it("should return error 404", async () => {
        const response = await request(app).get("/api/movies/0");
        console.log(response);

        expect(response.status).toEqual(404)
    });
});
