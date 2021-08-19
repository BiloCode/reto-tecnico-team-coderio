import supertest from "supertest";
import { Express } from "express";

import ExpressServer from "../app";

describe("Endpoint test", () => {
  let server: Express;

  beforeEach(async () => {
    server = await ExpressServer();
  });

  it("Get timezones from public API", async (done) => {
    const name = "America/Yellowknife";
    supertest(server)
      .get("/api/timezones/" + name)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200, done);
  });

  it("Get saved timezones", async (done) => {
    supertest(server)
      .get("/api/client/timezones")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Add timezone", async (done) => {
    const body = { name: "America/Yellowknife" };

    supertest(server)
      .post("/api/client/timezones")
      .send(body)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, (err) => {
        if (err) return done!(err);

        done!();
      });
  });

  it("Check middleware to update timezone description", async (done) => {
    const anyId = "_65q4we_random_id";
    const body = { description: "" };

    supertest(server)
      .put(`/api/client/timezones/${anyId}/description`)
      .send(body)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, (err) => {
        if (!err) return done!(err);

        done!();
      });
  });
});
