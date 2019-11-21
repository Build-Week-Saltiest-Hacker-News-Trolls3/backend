const request = require("supertest");
const server = require("../api/server");
const db = require("../data/db-config");
const Users = require("./users-model");

describe("User Testing", () => {
  describe("GET /", () => {
    it("Should return a list of users", async () => {
      const result = await Users.find();
      expect(result).not.toHaveLength(0);
    });

    it("Should return a single user", async () => {
      const result = await Users.find();
      expect(result[1].username).toBe("usertwo");
    });

    it("Should return a user by id", async () => {
      const result = await Users.findById(1);
      expect(result.username).toBe("admin");
    });

    it("Should return a list of favorites by id", async () => {
      const result = await request(server)
        .get(`/api/users/${1}/favorites`)
        .set({
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTU3Mzk2MDc3NCwiZXhwIjoxNTczOTY0Mzc0fQ.mNJvrC4mSNKeNh9_7oXmBm-BXy7BYqBAdw_h-6Hrf4A"
        });
      expect(result.body).not.toHaveLength(0);
    });

    it("Should return status 400 without validation", async () => {
      const result = await request(server).get(`/api/users/${1}/favorites`);
      expect(result.status).toBe(400);
    });

    it("Should return status 200 with validation", async () => {
      const result = await request(server)
        .get(`/api/users/${1}/favorites`)
        .set({
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTU3Mzk2MDc3NCwiZXhwIjoxNTczOTY0Mzc0fQ.mNJvrC4mSNKeNh9_7oXmBm-BXy7BYqBAdw_h-6Hrf4A"
        });
      expect(result.status).toBe(200);
    });
  });

  describe("POST /", () => {
    it("Should add a comment to favorites", async () => {
      const result = await request(server)
        .post("/api/users/1/favorites/3")
        .set({
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTU3Mzk2MDc3NCwiZXhwIjoxNTczOTY0Mzc0fQ.mNJvrC4mSNKeNh9_7oXmBm-BXy7BYqBAdw_h-6Hrf4A"
        });
      expect(result.body.message).toMatch(/successful/i);
    });
  });
});
