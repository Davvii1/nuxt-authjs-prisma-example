declare module "@auth/core/types" {
  interface Session {
    user?: User;
  }
  interface User {
    id: number;
    role: string;
  }
}

export {};
