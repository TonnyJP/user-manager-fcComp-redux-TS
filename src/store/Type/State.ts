import { User } from "./User";

export type StateType = {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  isUpdating: boolean;
  inModification: { id: string };
  isAddingUser: boolean;
};
