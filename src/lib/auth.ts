import bcrypt from "bcryptjs";

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function comparePasswordSync(password: string, hash: string): boolean {
  const result = bcrypt.compareSync(password, hash);
  return result;
}
