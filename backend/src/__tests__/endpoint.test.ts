import { describe, it } from '@jest/globals';
import supertest from 'supertest';

import ExpressServer from '../app';

describe("Endpoint test", () => {

  it("Get timezones from public API", async done => {
    const server = await ExpressServer();
    const name = "America/Yellowknife";
    supertest(server)
      .get("/timezones/" + name)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200, done);
  })

  it("Get saved timezones", async done => {
    const server = await ExpressServer();
    supertest(server)
      .get("/client/timezones")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Add timezone", async done => {
    const server = await ExpressServer();
    const body = { name : "America/Yellowknife" }

    supertest(server)
      .post("/client/timezones")
      .send(body)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, (err) => {
        if(err) return done!(err);

        done!();
      })
  });

  it("Check middleware to update timezone description", async done => {
    const server = await ExpressServer();
    const anyId = "_65q4we_random_id";
    const body = { description : "" }

    supertest(server)
      .put(`/client/timezones/${anyId}/description`)
      .send(body)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, err => {
        if(!err) return done!(err);

        done!();
      });
  });

})