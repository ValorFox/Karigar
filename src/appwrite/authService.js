import { ID } from "appwrite";
import { account } from "./config";

export class AuthService {
  async createAccount({ email, password }) {
    try {
      const returnedAccount = await account.create(
        ID.unique(),
        email,
        password
      );
      if (returnedAccount) {
        console.log(returnedAccount);
        return returnedAccount;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
