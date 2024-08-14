import { faker } from "@faker-js/faker";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export const handleUser = () => {
  const user = faker.person.fullName(); // Rowan Nikolaus

  return user;
};
