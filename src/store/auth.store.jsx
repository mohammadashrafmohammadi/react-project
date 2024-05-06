import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: {
        name: null,
        firstname: null,
        lastname: null,
        adress: {
          primary: "Dasht-e-Barchi",
        },
      },
      token: null,
      login: ({ user, token }) =>
        set((state) => ({
          isLoggedIn: true,
          user: {
            ...state.user,
            name: user,
          },
          token,
        })),
      logout: () =>
        set({
          isLoggedIn: false,
          user: {
            name: null,
            firstname: null,
            lastname: null,
            adress: {
              primary: "Dasht-e-Barchi",
            },
          },
          token: null,
        }),
    }),
    {
      name: "auth", // name of the item in the storage (must be unique)
    }
  )
);
