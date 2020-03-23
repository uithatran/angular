export interface JwtResponse {
  user: {
      id: number,
      name: string,
      email: string,
      access_token: string
  }
}