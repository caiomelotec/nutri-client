import axios from "axios";
import { create } from "zustand";

type User = {
  currentUser: string | null;
};

type userInput = { email: string; password: string };

type UserActions = {
  login: (input: userInput) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<User & UserActions>((set) => ({
  currentUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,

  login: async (input) => {
    const res = await axios.post("http://localhost:8080/login", input, {
      withCredentials: true,
    });
    set({ currentUser: res.data.userInfo });
    localStorage.setItem("user", JSON.stringify(res.data.userInfo));
  },

  logout: async () => {
    await axios.post("http://localhost:8080/logout", null, {
      withCredentials: true,
    });
    set({ currentUser: null });
    localStorage.removeItem("user");
  },
}));
