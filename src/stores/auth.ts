import { create } from "zustand";

type AuthState = {
  open: boolean;
  loading: boolean;
  user: null | { name: string };
};

type AuthActions = {
  login: () => Promise<void>;
  setOpen: (open: boolean) => void;
};

type AuthStore = AuthState & AuthActions;

const defaultState: AuthState = {
  open: false,
  loading: false,
  user: null,
};

export const useAuth = create<AuthStore>((set) => ({
  ...defaultState,

  login: async () => {
    set({ loading: true });

    return new Promise((resolve) =>
      setTimeout(() => {
        set({ loading: false, user: { name: "Usmon" } });
        resolve();
      }, 2000),
    );
  },

  setOpen: (open) => set({ open }),
}));
