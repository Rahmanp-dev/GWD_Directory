import "next-auth";

declare module "next-auth" {
  interface Profile {
    id: string;
    login: string;
    bio?: string;
  }

  interface Session {
    id: string;
  }

  interface JWT {
    id?: string;
  }
}

