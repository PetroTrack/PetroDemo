import { create } from "zustand";

export interface User {
  id: string;
  fullName: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;

  user: User | null;

  roles: string[];

  permissions: string[];

  login: (
    user: User,
    roles: string[],
    permissions: string[]
  ) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  user: null,

  roles: [],

  permissions: [],

  login: (user, roles, permissions) =>
    set({
      isAuthenticated: true,
      user,
      roles,
      permissions,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
      roles: [],
      permissions: [],
    }),
}));