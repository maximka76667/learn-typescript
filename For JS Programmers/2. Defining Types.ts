// 2. Defining Types

interface User {
    name: string;
    id: number;
    clear(): void;
}

const user: User = {
  name: "Hayes",
  id: 0,
  clear: () => null,
};

class UserAccount {
  name: string;

  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  clear() {
    this.name = "";
    this.id = 0;
  }
}

const user2: User = new UserAccount("Maxim", 10);

function getAdminUser(): User {
  return user2;
}

function clearUserData(deletingUser: User) {
  deletingUser.clear();
}
