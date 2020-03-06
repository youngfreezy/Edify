export default {
  quoteId: "UP6944099",
  rating_address: {
    line_1: "fda",
    line_2: "adf",
    city: "adf",
    region: "adfa",
    postal: "20010"
  },
  policy_holder: { first_name: "fdfa", last_name: "dafad" },
  variable_options: {
    deductible: {
      title: "Deductible",
      description:
        "The amount of money you will pay in an insurance claim before the insurance coverage kicks in.",
      values: [500, 1000, 2000]
    },
    asteroid_collision: {
      title: "Asteroid Collision Limit",
      description:
        "The maximum amount covered for damages caused by asteroid collisions.",
      values: [100000, 300000, 500000, 1000000]
    }
  },
  variable_selections: { deductible: 500, asteroid_collision: 100000 },
  premium: 3000
};
