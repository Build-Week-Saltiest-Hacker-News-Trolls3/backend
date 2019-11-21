const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db-config");

describe("Authentication Testing: ", () => {
  describe("TO DO", () => {
    test.todo("add: username validation");
    test.todo("add: unique error 'user exists'");
    test.todo("add: password validation");
    test.todo("add: unique error 'password must be...'");
  });
  describe("GET /", () => {
    it("Should return status 200", async () => {
      const res = await request(server).get("/api/auth");
      expect(res.status).toBe(200);
    });

    it("Should return a JSON object", async () => {
      const res = await request(server).get("/api/auth");
      expect(res.type).toMatch(/json/i);
    });
  });

  describe("POST /register", () => {
    describe("Add a new user", () => {
      beforeEach(async () => {
        await db("users").truncate();
      });

      it("Should return status 200", async () => {
        const res = await request(server)
          .post("/api/auth/register")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.status).toBe(200);
      });

      it("Should return a JSON object", async () => {
        const res = await request(server)
          .post("/api/auth/register")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.type).toMatch(/json/i);
      });

      it("Should return the correct username", async () => {
        const res = await request(server)
          .post("/api/auth/register")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.body.username).toBe("testdbaccount");
      });
    });
  });

  describe("POST /login", () => {
    describe("Login as an existing user", () => {
      it("Should return status 200", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.status).toBe(200);
      });

      it("Should return status 401", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ username: "wronguser", password: "wrongpassword" });

        expect(res.status).toBe(401);
      });

      it("Should return a JSON object", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.type).toMatch(/json/i);
      });

      it("Should return a success object", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.body.message).toMatch(/success/i);
      });

      it("Should return a token", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ username: "testdbaccount", password: "testpassword" });

        expect(res.body.payload).not.toHaveLength(0);
      });
    });
  });
});
