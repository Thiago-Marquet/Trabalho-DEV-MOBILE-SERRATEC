export const login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          name: "nome",
          email: "email@gmail.com",
          pass: "123"
        },
        token: "skldjfdsjklh23962579oashlasflhfl20382fslkdfskdf",
      });
    }, 2000);
  });
};
